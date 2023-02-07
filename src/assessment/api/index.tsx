import axios, { InternalAxiosRequestConfig } from "axios";

axios.interceptors.request.use((config:InternalAxiosRequestConfig) => {
		 config.baseURL="./data/";
     return config;
});

export const fetchCompetitionsMatches = async (id:number) => {
  return await axios.get(`competitions/matches/${id}.json`);
};

export const fetchCompetitionsTeams = async (id:number)=> {
    return  axios.get(`competitions/teams/${id}.json`)
};

export const fetchMatch = async (id:number)=> {
    return axios.get(`teams/${id}.json`)
};

export const fetchCompetitions = async ()=> {
  return axios.get(`competitions/competitions.json`)
};
