import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { getTestBed } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly countryServices: CountryService
  ) { }

  ngOnInit(): void {
    this.countryServices.getCountries();
  }

}
