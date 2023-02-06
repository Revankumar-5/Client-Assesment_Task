import { MatchList } from "./types";

type  MatchListProps= {
  data: MatchList;
}

const MatchesListCard: React.FC<MatchListProps> = ({ data }) => {
    
  return (
    <>
      <div className="match-card">
        <div className="container padding-zero" style={{ display: "flex" }}>
          <div className="col-5">
            <img
              className="match-card-image"
            />
            <span
              style={{ display: "block", textAlign: "center" }}
            >
              {data.homeTeam.name}
            </span>
          </div>
          <div className="col-2 versus">
            <span>VS</span>
          </div>
          <div className="col-5">
            <img
              className="match-card-image"
            />
            
           
            <span
              style={{ display: "block" }}
            >
               {data.awayTeam.name}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchesListCard;
