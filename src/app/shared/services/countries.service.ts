import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from 'src/app/register/interfaces/form.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private _baseUrl = 'https://restcountries.com/v2';
  
  constructor(private http: HttpClient) { }

  getCountries() : Observable<Country[]> {
    const url: string = `${this._baseUrl}/all?fields=alpha3Code,name`;
    return this.http.get<Country[]>(url);
  }
}
