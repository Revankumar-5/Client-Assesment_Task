import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CompetitionList from "./Assessment/CompetitionList";
import MatchesList from "./Assessment/MatchesList";
import "./Assessment/style.scss";
import Data from "../public/data/competitions/competitions.json"
import "./Assessment/modal.scss";
import { useState } from "react";
import {  Matches } from "./Assessment/types";



function App() {
  const baseUrl = './data/'
  const [toggle, setToggle] = useState(false);
  const [teams, setTeams] = useState();
  const [matches, setMatches] = useState<Matches>();

  const onHandleCompetition = () => {
    setToggle(false);
  };
  const onHandleMatchList =async (data: number) => {
   await axios.get(`${baseUrl}competitions/matches/${data}.json`).then((response) => {
    setMatches(response.data)  
    });
  await  axios.get(`.${baseUrl}competitions/teams/${data}.json`).then((response) => {
    setTeams(response.data)  
    });
    setToggle(true);
  };
console.log(teams);

  return (
    <>
      {!toggle && (
        <CompetitionList data={Data} onHandleMatchList={onHandleMatchList} />
      )}
      {toggle && (
        <MatchesList matches={matches}  teamsData={teams} onHandleCompetition={onHandleCompetition} />
      )}
    </>
  );
}

export default App;
