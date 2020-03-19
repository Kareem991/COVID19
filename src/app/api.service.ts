import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
public loading = false;
public retrieved = false;
public sorted = [];
public data = [];
  constructor(private http: HttpClient) { }

getStats() {
  const httpOptions = {
    headers: new HttpHeaders({
    'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
    'x-rapidapi-key': '9286a3e45fmshac5676897bb7729p19f084jsnd24e075997c2'
    })
  };
  this.loading = true;
  this.http.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php', httpOptions).subscribe( url => {
    // tslint:disable-next-line: no-string-literal
    this.data = url['countries_stat'];
    this.sorted = this.data.slice();
    this.retrieved = true;
    this.loading = false;
  });
}
findCountryByName() {
  const httpOptions = {
    headers: new HttpHeaders({
    'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
    'x-rapidapi-key': '9286a3e45fmshac5676897bb7729p19f084jsnd24e075997c2'
    })
  };
  return this.http.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php', httpOptions);
}

}


