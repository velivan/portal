
const style ={
    p: {
        color: "red"
    },
}
function HeaderUser(props) {
    return (
      <div>
        <p style={style.p}>{props.user}</p>
      </div>
    );
  }
export default HeaderUser;