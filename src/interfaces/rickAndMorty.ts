export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}
export interface Result {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'uncnown';
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Characters {
  info: Info;
  results: Result[];
}
