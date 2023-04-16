import WorkCard from "./WorkCard"
import calc from "./assets/calculator.png"
import clock from "./assets/clock.png"
import sharinga from "./assets/sharingan.gif"
import turtle from "./assets/turtle_game.png"
import dollars from "./assets/dollars.png"
import jet_game from "./assets/jet_game.png"
import college_buddy from "./assets/college_buddy.png"
import watch_list from "./assets/college_buddy.png"


const WorkBody = (props) =>{

    return(
        <div className = "workBody">
            <WorkCard title = "Watch List" image = {watch_list} about = "This website helps me keep track of the stuff to watch and what all i have watched coz i start something and forget to finish it" link = "https://nk-watch-list.netlify.app/" date = "2023/04/16" />

            <WorkCard title = "College Buddy" image = {college_buddy} about = "Made this for 3rd sem college mini project with a friend" link = "https://collegebuddy007.netlify.app/main/index.html" date = "2023/03/15" />

            <WorkCard title = "CyberPunk Calculator" image = {calc} about = "Made a cyber punk themed calculator using vanila js because i like vanila. And also tried some neon effect in it" link = "https://cyberpunk-calculator.netlify.app/" date = "2021/12/03" />

            <WorkCard title = "Dollars ChatSite" image = {dollars} about = "Inspired from anime called durara made this site. Password is 'baccano'. And its  not encrypted at all and also the password is just for show it doesn't do anything. and chat ui is also not like anime because its lil to hard to replicate and i am noob at css" link = "https://durarachat.netlify.app/" date = "2021/04/29" />

            <WorkCard title = "Jet Game" image = {jet_game} about = "Copy of famous game called flappy birds. Making pipe obstacle was little hard and so i just replaced the obstacle with rockets. And database i might add it someday but not today XD." link = "https://jetflyfly.netlify.app/" date = "2021/04/25" />

            <WorkCard title = "Sharingan Animation" image = {sharinga} about = "made this sharingan animation using python turtle. Sharingan is an ability that allows a ninja to copy, by mere sight. " link = "https://github.com/Nithesh24/Sharingan_animation-turtle" date = "2020/07/05"/>

            <WorkCard title = "Clock" image = {clock} about = "This doesn't show actual time. Made this using Python Tkinter. Tkinter python gui. Not a great gui but still works good enough and it is user friendly. But making cool looking ui is hard with tkinter" link = "https://github.com/Nithesh24/Analog-Clock-using-tkinter" date = "2020/07/04" />

            <WorkCard title = "Turtle Game" image = {turtle} about = "Making game using python turtle is a stupid idea. Thats exactly why i am made this. Python turtle is fun. I probably spent more time making turtle programms than doing something useful with python." link = "https://github.com/Nithesh24/Game-using-turtle" date = "2021/07/04" />
            
        </div>
    )
}

export default WorkBody