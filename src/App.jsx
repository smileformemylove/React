import React from "react";
import Header from "./components/Header.jsx";
import LeftNavBar from "./components/LeftNavBar.jsx";
import Central from "./components/Central.jsx";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="d-flex" style={{ alignItems: 'flex-start' }}>
                    <LeftNavBar />
                    <Central />
                </div>
            </div>
        );
    }
}

export default App;
