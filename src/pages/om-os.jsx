import HeaderComponent from "../components/headercomponent";
import "../sass/om-os.scss";
import aboutUsImage from "../assets/images/fotos/pool.jpg";
import aboutUsImage2 from "../assets/images/fotos/legeplads.jpg";
import aboutUsImage3 from "../assets/images/fotos/grupperede-boern.jpg";
import aboutUsImage4 from "../assets/images/fotos/spisestue.jpg";
import aboutUsImage5 from "../assets/images/fotos/koeken.jpg";
import aboutUsImage6 from "../assets/images/fotos/fodbold.jpg";
export default function Omos() {

    return (
        <>
        <HeaderComponent />
   
        <h2 className="siteheading">om os</h2>
            <p>
            Børnelejren på Langeland er en velgørende, non-profit forening, som afholder
            finansierede lejre for dårligt stillede børn og unge fra hele landet. Børnelejrene bliver
            afholdt på foreningens bondegård, Søgård Hovedgård, som ligger i naturskønne
            omgivelser på sydspidsen af Langeland. Samtlige omkostninger til alle børns ophold og
            transport til/fra lejren bliver finansieret af foreningen, og det er et krav fra foreningens
            side, at der ikke opkræves brugerbetaling af børnenes forældre for opholdet på Søgård.
            </p>

            <div className="gallerycontainer">
                <img src={aboutUsImage} className="gallerycontainer__image" alt="" />
                <img src={aboutUsImage2} className="gallerycontainer__image" alt="" />
                <img src={aboutUsImage3} className="gallerycontainer__image" alt="" />
                <img src={aboutUsImage4} className="gallerycontainer__image" alt="" />
                <img src={aboutUsImage5} className="gallerycontainer__image" alt="" />
                <img src={aboutUsImage6} className="gallerycontainer__image" alt="" />
            </div>

            <p>
            Foreningens bestyrelse og frivillige hjælpere arbejder ulønnet for Foreningen.
            Medarbejderne fra institutionerne på foreningens lejre, får ikke kolonitillæg udbetalt af
            Foreningen.
            </p>

            <p>
            Det er primært virksomheder og støttemedlemmer, der finansierer foreningens drift og
            aktiviteter. Vi har heldigvis erfaret, at rigtig mange virksomheder er villige til at bakke op
            </p>

            <p>
            Alle skriftlige henvendelser vedrørende Foreningen Børnelejren på Langeland og Søgård
            Hovedgård bedes venligst sendt til Knud Bro Alle 1, st. mf., 3660 Stenløse. Telefoniske
            henvendelser bedes ligeledes rettet til sekretariatet på telefon 38711260. Foreningens
            formand er dagligt at træffe i sekretariatet.
            </p>

        </>
    )
}