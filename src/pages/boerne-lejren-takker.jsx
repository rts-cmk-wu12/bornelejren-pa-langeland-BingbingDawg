import HeaderComponent from "../components/headercomponent";
import Thankyou from "../assets/images/fotos/boernelejren-takker.jpg";
import "../sass/boerntakker.scss";
import { useEffect, useState } from "react";
import FooterComponent from "../components/footer/footer";

export default function LejreTakker() {

    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        // Retrieve sponsor data from localStorage
        const storedSponsors = JSON.parse(localStorage.getItem("sponsors")) || [];
        setSponsors(storedSponsors);
    }, []);


    return (
        <>
         <div className="page-container">
            <div className="page-content"> 
            <HeaderComponent />
            <h2 className="siteheading">Børnelejren takker</h2>
            <div className="sponsorlist">
                <img className="sponsorlist__image" src={Thankyou} alt="" />
                <p className="sponsorlist__text">
                    Børnelejren på Langeland takker alle, der på den ene eller anden måde, har støttet
                    foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård
                    - det være sig ved naturaliesponsorater eller økonomisk støtte fra støttemedlemmer,
                    virksomhedssponsorer og donationer fra fonde.
                    En særlig tak til:
                </p>
            </div>
            <div className="sponsorbarrier"></div>
            <div className="sponsorlist">
                {sponsors.length > 0 ? (
                    sponsors.map((sponsor, index) => (
                        <div key={index} className="sponsorlist__sponsors">
                            <p>
                                <span className="sponsorlist__sponsorheadings">Firma:</span> {sponsor.companyName}
                            </p>
                            <p>
                                <span className="sponsorlist__sponsorheadings">Adresse:</span> {sponsor.address}
                            </p>
                            <p>
                                <span className="sponsorlist__sponsorheadings">Telefonnummer:</span> {sponsor.phoneNumber}
                            </p>
                            <p>
                                <span className="sponsorlist__sponsorheadings">Email:</span> {sponsor.email}
                            </p>
                            <p>
                                <span className="sponsorlist__sponsorheadings">Støttetype:</span> {sponsor.supportType}
                            </p>
                            <p>
                                <span className="sponsorlist__sponsorheadings">Beløb:</span> {sponsor.amount} kr.
                            </p>
                        </div>
                    ))
                ) : (
                    <p>Ingen sponsorer er registreret endnu.</p>
                )}
            </div>
            </div>
            <FooterComponent/>
        </div>
        </>
    )
}