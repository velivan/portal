import './HeaderStyle.css'
import Title from './headerTitle'
import User from './headerUser'


function Header(props) {
    return (
      <div className="HeaderStyle">
        <Title title={props.title}/>
        <User user={props.user}/>
      </div>

    );
  }
  
  export default Header;