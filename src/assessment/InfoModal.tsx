import React from "react";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import PlayerDetails from "./PlayerDetails";
import { TeamInfo } from "./types";

type InfoModalProps = { teamInfo?: TeamInfo };

const enum Information {
  BASIC_INFO = "BasicInfo",
  PLAYER_DETAILS = "Player Details",
}
const InfoModal: React.FC<InfoModalProps> = ({ teamInfo }) => {
  const [information, setInformation] = useState<String>(
    Information.BASIC_INFO
  );
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="container">
        <div className="row" ref={inputRef}>
          <span
            className={
              information === Information.BASIC_INFO
                ? "col-3 infoselect underline-style"
                : "col-3 infoselect"
            }
            onClick={() => {
              setInformation(Information.BASIC_INFO);
            }}
          >
            BASIC INFO
          </span>
          <span
            className={
              information === Information.PLAYER_DETAILS
                ? "col-4 infoselect underline-style"
                : "col-4 infoselect"
            }
            onClick={() => {
              setInformation(Information.PLAYER_DETAILS);
            }}
          >
            PLAYER DETAILS
          </span>
        </div>
        {information === Information.BASIC_INFO && (
          <BasicInfo teamInfo={teamInfo} />
        )}
        {information === Information.PLAYER_DETAILS && (
          <PlayerDetails teamInfo={teamInfo} />
        )}
      </div>
    </>
  );
};

export default InfoModal;
