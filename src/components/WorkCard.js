import img from "../avatar.png"

const WorkCard = (props) =>{
    return(
        <div className="workCard">
            <img src = {props.image} alt = "abc" className = "workImage"></img>
            <div className="workInfo">
                <div className="workTitle">
                    {props.title}
                </div>
                <div className="workAbout">
                    {props.about}
                </div>
                <a className="workLink" href = {props.link}>
                    {props.link}
                </a>
                <div className = "workDate">
                    {props.date}
                </div>
            </div>
        </div>
    )
}

WorkCard.defaultProps = {
    title : "Title of Project",
    about : "about the project idk why i made this or how i made this something like that maybe idk what else to meantion here",
    link : "https//www.link-of-the-site.com",
    date : "25/12/2021",
    image : img,
}
export default WorkCard