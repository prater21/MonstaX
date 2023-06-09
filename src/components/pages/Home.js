/**
 * home(index) page
 */
import Members from "../../model/members";
import HomeMain from "../HomeMain";
import Member from "../Member";
import "./Home.css"
import { useState } from "react";

const Home = () => {
    const [showMem, setShowMem] = useState('');

    const setMember = (member) => {
        setShowMem(member);
    }
    
    const onClickTitle = () => {
        setShowMem(null);
    }

    return (
        <div className="home">
            <div className="home__title">
                <h1 onClick={onClickTitle}>Monsta X</h1>
                <ul className="home__members">
                    {Members.map(member =>
                        <li key={member.id} className="home__member">
                            <img className="home__memImg" src={process.env.PUBLIC_URL + `/imgs/members/${member.id}.jpg`} onClick={() => { setMember(member) }} alt={member.name} />
                            <p className="home__memTitle">{member.stageName}</p>
                        </li>)}
                </ul>
            </div>

            {!showMem && <HomeMain />}
            
            {showMem && <Member showMem={showMem} />}

        </div>
    )
}

export default Home;