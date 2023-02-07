import { Matches, MatchList, TeamList, Teams } from "./types";
import MatchListCard from "./MatchListCard";
import InfoModal from "./InfoModal";
import {  useState } from "react";
import React from "react";
import {  Modal } from "react-bootstrap";
import { fetchMatch } from "./api";

interface MatchListProps {
  matches?: Matches;
  teamsData?: Teams;
  handleCompetition: () => void;
}

const MatchesList: React.FC<MatchListProps> = ({
  teamsData,
  matches,
  handleCompetition,
}) => {
  const [matchTeams, setMatchTeams] = useState(teamsData);
  const [teamMatches, setTeamMatches] = useState(matches);
  const [teamInfo, setTeamInfo] = useState();

  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  const onMatchSelect = async (value: number) => {
    const response = await fetchMatch(value);
    setTeamInfo(response.data);
    setShowInfoModal(true);
  };

  return (
    <>
      <div className="container">
        <button
          type="button"
          className="button_right"
          onClick={() => handleCompetition()}
        >
          Back To Home
        </button>

        <h3 className="header-index">MATCHES LIST</h3>
        <div className="Match-body">
          <div className="matchlist-side ">
            <div>
              {
                <>
                  <span className="teamName">Teams List</span>

                  <ul className="unorderList">
                    {matchTeams?.teams.map((data: TeamList, index: number) => {
                      return (
                        <li
                          className="list-data"
                          key={index}
                          onClick={() => onMatchSelect(data.id)}
                        >
                          {data.name}
                        </li>
                      );
                    })}
                  </ul>
                </>
              }
            </div>
          </div>
          <div className="matchlist-main">
            <ul className="matchlist-card">
              {teamMatches?.matches.map((data: MatchList, index: number) => {
                return <MatchListCard key={index} data={data} />;
              })}
            </ul>
          </div>
        </div>
      </div>

      {showInfoModal && (
        <>
          <Modal show={showInfoModal} onHide={() => setShowInfoModal(false)}>
            <Modal.Header>
              <button
                type="button"
                className="btn btn-light modal-buttons"
                onClick={() => setShowInfoModal(false)}
              >
                Close
              </button>
            </Modal.Header>
            <Modal.Body>
              <InfoModal teamInfo={teamInfo} />
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default MatchesList;
