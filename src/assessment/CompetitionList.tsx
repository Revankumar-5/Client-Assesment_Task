import { Competitions, CompetitionsData } from "./types";

interface CompetitionListProps {
  data?: CompetitionsData;
  handleMatchList: (data:number) => void;
}

const CompetitionList: React.FC<CompetitionListProps> = ({data, handleMatchList, }) => {
  
  return (
    <>
      <div className="container">
        <h3 className="header-index">COMPETITIONS LIST</h3>

        {data?.competitions.map((data: Competitions, index: number) => {
          return (
            <>
              <div
                className="card"
                key={index}
                onClick={() => handleMatchList(data.id)}
              >
                <div className="card-name">{data.name}</div>
                <img
                  className="card-image"
                  src={data.emblemUrl}
                ></img>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CompetitionList;
