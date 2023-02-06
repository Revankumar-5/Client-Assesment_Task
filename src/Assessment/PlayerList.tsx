import { useState } from "react";

type PlayerDetailsProps = {  data: any; };


const PlayerList: React.FC<PlayerDetailsProps> = ({ data }) => {
  const[enabled,setEnabled]=useState(false)
  console.log(data);
  
  return (
    <>
      <tr>
        <th scope="row">
          <input
            disabled={!enabled ? true : false}
            className="col-4 input-border"
            type="text"
            defaultValue={data.name}
          />
          <input
            disabled={!enabled ? true : false}
            className="col-4 input-border"
            type="text"
            defaultValue={data.dateOfBirth.slice(0,4)}
          />
          <input
            disabled={!enabled ? true : false}
            className="col-2 input-border"
            type="text"
            defaultValue={data.id}
          />
          <button className="col-2 player-button" onClick={()=>setEnabled(!enabled)}>{!enabled ?"Edit":"Save"} </button>
        </th>
      </tr>
    </>
  );
};

export default PlayerList;