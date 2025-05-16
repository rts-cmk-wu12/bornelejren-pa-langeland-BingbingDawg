import { Link } from "react-router-dom"
import Logo from "../assets/images/logo/logo.svg"
export default function HeaderComponent(){

    return(
        <>
         <header className="siteheader">
            <nav>
                <ul>
                    <li>
                        <Link className="siteheader-button" to="/">Forside</Link>
                    </li>
                    <li>
                        <Link className="siteheader-button" to="/om-os">Om os</Link>
                    </li>
                    <li>
                        <Link className="siteheader__logo" to="/"><img src={Logo} className="siteheader__image" alt="" /><h1 className="siteheader__logo-heading">børnelejren på langeland</h1></Link>
                    </li>
                    <li>
                        <Link className="siteheader-button" to="/tilmeld-som-sponsor">Tilmeld som sponsor</Link>
                    </li>
                    <li>
                        <Link className="siteheader-button" to="/boerne-lejren-takker">Børnelejren takker</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}