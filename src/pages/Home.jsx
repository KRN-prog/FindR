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
    /*function Like() {
        document.querySelector(".userInfo__likeDislike__like").classList.add("displayLikeDislike");
        document.querySelector(".card").classList.remove("likeUnBending");
        document.querySelector(".card").classList.add("likeBending");
    }
    function RemoveLike() {
        document.querySelector(".userInfo__likeDislike__like").classList.remove("displayLikeDislike");
        document.querySelector(".card").classList.remove("likeBending");
        document.querySelector(".card").classList.add("likeUnBending");
        setTimeout(() => {
            document.querySelector(".card").classList.remove("likeUnBending");
        }, "850");
    }

    function Dislike() {
        document.querySelector(".userInfo__likeDislike__dislike").classList.add("displayLikeDislike");
        document.querySelector(".card").classList.remove("DislikeUnBending");
        document.querySelector(".card").classList.add("DislikeBending");
    }
    function RemoveDislike() {
        document.querySelector(".userInfo__likeDislike__dislike").classList.remove("displayLikeDislike");
        document.querySelector(".card").classList.remove("DislikeBending");
        document.querySelector(".card").classList.add("DislikeUnBending");
        setTimeout(() => {
            document.querySelector(".card").classList.remove("DislikeUnBending");
        }, "850");
    }

    const changeLikeHover = () => {
        setLikeHover(!likeHover)
        if (likeHover === true) {
            document.querySelector(".userInfo__likeDislike__like").classList.add("displayLikeDislike");
        }else{
            document.querySelector(".userInfo__likeDislike__like").classList.remove("displayLikeDislike");
        }
    }
    const changeLikeUser = () => {
        setLikeUser(!likeUser)
        console.log(likeUser)
    }

    const changeDislikeHover = () => {
        setDislikeHover(!dislikeHover)
        if (dislikeHover === true) {
            document.querySelector(".userInfo__likeDislike__dislike").classList.add("displayLikeDislike");
        }else{
            document.querySelector(".userInfo__likeDislike__dislike").classList.remove("displayLikeDislike");
        }
    }
    const changeDislikeUser = () => {
        setDislikeUser(!dislikeUser)
        console.log(dislikeUser)
    }*/
    const changeLikeHover = () => {
        setLikeHover(!likeHover)
    }
    const changeDislikeHover = () => {
        setDislikeHover(!dislikeHover)
    }
    return(
        <React.StrictMode>
            <div className='LogoBox'>
                <img src={Logo} alt={Logo} />
            </div>
            <Card image={Brandan} likeHoverState={likeHover} likeState={likeUser} dislikeHoverState={dislikeHover} dislikeState={dislikeUser}/>
            <div className='iconsBox'>
                <span className="nopeIcone icons" onMouseOver={changeDislikeHover} onMouseLeave={changeDislikeHover} ></span>
                <span className="starIcone icons"></span>
                <span className="likeIcone icons" onMouseOver={changeLikeHover} onMouseLeave={changeLikeHover}></span>
            </div>
        </React.StrictMode>
    )
}

export default Home