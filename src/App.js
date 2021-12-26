import Header from "./components/Header";
import avatar from "./avatar.png"
import {useState} from 'react'
import WorkBody from "./components/workBody";
import SocialMedia from "./components/SocialMedia";
import Art from "./components/Art";
import VideoEdit from "./components/VideoEdit";

function App() {

  const [showBody, setShowBody] = useState('work')
  
  const reactSwitch = (para) =>{

    switch(para){
      case "work":
        return <WorkBody />

      case "art":
        return <Art />

      case "socialMedia" :
        return <SocialMedia />

      case "videoEdit":
        return <VideoEdit />
      default:
        return <p>Hello world</p>
    }
  }

  const menuButton = (e) =>{
    console.log(e)
    setShowBody(e)
  }

  return (
    <div className = "container">
      <Header avatar = {avatar} showBody = {showBody} onClick = {menuButton}/>

      {reactSwitch(showBody)}

    </div>
  );
}

export default App;
