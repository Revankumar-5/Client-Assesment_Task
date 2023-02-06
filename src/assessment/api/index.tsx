import axios from "axios";

const baseUrl = "./data/";


export const fetchCompetitionsMatches = async (data:number) => {
  return await axios.get(`${baseUrl}competitions/matches/${data}.json`);
};

export const fetchCompetitionsTeams = async (data:number)=> {
    return  axios.get(`.${baseUrl}competitions/teams/${data}.json`)
};
export const fetchSelectedMatch = async (value:number)=> {
    return axios.get(`.${baseUrl}/teams/${value}.json`)
};
