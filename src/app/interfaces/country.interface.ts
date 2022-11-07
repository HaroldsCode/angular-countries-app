export interface CountryDTO {
  name:        string;
  capital:     string;
  subregion:   string;
  region:      string;
  population:  number;
  languages:   Language[];
  flag:        string;
}

export interface Language {
  iso639_1: string;
}
