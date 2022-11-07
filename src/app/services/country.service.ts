import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { CountryResponse } from '../interfaces/response.interface';
import { CountryDTO } from '../interfaces/country.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly API_URL:string = 'https://restcountries.com/v2';

  get httpParams () {
    return new HttpParams().set('fields', 'name,capital,subregion,region,population,languages,flag');
  }

  constructor(
    private readonly http:HttpClient
  ) {}

  getCountriesByName (name:string) {
    return this.http.get<CountryDTO[]>(`${this.API_URL}/name/${name.trim()}`, { params: this.httpParams }).pipe(
      map(data => data.map(item => {
        const { name, capital, subregion, region, population,
          flag, languages } = item;

        return {
          name, capital, subregion, region, population, flag,
          languages: languages.map(({ iso639_1 }) => ({iso639_1: iso639_1.toUpperCase()}))
        };
      }))
    );
  }
}
