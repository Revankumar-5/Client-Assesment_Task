import { Matches, MatchList, TeamList, Teams } from "./types";
import MatchListCard from "./MatchListCard";
import InfoModal from "./InfoModal";
import {  useState } from "react";
// import { Modal, ModalDialog } from "react-bootstrap/Modal";
import React from "react";
import {  Modal } from "react-bootstrap";
import { fetchSelectedMatch } from "./api";

interface MatchListProps {
  matches?: Matches;
  teamsData?: Teams;
  onHandleCompetition: () => void;
}

const MatchesList: React.FC<MatchListProps> = ({
  teamsData,
  matches,
  onHandleCompetition,
}) => {
  const baseUrl = "./data/";
  const [matchTeams, setMatchTeams] = useState(teamsData);
  const [teamMatches, setTeamMatches] = useState(matches);
  const [teamInfo, setTeamInfo] = useState();

  const [showModal, setShowModal] = useState<boolean>(false);

  const onMatchSelect = async (value: number) => {
    const response = await fetchSelectedMatch(value);
    setTeamInfo(response.data);
    setShowModal(true);
  };

  return (
    <>
      <div className="container ">
        <button
          type="button"
          style={{ float: "right" }}
          className="btn btn-light"
          onClick={() => onHandleCompetition()}
        >
          Back To Home
        </button>

        <h3 className="header-index ">MATCHES LIST</h3>
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
            <ul className="padding-zero" style={{ marginTop: "-50px" }}>
              {teamMatches?.matches.map((data: MatchList, index: number) => {
                return <MatchListCard key={index} data={data} />;
              })}
            </ul>
          </div>
        </div>
      </div>

      {showModal && (
        <>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header>
              <button
                type="button"
                className="btn btn-light modal-buttons"
                onClick={() => setShowModal(false)}
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
