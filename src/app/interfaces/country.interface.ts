export interface CountryDTO {
  name:        string;
  capital:     string;
  subregion:   string;
  region:      string;
  population:  number;
  demonym:     string;
  nativeName:  string;
  languages:   Language[];
  flag:        string;
  cioc:        string;
}

export interface Language {
  iso639_1: string;
}
