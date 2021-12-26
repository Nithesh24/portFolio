import SocialCard from "./SocialCard"

const SocialMedia = (props) =>{

    return(
        <div className = "socialBodyFlex">
            <div className = "socialBody">
                < SocialCard image = "https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png" href = "https://github.com/Nithesh24" />

                < SocialCard image = "https://assets.turbologo.com/blog/en/2019/10/19084944/youtube-logo-illustration.jpg" href = "https://www.youtube.com/channel/UCB_QDFoBqNREkrR_GI8FMWg"/>

                < SocialCard image = "https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" href = "https://twitter.com/copyNiN24" />

                < SocialCard image = "https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg" href = "https://www.instagram.com/copynin_/" />

            </div>
        </div>
    )
}

export default SocialMedia