import "./Header.css";
import "../..styles/Common.css";
import "../Search/Search"
import { BsPersonCircle, BsFillBagFill } from "react-icons/bs";

function Header () {
    return (
        <header className="header-wrapper">
            <div className="container">
                <div className="header-logo">
                    <h1>Logo</h1>
                </div>

                <div className="header-search">
                    <input type="text" placeholder="Pesquisar" />
                    <button type="submit">Pesquisar</button>
                </div>
                <div className="header-icons">
                    <button type="button">
                        <BsPersonCircle collor="#0286FF" size="20"/>
                    </button>
                    <button type="button">
                        <BsFillBagFill collor="#0286FF" size="20"/>
                    </button>
                </div>
            </div>
        </header>
    );

}

export default Header;
