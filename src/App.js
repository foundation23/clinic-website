import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {useState} from "react";
import MakeAppointment from "./components/MakeAppointment/MakeAppointment";

function App() {
    const [modalActive, setModal] = useState(false)
    return (
        <div className="app">
                <Header setActive={setModal}/>
                <Main setActive={setModal}/>
                <Footer/>
            <MakeAppointment active={modalActive} setActive={setModal}/>
        </div>
    );
}

export default App;
