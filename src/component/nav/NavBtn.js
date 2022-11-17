import "./NavBtnStyle.css";
import { Link } from "react-router-dom";
// let btn = document.querySelectorAll('.nav-ico');
// btn.forEach(btn => {
//    onClick
//     console.log(btn)
    
// });
function fun( n){
 
    console.log(n)
}

function NavBtn(props) {
  return (
    <div>
    <Link to={props.name}> <img src={props.img} alt="" className={`nav-ico ${props.name}`}  onClick={ () => fun(props.name)}></img></Link>
    </div>
  )
}
export default NavBtn;
