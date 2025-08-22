import './pages.css';

type PartnerCardType = {
  name:string
  website: string
  logoURL: string
};

function PartnerCard({name, website, logoURL} : PartnerCardType) {
  return (
    <>
      <div className="PartnerCard">
        <p>{name}</p>
        <img src={logoURL}/><br />
        <a href={website}>Check out their website</a><br />
      </div>
    <br />
    <br />
    </>
  );
}

function Partners() {
  return(
    <main>
      <p id="page-title">Check out our partners.</p>
        <PartnerCard
          name="CS2Tournament"
          website="https://www.cs2tournament.com/"
          logoURL='/cs2tourney.png'
        />
    </main>
  );
}
export default Partners;
