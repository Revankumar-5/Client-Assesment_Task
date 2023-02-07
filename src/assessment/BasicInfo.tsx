import { TeamInfo } from "./types";


type BasicInfoProps = {  teamInfo?: TeamInfo };

const BasicInfo: React.FC<BasicInfoProps> = ({ teamInfo }) => {
  return (
    <div className="container">
      <div className="row modal-info">
        <div className="col-4">
          <img className="basicInfo-image" src={teamInfo?.crestUrl} />
        </div>
        <div className="col-8">
          <h3 className="row basicInfo-image">{teamInfo?.name}</h3>
          <h3 className="row basicInfo-country">{teamInfo?.area.name}</h3>
          <h3 className="row basicInfo-summary">{teamInfo?.venue}</h3>
          <h3 className="row ">
            <span className="row basicInfo-address">
              {teamInfo?.address}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
