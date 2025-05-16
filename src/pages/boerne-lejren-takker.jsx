import HeaderComponent from "../components/headercomponent";
import Thankyou from "../assets/images/fotos/boernelejren-takker.jpg";

export default function LejreTakker() {

    return (
        <>
        <HeaderComponent />
        <h2 className="siteheading">Børnelejren takker</h2>
        <img src={Thankyou} alt="" />
        <p>
            Børnelejren på Langeland takker alle, der på den ene eller anden måde, har støttet
            foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård
            - det være sig ved naturaliesponsorater eller økonomisk støtte fra støttemedlemmer,
            virksomhedssponsorer og donationer fra fonde.
            En særlig tak til:
        </p>
         
        </>
    )
}