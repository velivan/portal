import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./component/main/main";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import "./App.css";
import Chat from "./component/chat/Chat";
import Calendar from "./component/calendar/Calendar";

let title = "Porlal",
  user = "User";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header title={title} user={user} />
        <div className="row">
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="home" element={<Main />} />
            <Route path="chat" element={<Chat />} />
            <Route path="calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
