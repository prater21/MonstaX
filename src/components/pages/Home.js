import Members from "../../model/members";
import "./Home.css"
import { useState } from "react";


const Home = () => {
    const [showMem, setShowMem] = useState('');


    const onClickImg = (member) => {
        setShowMem(member);
    }
    const onClickTitle = () => {
        setShowMem('');
    }


    return (
        <div className="home">
            <div className="home__title">
                <h1 onClick={onClickTitle}>Monsta X</h1>
                <ul className="home__members_lg">
                    {Members.map(member =>
                        <li key={member.id} className="home__member">
                            <img className="home__memImg" src={process.env.PUBLIC_URL + `/imgs/members/${member.id}.jpg`} onClick={() => { onClickImg(member) }} alt={member.name} />
                            <p className="home__memTitle">{member.stageName}</p>
                        </li>)}
                </ul>
                <ul className="home__members_sm">
                    {Members.map(member =>
                        <li key={member.id} className="home__member">
                            <img className="home__memImg" src={process.env.PUBLIC_URL + `/imgs/members/${member.id}.jpg`} onClick={() => { onClickImg(member) }} alt={member.name} />
                            <p className="home__memTitle">{member.stageName}</p>
                        </li>)}
                </ul>
            </div>
            {!showMem &&
                <div className="home__description">
                    <article className="home__mainText">
                        스타쉽엔터테인먼트의 첫 힙합 보이그룹 몬스타엑스는 2015년 5월 첫 번째 데뷔앨범 [TRESPASS]로 데뷔했다.
                        <br />
                        그룹명은 'MON'(나의) + 'STA'(스타) + 'X'(미지의 존재)를 결합해, 'K-POP을 평정할 괴물들'이라는 뜻을 지니고 있다. 1세대 신화, 2세대 2PM에 이어 3세대 짐승돌의 타이틀을 이어 받고 있다.
                        M.net의 리얼리티 서바이벌 프로그램 노머시(NO.MERCY)를 통해 화려한 데뷔전을 치르며, 실력을 검증받았다.
                        거친 힙합 에너지와 비글미로 기존의 남자 아이돌과는 다른 차별화된 매력을 어필하며 국내외 팬들의 마음을 사로잡는데 성공했다.
                    </article>
                    <div className="home__div">
                        <h2> Recent Album</h2>
                        <div className="home__albums">
                            <div className="home__album">
                                <img src={process.env.PUBLIC_URL + "/imgs/albums/mini_12.jpeg"} alt="mini_12" />
                                <p>REASON</p>
                            </div>
                            <div className="home__album">
                                <img src={process.env.PUBLIC_URL + "/imgs/albums/mini_11.jpeg"} alt="mini_11" />
                                <p>SHAPE of LOVE</p>
                            </div>
                            <div className="home__album">
                                <img src={process.env.PUBLIC_URL + "/imgs/albums/full_usa_2.jpeg"} alt="mini_11" />
                                <p>The Dreaming</p>
                            </div>
                            <div className="home__album">
                                <img src={process.env.PUBLIC_URL + "/imgs/albums/mini_10.jpeg"} alt="mini_11" />
                                <p>NO LIMIT</p>
                            </div>
                            <div className="home__album">
                                <img src={process.env.PUBLIC_URL + "/imgs/albums/mini_9.jpeg"} alt="mini_11" />
                                <p>One Of A Kind</p>
                            </div>
                            <div className="home__album">
                                <img src={process.env.PUBLIC_URL + "/imgs/albums/full_jap_3.jpeg"} alt="mini_11" />
                                <p>Flavors Of Love</p>
                            </div>
                            <div className="home__album">
                                <img src={process.env.PUBLIC_URL + "/imgs/albums/full_3.jpeg"} alt="mini_11" />
                                <p>Fatal Love</p>
                            </div>
                        </div>
                    </div>
                    <div className="home__div">
                        <h2>Youtube</h2>
                        <div className="home__youtubes">
                            <div className="home__youtube">
                                <iframe src="https://www.youtube.com/embed/gXmdbn81N4g" title="[몬 먹어도 고] EP.7 몬제적 남자 part.1 (Proble&#39;MON&#39;tic Men)" frameorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className="home__youtube">
                                <iframe src="https://www.youtube.com/embed/94EKwyNMCts"
                                    title="[몬채널][B] EP.361 MINHYUK NFL SUMMER" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
                            </div>
                            <div className="home__youtube">
                                <iframe src="https://www.youtube.com/embed/g3yLJjAfwfQ" title="[몬 먹어도 고] 아찔한 소개팅 (우정편) 비하인드 (A Shocking Blind Date (Friendship Edition) - Behind The Scenes)" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
                            </div>
                            <div className="home__youtube">
                                <iframe src="https://www.youtube-nocookie.com/embed/IKfju-V-hR4" title="[몬 먹어도 고] EP.6 아찔한 소개팅 (우정편) part.2 (A Shocking Blind Date - Friendship Edition)" frameborder="0" allow="accelerometer;encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="home__div">
                        <h2>Images</h2>
                        <div className="home__imgs">
                            <img className="home__img" src={process.env.PUBLIC_URL + `/imgs/homeImg/11.jpeg`} width={"180px"} alt={showMem.stageName} />
                            <img className="home__img" src={process.env.PUBLIC_URL + `/imgs/homeImg/12.jpeg`} width={"180px"} alt={showMem.stageName} />
                            <img className="home__img" src={process.env.PUBLIC_URL + `/imgs/homeImg/13.jpeg`} width={"180px"} alt={showMem.stageName} />
                            <img className="home__img" src={process.env.PUBLIC_URL + `/imgs/homeImg/14.jpeg`} width={"180px"} alt={showMem.stageName} />
                            <img className="home__img" src={process.env.PUBLIC_URL + `/imgs/homeImg/15.jpeg`} width={"180px"} alt={showMem.stageName} />
                            <img className="home__img" src={process.env.PUBLIC_URL + `/imgs/homeImg/16.jpeg`} width={"180px"} alt={showMem.stageName} />
                        </div>
                    </div>
                </div>
            }
            {showMem &&
                <div className="home__mainMem">
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
                    {showMem.album && <div className="home__div">
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
                    {showMem.broadcast && <div className="home__div">
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


        </div>
    )
}

export default Home;