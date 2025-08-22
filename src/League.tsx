import './pages.css';

type TournamentCardProps = {
  active: boolean;
  name: string;
  challonge: string;
  infobox: string;
};

function TournamentCard({ active, name, challonge, infobox }: TournamentCardProps) {
  const className = active ? "active-tournament" : "finished-tournament";
  return (
    <>
    <div className={className}>
      <p id="page-title">{name}</p>
      <div id="seasoninfo">
      <p>{infobox}</p>
      <iframe src={challonge+"/module"} allowTransparency={true} width="100%" height="500px" />
      </div>
    </div>
    <br />
    <hr />
    <br />
    </>
  );
}

function League() {
  return (
    <main className="tournaments">
      <br />
        <TournamentCard
          active={true}
          name="Season 1"
          challonge="https://challonge.com/openRseason0"
          infobox="Season 1 starts soon!"
          />
          <TournamentCard
          active={false}
          name="Season 0"
          challonge="https://challonge.com/openRseason0"
          infobox="Season 0 finished. check out the winner and sing up for next one."
          />
    </main>
  );
}
export default League;
