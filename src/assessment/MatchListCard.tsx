import { MatchList } from "./types";

type MatchListProps = {
  data: MatchList;
};

const MatchesListCard: React.FC<MatchListProps> = ({ data }) => {
  return (
    <>
      <div className="match-card">
        <div className="container padding-zero" >
          <div className="col-5">
            <img className="match-card-image" />
            <span className="match-card-name">
              {data.homeTeam.name}
            </span>
          </div>
          <div className="col-2 versus">
            <span>VS</span>
          </div>
          <div className="col-5">
            <img className="match-card-image" />
            <span className="match-card-name">{data.awayTeam.name}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchesListCard;
