
const Header = (props) =>{

    const work = () =>{
        return
    }

    const activeBody = (para) =>{
        if(para === props.showBody){
            console.log('hello')
        }
    }


    return(
        <div className = "header">
            <div className = "avatar">
                <img src ={props.avatar} alt = "image" className = "avatar"/>
            </div>
            <div className = "bio">
                <p>Hello I am Nithesh Kumar 19 year old student.</p>
            </div>
            <div className = "mainMenu">
                <button className = {props.showBody === 'work' ? "activeMenu" : "menu"} onClick = {() => props.onClick('work')} >work</button>
                <button className = {props.showBody === 'art' ? "activeMenu" : "menu"} onClick = {() => props.onClick('art')} >art</button>
                <button className = {props.showBody === 'videoEdit' ? "activeMenu" : "menu"} onClick = {() => props.onClick('videoEdit')} >videoEdit</button>
                <button className = {props.showBody === 'socialMedia' ? "activeMenu" : "menu"} onClick = {() => props.onClick('socialMedia')} >socialMedia</button>
            </div>
        </div>
    )
}

export default Header