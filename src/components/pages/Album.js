/**
 * album page
 */
import "./Album.css"
import { useEffect, useState } from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link, useLoaderData } from "react-router-dom";

const Album = () => {
    const [albums, setAlbums] = useState("");
    const [showAlbums, setshowAlbums] = useState("");
    const _album = useLoaderData();

    const onSetTypes = (item) => {
        if (item === "all") {
            setshowAlbums(albums);
        }
        else {
            let result = albums.filter(value => value.types === item);
            setshowAlbums(result);
        }

    }

    useEffect(() => {
        setAlbums(_album);
        setshowAlbums(_album);
    }, [_album])

    useEffect(() => {

    }, [showAlbums])

    return (
        <div className="album">
            <h1 className="album__title">Album</h1>
            <div className="album__btn">
                <DropdownButton id="dropdown-basic-button" variant="secondary" className="mt-1" title="types " onSelect={(item) => { onSetTypes(item); }}>
                    <Dropdown.Item eventKey="all" >전체보기 (All)</Dropdown.Item>
                    <Dropdown.Item eventKey="FULL" >정규앨범 (Full Ablum)</Dropdown.Item>
                    <Dropdown.Item eventKey="EP" >미니앨범 (EP)</Dropdown.Item>
                </DropdownButton>
            </div>

            {showAlbums &&
                <ul className="album__albums">
                    {showAlbums.slice(0).reverse().map((album, index) => {
                        if (index % 2 === 0)
                            return <li className="album__album" key={album.id}>
                                <img src={process.env.PUBLIC_URL + `/imgs/albums/${album.id}.jpeg`} alt="" />
                                <div className="album__description">
                                    <h2>{album.title}</h2>
                                    <p>{album.release}</p>
                                    <Link to={album.id} state={{ album: album }}>
                                        <button>Detail</button>
                                    </Link>
                                </div>
                            </li>
                        else
                            return <li className="album__album" key={album.id}>
                                <div className="album__description">
                                    <h2>{album.title}</h2>
                                    <p>{album.release}</p>
                                    <Link to={album.id} state={{ album: album }}>
                                        <button>Detail</button>
                                    </Link>
                                </div>
                                <img src={process.env.PUBLIC_URL + `/imgs/albums/${album.id}.jpeg`} alt="" />
                            </li>
                    })}
                </ul>}

        </div >
    )
}

export default Album;

//fetch album data from firebase
export async function loader() {
    const response = await fetch("https://monsta-x-a7d84-default-rtdb.firebaseio.com/albums.json")
    if (!response.ok) {
        console.log("Error")
    } else {
        return response.json();
    }
}

