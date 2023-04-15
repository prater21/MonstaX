import { useLocation } from "react-router-dom";
import "./AlbumDetail.css"
import { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';


const AlbumDetail = () => {
    const location = useLocation();

    const [album, setAlbum] = useState(null);
    useEffect(() => {
        setAlbum(location.state.album);
    }, [location.state.album]);
    useEffect(() => {
        window.scroll({ top: 0 })

    }, [])
    const goToHandler = (link) => {
        window.open(link);
    }
    return (<>
        {album && < div className="albumDetail" >
            <div className="albumDetail__main">
                <img src={`./imgs/albums/${album.id}.jpeg`} alt="" />
                <div className="albumDetail__mainDetail">
                    <h2>{album.title}</h2>
                    <p>발매일 : {album.release}</p>
                    <hr className="albumDetail__hr" />
                    <div className="albumDetail__icons">
                        <div className="albumDetail__icon">
                            <img src="./imgs/icon/youtubemusicIcon.png" onClick={() => { goToHandler(album.links.youtubeMusic) }} alt="" />
                            <p>youtube music</p>
                        </div>
                        <div className="albumDetail__icon">
                            <img src="./imgs/icon/spotifyIcon.png" onClick={() => { goToHandler(album.links.spotify) }} alt="" />
                            <p>spotify</p>
                        </div>
                        <div className="albumDetail__icon">
                            <img src="./imgs/icon/melonIcon.png" onClick={() => { goToHandler(album.links.melon) }} alt="" />
                            <p>melon</p>
                        </div>
                    </div>
                </div>
            </div>

            {album.description && <div className="albumDetail__description">
                <hr />
                <h3>앨범 소개</h3>
                <p>{album.description}</p>
            </div>}
            <hr />
            <div className="albumDetail__trackDetail">
                <h3>tracks</h3>
                <ul className="albumDetail__tracks">
                    {album.tracks?.map((track, index) => (
                        <li className="albumDetail__track" key={track.title}>
                            <p className="albumDetail__trackTitle">{track.title}</p>
                        </li>
                    ))}

                </ul>
            </div>
            <div className="albumDetail__contents">
                {album.youtube.mv && <div>
                    <hr />
                    <h3>MV</h3>
                    <iframe src={album.youtube.mv} width="480" height="270" title={album + "mv"} frameborder="0" allow="accelerometer;encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                }
                {album.youtube.related?.src && <div>
                    <hr />
                    <h3>Related</h3>
                    <div className="albumDetail__videos">
                        {album.youtube.related.src.map(src => (
                            <div key={src}>
                                <iframe src={src} width="480" height="270" title={src} frameborder="0" allow="accelerometer;encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        ))}
                    </div>
                </div>}
            </div>
            {/* <div className="albumDetail__photos">
                <h3>Concept Photo 1</h3>
                <div className="albumDetail__photo">
                    <img height="300px" src={"/imgs/albums/" + album.id + "/concept1/0.jpeg"} />
                    <img height="300px" src={"/imgs/albums/" + album.id + "/concept1/1.jpeg"} />
                    <img height="300px" src={"/imgs/albums/" + album.id + "/concept1/2.jpeg"} />
                    <img height="300px" src={"/imgs/albums/" + album.id + "/concept1/3.jpeg"} />
                    <img height="300px" src={"/imgs/albums/" + album.id + "/concept1/4.jpeg"} />
                    <img height="300px" src={"/imgs/albums/" + album.id + "/concept1/5.jpeg"} />
                    <img height="300px" src={"/imgs/albums/" + album.id + "/concept1/6.jpeg"} />
                    <img height="300px" src={"/imgs/albums/" + album.id + "/concept1/7.jpeg"} />
                    <img height="300px" src={"/imgs/albums/" + album.id + "/concept1/8.jpeg"} />
                    <img height="300px" src={"/imgs/albums/" + album.id + "/concept1/9.jpeg"} />
                    <img height="300px" src={"/imgs/albums/" + album.id + "/concept1/10.jpeg"} />
                </div>

            </div> */}
        </div >

        }

    </>
    )
}

export default AlbumDetail;