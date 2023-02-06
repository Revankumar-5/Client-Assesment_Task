export interface CompetitionsData {
  count: number;
  filters: {};
  competitions: {
    id: number;
    area: { id: number; name: string; countryCode: string; ensignUrl: string };
    name: string;
    code: string;
    emblemUrl: string;
    currentSeason: {
      id: number;
      startDate: string;
      endDate: string;
      currentMatchday: number;
      winner: null;
    };
    numberOfAvailableSeasons: number;
    lastUpdated: string;
  }[];
}


export interface Competitions {
  id: number;
  area: {
    id: number;
    name: string;
    countryCode: string;
    ensignUrl: string;
  };
  name: string;
  code: string;
  emblemUrl: string;
  currentSeason: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: null;
  };
  numberOfAvailableSeasons: number;
  lastUpdated: string;
}
[];

export interface Matches {
  count: number;
  filters: {};
  competition: {
    id: number;
    area: {
      id: number;
      name: string;
    };
    name: string;
    code: string;
    plan: string;
    lastUpdated: string;
  };
  matches: MatchList[];
}

export interface MatchList {
  id: number;
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
  };
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: null;
  lastUpdated: string;
  score: {
    winner: string;
    duration: string;
    fullTime: {
      homeTeam: number;
      awayTeam: number;
    };
    halfTime: {
      homeTeam: number;
      awayTeam: number;
    };
    extraTime: {
      homeTeam: null;
      awayTeam: null;
    };
    penalties: {
      homeTeam: null;
      awayTeam: null;
    };
  };
  homeTeam: {
    id: 18;
    name: string;
  };
  awayTeam: {
    id: number;
    name: string;
  };
  referees: [
    {
      id: number;
      name: string;
      role: string;
      nationality: string;
    }
  ];
}
export interface Teams {
  count: number;
  filters: {};
  competition: {
    id: number;
    area: {
      id: number;
      name: string;
    };
    name: string;
    code: string;
    plan: string;
    lastUpdated: string;
  };
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: null;
  };
  teams: TeamList[];
}

export interface TeamList {
  id: number;
  area: {
    id: number;
    name: string;
  };
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
}
