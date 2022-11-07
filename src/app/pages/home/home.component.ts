import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CountryService } from 'src/app/services/country.service';
import { CountryDTO, Language } from '../../interfaces/country.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .card-image-custom {
      height: calc(13em + 1vh);
      width: 100%;
      object-position: center;
      object-fit: cover;
      transition: 1s ease-in-out;
    }
    
    .card-image-custom:hover {
      object-fit: fill;
    }
  `]
})
export class HomeComponent {

  formSearcher!: FormGroup;
  
  countries: CountryDTO[] = [];

  constructor(
    private readonly countryServices: CountryService,
    private readonly formBuilder: FormBuilder
  ) {
    this.formSearcher = formBuilder.group({
      country: [
        '', Validators.compose([
          Validators.minLength(3),
          Validators.required
        ])
      ]
    });
  }

  goToSearch(){
    this.countryServices.getCountriesByName(this.formSearcher.value.country).subscribe(
      (res) => this.countries = [...res],
      () => this.countries = []
    );
  }

  langsFormat(languages:Language[]) : string {
    return languages.reduce(
      (acc, {iso639_1}, i, arr) => acc += ((i+1) === arr.length ) ? iso639_1 : `${iso639_1}, `, '');
  }

}
