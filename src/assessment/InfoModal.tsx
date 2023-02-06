import React, { useEffect } from "react";
import { useRef, useState } from "react";
import BasicInfo from "./BasicInfo";
import PlayerDetails from "./PlayerDetails";
import { TeamDetails } from "./types";

type InfoModalProps = {  teamInfo: any };

const enum Information {
  BASIC_INFO = "BasicInfo",
  PLAYER_DETAILS = "Player Details",
}
const InfoModal: React.FC<InfoModalProps>= ({ teamInfo }) => {
  

  const [information, setInformation] = useState<String>(Information.BASIC_INFO);
  const inputRef=React.useRef<HTMLInputElement>(null)
  
  console.log(teamInfo);
  
  return (
    <>
      <div className="container">
        <div className="row" ref={inputRef} >
          <span  
            className="col-3 infoselect underline-style"
            onClick={() => {
              setInformation(Information.BASIC_INFO);
              inputRef.current?.children[1].setAttribute("class","col-4 infoselect")
              inputRef.current?.children[0].setAttribute("class","col-3 infoselect underline-style")
                }
            }
          >
            BASIC INFO
          </span>
          <span
            className="col-4 infoselect"
            onClick={() => {setInformation(Information.PLAYER_DETAILS)
            inputRef.current?.children[0].setAttribute("class","col-3 infoselect")
            inputRef.current?.children[1].setAttribute("class","col-4 infoselect underline-style")
          }}
          >
            PLAYER DETAILS
          </span>
        </div>
        {information === Information.BASIC_INFO && <BasicInfo teamInfo={teamInfo} />}
        {information === Information.PLAYER_DETAILS && (
          <PlayerDetails teamInfo={teamInfo} />
        )}
      </div>
    </>
  );
};

export default InfoModal;
