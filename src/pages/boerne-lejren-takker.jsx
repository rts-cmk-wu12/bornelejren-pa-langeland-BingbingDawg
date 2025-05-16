import HeaderComponent from "../components/headercomponent";
import Thankyou from "../assets/images/fotos/boernelejren-takker.jpg";
import "../sass/boerntakker.scss";

export default function LejreTakker() {

    return (
        <>
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
        </>
    )
}