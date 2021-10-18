interface Origin {
 name: string;
 url: string
}
interface Location {
  name: string;
  url: string;
}
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string
}
export interface Info {
  count: number;
  next: string;
  pages: number;
  prev: string;
}

export interface SearchedObject {
  name: string;
  gender: string;
  status: string;
  species: string
}

export interface Current {
  page: number;
  link: string
}
