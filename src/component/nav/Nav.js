import './NavStyle.css'
import NavBtn from './NavBtn';
import home from '../../img/svg/home.svg'
import chat from '../../img/svg/chat.svg'
import calendar from '../../img/svg/calendar.svg'

function Nav() {
    return (
      <div className="NavStyle">
     
        <NavBtn img={home} name="home"/>
        <NavBtn img={chat} name="chat"/>
        <NavBtn img={calendar} name="calendar"/>
        
      </div>
    );
  }
  
  export default Nav;