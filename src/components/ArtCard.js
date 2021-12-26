import toji from "./assets/art/toji.jpg"

const ArtCard = (props) =>{
    return(
        <img className = "artImage" src = {props.image}/>
    )
}

ArtCard.defaultProps = {
    image : toji,
}

export default ArtCard