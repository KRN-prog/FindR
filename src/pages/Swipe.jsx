import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import Brandan from '../assets/img/UI Faces/pexels-brandan-saviour-2741701.jpg';
import Logo from '../assets/icon/Logo.svg'

function Home() {
    const [likeHover, setLikeHover] = useState(false)
    const [likeUser, setLikeUser] = useState(false)
    const [dislikeHover, setDislikeHover] = useState(false)
    const [dislikeUser, setDislikeUser] = useState(false)
    useEffect(() => {
        document.title = "FindR"
    }, [])
    const changeLikeHover = () => {
        setLikeHover(!likeHover)
    }
    const changeDislikeHover = () => {
        setDislikeHover(!dislikeHover)
    }
    const updateLikeUser = () => {
        setLikeUser(!likeUser)
    }
    const updateDislikeUser = () => {
        setDislikeUser(!dislikeUser)
    }
    return(
        <React.StrictMode>
            <div className='LogoBox'>
                <img src={Logo} alt={Logo} />
            </div>
            <Card image={Brandan} likeHoverState={likeHover} likeState={likeUser} dislikeHoverState={dislikeHover} dislikeState={dislikeUser} />
            <div className='iconsBox'>
                <span className="nopeIcone icons" onMouseOver={changeDislikeHover} onMouseLeave={changeDislikeHover} onClick={updateDislikeUser}></span>
                <span className="starIcone icons"></span>
                <span className="likeIcone icons" onMouseOver={changeLikeHover} onMouseLeave={changeLikeHover} onClick={updateLikeUser}></span>
            </div>
        </React.StrictMode>
    )
}

export default Home