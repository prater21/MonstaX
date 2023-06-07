/**
 * album detail page
 */
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AlbumDetail.css"

const AlbumDetail = () => {
    const [album, setAlbum] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setAlbum(location.state.album);
    }, [location.state.album]);

    useEffect(() => {
        window.scroll({ top: 0 })

    }, [])
    const goToHandler = (link) => {
        window.open(link);
    }
    return <>
        {album && < div className="albumDetail" >
            <div className="albumDetail__main">
                <img src={process.env.PUBLIC_URL + `/imgs/albums/${album.id}.jpeg`} alt="" />
                <div className="albumDetail__mainDetail">
                    <h2>{album.title}</h2>
                    <p>발매일 : {album.release}</p>
                    <hr className="albumDetail__hr" />
                    <div className="albumDetail__icons">
                        <div className="albumDetail__icon">
                            <img src={process.env.PUBLIC_URL + "/imgs/icon/youtubemusicIcon.png"} onClick={() => { goToHandler(album.links.youtubeMusic) }} alt="" />
                            <p>youtube music</p>
                        </div>
                        <div className="albumDetail__icon">
                            <img src={process.env.PUBLIC_URL + "/imgs/icon/spotifyIcon.png"} onClick={() => { goToHandler(album.links.spotify) }} alt="" />
                            <p>spotify</p>
                        </div>
                        <div className="albumDetail__icon">
                            <img src={process.env.PUBLIC_URL + "/imgs/icon/melonIcon.png"} onClick={() => { goToHandler(album.links.melon) }} alt="" />
                            <p>melon</p>
                        </div>
                    </div>
                </div>
            </div>

            {album.description &&
                //album description
                <div className="albumDetail__contents">
                    <hr />
                    <h3>앨범 소개</h3>
                    <p>{album.description}</p>
                </div>}

            {/* album tracks */}
            <div className="albumDetail__contents">
                <hr />
                <h3>tracks</h3>
                <ul className="albumDetail__tracks">
                    {album.tracks?.map((track, index) => (
                        <li className="albumDetail__track" key={track.title}>
                            <p className="albumDetail__trackTitle">{track.title}</p>
                        </li>
                    ))}

                </ul>
            </div>

            {album.youtube.mv &&
                // music video
                <div className="albumDetail__contents">
                    <hr />
                    <h3>MV</h3>
                    <iframe src={album.youtube.mv} width="320" height="180" title={album + "mv"} frameborder="0" allow="accelerometer;encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            }
            {album.youtube.related?.src &&
                // related video
                <div className="albumDetail__contents">
                    <hr />
                    <h3>Related</h3>
                    <div className="albumDetail__videos">
                        {album.youtube.related.src.map(src => (
                            <div key={src}>
                                <iframe src={src} width="320" height="180" title={src} frameborder="0" allow="accelerometer;encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        ))}
                    </div>
                </div>}
        </div>
        }
    </>

}

export default AlbumDetail;