
const VideoCard = (props) =>{
    return(
        <div className="videoCard">
            <img className = "videoImage" src = {props.image}/>
            <div className = "videoInfo">
                <p>{props.info}</p>
                <a href = {props.link}>click here to watch</a>
            </div>
        </div>
    )
}

VideoCard.defaultProps = {
    link : "https://www.youtube.com/watch?v=5sEY58qQ8Io&ab_channel=NitheshKumar",
    image : "https://i9.ytimg.com/vi_webp/5sEY58qQ8Io/mqdefault.webp?v=61b38221&sqp=CLTooY4G&rs=AOn4CLDyObnYPn02PIAg4KYAtqcRQkp8dA",
    info : "Oikawa IDFC [AMV edit]",
}

export default VideoCard