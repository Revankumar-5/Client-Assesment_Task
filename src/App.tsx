import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CompetitionList from "./assessment/CompetitionList";
import MatchesList from "./assessment/MatchesList";
import "./assessment/Styles/style.scss";
import Data from "../public/data/competitions/competitions.json";
// import "./Assessment/modal.scss";
import { useState } from "react";
import { Matches } from "./assessment/types";
import {
  fetchCompetitionsMatches,
  fetchCompetitionsTeams,
} from "./assessment/api";

function App() {
  const baseUrl = "./data/";
  const [toggle, setToggle] = useState(false);
  const [teams, setTeams] = useState();
  const [matches, setMatches] = useState<Matches>();

  const onHandleCompetition = () => {
    setToggle(false);
  };
  const onHandleMatchList = async (data: number) => {
    const matches = await fetchCompetitionsMatches(data);
    setMatches(matches.data);
    const teams = await fetchCompetitionsTeams(data);
    setTeams(teams.data);
    setToggle(true);
  };
  

  return (
    <>
      {!toggle && (
        <CompetitionList data={Data} onHandleMatchList={onHandleMatchList} />
      )}
      {toggle && (
        <MatchesList
          matches={matches}
          teamsData={teams}
          onHandleCompetition={onHandleCompetition}
        />
      )}
    </>
  );
}

export default App;
