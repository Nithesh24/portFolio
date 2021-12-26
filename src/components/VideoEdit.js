import VideoCard from "./VideoCard"

const VideoEdit = () =>{
    return(
        <div className="videoEditBody">
            <div className = "videoEdit">
                <VideoCard link = "https://www.youtube.com/watch?v=5sEY58qQ8Io&ab_channel=NitheshKumar" image = "https://i9.ytimg.com/vi_webp/5sEY58qQ8Io/mqdefault.webp?v=61b38221&sqp=CLTooY4G&rs=AOn4CLDyObnYPn02PIAg4KYAtqcRQkp8dA" info = "Oikawa IDFC [AMV edit]"/>
                <VideoCard link = "https://www.youtube.com/watch?v=smUp6jmSv3A&ab_channel=NitheshKumar" image = "https://i9.ytimg.com/vi/smUp6jmSv3A/mqdefault.jpg?v=60b21bdb&sqp=CODqoY4G&rs=AOn4CLA1iWo_wq6iA7we9qdiYfSIHoJ2JA" info = "fork for a fork"/>
                <VideoCard link = "https://www.youtube.com/watch?v=93k1JD5qHOk&ab_channel=NitheshKumar" image = "https://i9.ytimg.com/vi/93k1JD5qHOk/mqdefault.jpg?v=60507bf4&sqp=CLTooY4G&rs=AOn4CLDuiJ7fSabZ-o53mcNih-buXgtMnA" info = "Typical 1000elo chess match (baka mitai)"/>
            </div>
        </div>
    )
}

export default VideoEdit