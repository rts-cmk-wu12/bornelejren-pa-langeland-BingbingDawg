import Form from "../components/form";
import HeaderComponent from "../components/headercomponent";

export default function SponsorTilmelding() {

    return (
        <>
        <HeaderComponent />
        <img src="" alt="" />
        <h2 className="siteheading">Tilmelding Som Sponsor</h2>
        
        <p>
            Da det er meget individuelt, hvor meget en virksomhed kan og ønsker at støtte med, har vi
            opdelt støttemulighederne i 3 kategorier:
        </p>

        <h3>Børnesponsorat</h3>
        <p>
            Hvis din virksomhed vælger at blive børnesponsor, dækker I omkostningerne for et
            navngivet barns ophold og transport til og fra Langeland. Prisen pr. barn varierer fra lejr til
            lejr, men vi har fastsat en gennemsnitspris på kr. 4.000,- pr. barn for et ophold. Denne pris
            inkluderer transport, forplejning, forsikring, udflugter, adgangsbilletter til udflugtsmålene,
            smågaver og slik til ét barn.
        </p>

        <h3>Lejrsponsorat</h3>
        <p>
            For kr. 2.000,- kan virksomheden blive lejrsponsor og være med til at dække alle
            omkostningerne ved børnelejren, som bl.a. omfatter ejendommens drifts- og
            vedligeholdelsesomkostninger samt eventuelle ekstra udgifter omkring en lejr, der f.eks.
            kan være løn til specialuddannet personale.
        </p>

        <h3>Støtte til foreningen</h3>

        <p>
            Virksomheder, der ønsker at støtte foreningens arbejde med et mindre beløb, kan vælge
            at blive diplomsponsorer. Af administrative årsager skal der minimum støttes med kr.
            1.000,- for at man kan modtage et trykt diplom til ophængning i virksomheden, men alle
            støttebeløb - store som små - er naturligvis velkomne.
        </p>
        <Form />
        </>
    )
}