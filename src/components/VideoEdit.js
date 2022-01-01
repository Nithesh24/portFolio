import VideoCard from "./VideoCard"
import oikawa from "./assets/yt/oikawa_edit.jpg"
import elo  from "./assets/yt/1000elo.jpg"
import fork  from "./assets/yt/fork_for_fork.jpg"

const VideoEdit = () =>{
    return(
        <div className="videoEditBody">
            <div className = "videoEdit">
                <VideoCard link = "https://www.youtube.com/watch?v=5sEY58qQ8Io&ab_channel=NitheshKumar" image = {oikawa} info = "Oikawa IDFC [AMV edit]"/>
                <VideoCard link = "https://www.youtube.com/watch?v=smUp6jmSv3A&ab_channel=NitheshKumar" image = {fork} info = "fork for a fork"/>
                <VideoCard link = "https://www.youtube.com/watch?v=93k1JD5qHOk&ab_channel=NitheshKumar" image = {elo} info = "Typical 1000elo chess match (baka mitai)"/>
            </div>
        </div>
    )
}

export default VideoEdit