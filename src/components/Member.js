/**
 * member description component (home page)
 */
import "./Member.css"

const Member = ({ showMem }) => {
    return <div className="home__mainMem">
        <div className="home__curMem">
            <img className="home__curMemImg" src={process.env.PUBLIC_URL + `/imgs/members/${showMem.id}_profile.jpg`} width={"180px"} alt={showMem.stageName} />
            <div className="home__curmemProfile">
                <h1>{showMem.stageName}</h1>
                <p><span>본명 : </span>{showMem.name}</p>
                <p><span>출생 : </span>{showMem.birth}</p>
                <p><span>포지션 : </span>{showMem.position}</p>
                <hr />
                <p>{showMem.description}</p>
            </div>
        </div>
        <hr />
        {showMem.album && <div className="home__curMemContent">
            <h2>Album</h2>
            <ul className="home__curMemAlbums">
                {showMem.album.map(album => (
                    <li className="home__curMemAlbum" key={album.id}>
                        <img src={process.env.PUBLIC_URL + `/imgs/albums/${album.imgSrc}`} alt=""></img>
                        <p>{album.title}</p>
                    </li>
                ))}
            </ul>
        </div>}
        {showMem.broadcast && <div className="home__curMemContent">
            <h2>Broadcast </h2>
            <ul className="home__curMemBroads">
                {showMem.broadcast.map(broadcast => (
                    <li className="home__curMemBroad" key={broadcast.id}>
                        <img src={process.env.PUBLIC_URL + `/imgs/shows/${broadcast.imgSrc}`} alt=""></img>
                        <p>{broadcast.title}</p>
                    </li>
                ))}
            </ul>
        </div>}
    </div>
}

export default Member;