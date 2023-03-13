function Card({image, likeHoverState, likeState, dislikeHoverState, dislikeState}) {
    console.log("========== CONSOLE LOG ==========")
    console.log(likeState)
    console.log(dislikeState)
    console.log("========== CONSOLE LOG ==========")
    
    return(
        <div className="card card--apparition">
            <img src={image} alt={image} className={
            likeHoverState === true && likeState === false && dislikeState === false ? "userImage like--bending"
            : dislikeHoverState === true && likeState === false && dislikeState === false ? "userImage dislike--bending"
            : likeState === true ? "userImage like"
            : dislikeState === true ? "userImage dislike"
            : "userImage UnBending" }/>

            <div  className={
            likeHoverState === true && likeState === false && dislikeState === false ? "userInfo like--bending"
            : dislikeHoverState === true && likeState === false && dislikeState === false ? "userInfo dislike--bending"
            : likeState === true ? "userInfo like"
            : dislikeState === true ? "userInfo dislike"
            : "userInfo UnBending" }>
                <div className="userInfo__likeDislike">
                    <span className={likeHoverState === true ? 'userInfo__likeDislike__like displayLikeDislike' : 'userInfo__likeDislike__like'}>Like</span>
                    <span className={dislikeHoverState === true ? 'userInfo__likeDislike__dislike displayLikeDislike' : 'userInfo__likeDislike__dislike'}>Nope</span>
                </div>
                <div className="userInfo__box">
                    <h3 className="userInfo__box__nameAge">Jane Cooper, 25</h3>
                    <span className="userInfo__box__city">Lives in Portland, Illinois</span>
                    <span className="userInfo__box__millesFrom">11 miles away</span>
                </div>
            </div>
        </div>
    )
}

export default Card