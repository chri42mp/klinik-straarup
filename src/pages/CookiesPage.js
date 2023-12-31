import React from "react";
import Navigation from "../components/Navigation";
import { Helmet } from "react-helmet";
import DiscountBanner from "../components/DiscountBanner";
import CustomFooter from "../components/CustomFooter";
import "./TradeConditions.scss";

export default function CookiesPage() {
  return (
    <>
      <Helmet>
        <title>Cookie- og privatlivspolitik</title>
        <meta
          name="description"
          content="Denne side beskriver cookie og privatlivspolitik"
        />
      </Helmet>
      <Navigation />
      <div className="max-content">
        <div className="trade-inner-content">
          <h1>Cookie- og privatlivspolitik</h1>
          <h5>Introduktion</h5>
          <p>
            Når du besøger vores website indsamles der oplysninger om dig, som
            bruges til at tilpasse og forbedre vores indhold og til at øge
            værdien af de annoncer, der vises på siden. Hvis du ikke ønsker, at
            der indsamles oplysninger, bør du slette dine cookies og undlade
            videre brug af websitet. Nedenfor har vi uddybet, hvilke
            informationer der indsamles, deres formål og hvilke tredjeparter,
            der har adgang til dem.
          </p>
          <h5>Cookies</h5>
          <p>
            Websitet anvender "cookies", der er en tekstfil, som gemmes på din
            computer, mobil el. tilsvarende med det formål at genkende den,
            huske indstillinger, udføre statistik og målrette annoncer. Cookies
            kan ikke indeholde skadelig kode som f.eks. virus. Det er muligt at
            slette eller blokere for cookies. Se vejledning:
            http://minecookies.org/cookiehandtering Hvis du sletter eller
            blokerer cookies vil annoncer kunne blive mindre relevante for dig
            og optræde hyppigere. Du kan desuden risikere at websitet ikke
            fungerer optimalt samt at der er indhold, du ikke kan få adgang til.
          </p>
          <h5>Generelt</h5>
          <p>
            Personoplysninger er alle slags informationer, der i et eller andet
            omfang kan henføres til dig. Når du benytter vores website indsamler
            og behandler vi en række sådanne informationer. Det sker f.eks. ved
            alm. tilgang af indhold, hvis du tilmelder dig vores nyhedsbrev,
            deltager i konkurrencer eller undersøgelser, registrerer dig som
            bruger eller abonnent, øvrig brug af services eller foretager køb
            via websitet. Vi indsamler og behandler typisk følgende typer af
            oplysninger: Et unikt ID og tekniske oplysninger om din computer,
            tablet eller mobiltelefon, dit IP-nummer, geografisk placering, samt
            hvilke sider du klikker på (interesser). I det omfang du selv giver
            eksplicit samtykke hertil og selv indtaster informationerne
            behandles desuden: Navn, telefonnummer, e-mail, adresse og
            betalingsoplysninger. Det vil typisk være i forbindelse med
            oprettelse af login eller ved køb.
          </p>
          <h5>Sikkerhed</h5>
          <p>
            Vi behandler dine personoplysninger sikkert og fortroligt i
            overensstemmelse med gældende lovgivning, herunder
            persondataforordningen og databeskyttelsesloven.Dine oplysninger vil
            alene blive anvendt til det formål, de er indsamlet til, og vil
            blive slettet, når dette formål er opfyldt eller ikke længere
            relevant.Vi har truffet tekniske og organisatoriske foranstaltninger
            mod, at dine oplysninger hændeligt eller ulovligt bliver slettet,
            offentliggjort, fortabt, forringet eller kommer til uvedkommendes
            kendskab, misbruges eller i øvrigt behandles i strid med
            lovgivningen.
          </p>
          <h5>Formål</h5>
          <p>
            Oplysningerne bruges til at identificere dig som bruger og vise dig
            de annoncer, som vil have størst sandsynlighed for at være relevante
            for dig, at registrere dine køb og betalinger, samt at kunne levere
            de services, du har efterspurgt, som f.eks. at fremsende et
            nyhedsbrev. Herudover anvender vi oplysningerne til at optimere
            vores services og indhold.
          </p>
          <h5>Periode for opbevaring</h5>
          <p>
            Oplysningerne opbevares i det tidsrum, der er tilladt i henhold til
            lovgivningen, og vi sletter dem, når de ikke længere er nødvendige.
            Perioden afhænger af karakteren af oplysningen og baggrunden for
            opbevaring. Det er derfor ikke muligt at angive en generel tidsramme
            for, hvornår informationer slettes.
          </p>
          <h5>Videregivelse af oplysninger</h5>
          <p>
            Data om din brug af websitet, hvilke annoncer, du modtager og evt.
            klikker på, geografisk placering, køn og alderssegment m.v.
            videregives til tredjeparter i det omfang disse oplysninger er
            kendt. Du kan se hvilke tredjeparter, der er tale om, i afsnittet om
            "Cookies" ovenfor. Oplysningerne anvendes til målretning af
            annoncering. Vi benytter herudover en række tredjeparter til
            opbevaring og behandling af data. Disse behandler udelukkende
            oplysninger på vores vegne og må ikke anvende dem til egne formål.
            Videregivelse af personoplysninger som navn og e-mail m.v. vil kun
            ske, hvis du giver samtykke til det. Vi anvender kun databehandlere
            i EU eller i lande, der kan give dine oplysninger en tilstrækkelig
            beskyttelse.
          </p>
          <h5>Indsigt og klager</h5>
          <p>
            Data om din brug af websitet, hvilke annoncer, du modtager og evt.
            klikker på, geografisk placering, køn og alderssegment m.v.
            videregives til tredjeparter i det omfang disse oplysninger er
            kendt. Du kan se hvilke tredjeparter, der er tale om, i afsnittet om
            "Cookies" ovenfor. Oplysningerne anvendes til målretning af
            annoncering. Vi benytter herudover en række tredjeparter til
            opbevaring og behandling af data. Disse behandler udelukkende
            oplysninger på vores vegne og må ikke anvende dem til egne formål.
            Videregivelse af personoplysninger som navn og e-mail m.v. vil kun
            ske, hvis du giver samtykke til det. Vi anvender kun databehandlere
            i EU eller i lande, der kan give dine oplysninger en tilstrækkelig
            beskyttelse.
          </p>
          <h5>Udgiver</h5>
          <p>
            Websitet ejes og publiceres af: <br /> Klinik Straarup <br />
            Brøndbyvestervej 23 st th <br /> 2600 GlostrupDenmark
          </p>
        </div>
      </div>
      <DiscountBanner />
      <CustomFooter />
    </>
  );
}
