
const SocialBody = (props) =>{
    return(
        <div className = "socialCard">
            <a href = {props.href} className = "socialHref">
                <img src = {props.image} key = {props.image} className = "socialImage"></img>
            </a>
        </div>

    )
}

SocialBody.defaultProps = {
    image : "https://i.pinimg.com/originals/68/92/76/689276ec6042b9ab7e55aaac0214a7f9.jpg",
    href : "https://www.youtube.com/",
}
export default SocialBody