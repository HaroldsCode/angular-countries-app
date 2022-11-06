import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly API_URL:string = 'https://restcountries.com/v2';

  constructor(
    private readonly http:HttpClient
  ) {}

  getCountries () {
    this.http.get(`${this.API_URL}/all`).subscribe(res => console.log(res));
  }
}
