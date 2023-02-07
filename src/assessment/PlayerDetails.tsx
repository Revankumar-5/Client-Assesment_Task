import { VFC } from "react";
import pen from "../images/pen.svg";
import PlayerList from "./PlayerList";
import { TeamInfo,Squad } from "./types";

type PlayerDetailsProps = {  teamInfo?: TeamInfo };

const PlayerDetails: React.FC<PlayerDetailsProps> = ({ teamInfo }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr className="row"  >
            <th className="col-4 modal-table-header" >Players</th>
            <th className="col-4 modal-table-header" >YOB</th>
            <th className="col-2 modal-table-header" >Nb</th>
            <th className="col-2 modal-table-header" >Edit</th>
          </tr>
        </thead>
        <tbody className="table-border">
          {teamInfo?.squad.map((data:Squad ,index: number
            ) => {
              return <PlayerList key={index} data={data} />;
            }
          )}
        </tbody>
      </table>
    </>
  );
};

export default PlayerDetails;
