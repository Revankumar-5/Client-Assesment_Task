import CompetitionList from "./assessment/CompetitionList";
import MatchesList from "./assessment/MatchesList";
import { useEffect, useState } from "react";
import { Matches } from "./assessment/types";
import {fetchCompetitions,fetchCompetitionsMatches,fetchCompetitionsTeams} from "./assessment/api";

function App() {
  const [showMatchesList, setShowMatchesList] = useState(false);
  const [teams, setTeams] = useState();
  const [competitions, setCompetitions] = useState();
  const [matches, setMatches] = useState<Matches>();

  const handleCompetition = () => {
    setShowMatchesList(false);
  };

  const handleMatchList = async (data: number) => {
    const matches = await fetchCompetitionsMatches(data);
    setMatches(matches.data);
    const teams = await fetchCompetitionsTeams(data);
    setTeams(teams.data);
    setShowMatchesList(true);
  };

  useEffect(() => {
    const fetchCompetitionsData = async () => {
      const competitions = await fetchCompetitions();
      setCompetitions(competitions.data);
    };

    fetchCompetitionsData();

    return () => {};
  }, []);

  
  return (
    <>
      {!showMatchesList && (
        <CompetitionList
          data={competitions}
          handleMatchList={handleMatchList}
        />
      )}
      {showMatchesList && (
        <MatchesList
          matches={matches}
          teamsData={teams}
          handleCompetition={handleCompetition}
        />
      )}
    </>
  );
}

export default App;
