import React from "react";

class Header extends React.Component{
    render() {
        return (
            <div className="card text-center ">
                <div className="card-header d-flex justify-content-center">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="true" href="#">First page</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="true" href="#">Second page</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="true" href="#">Third page</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;