import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  sorted = [];
  constructor(public api: ApiService, public router: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
 }
getStats() {
  this.api.getStats();
}
onSortBy(choice: 'Alphabet' | 'Cases' | 'Deaths'| 'NewDeaths' | 'NewCases') {
this.api.sorted = this.api.data.slice();
  // tslint:disable-next-line: no-string-literal
if (choice === 'Alphabet') {
    this.api.sorted.sort( (A, B) => A.country_name > B.country_name ? 1 : -1 );
  }
if (choice === 'Cases') {
    this.api.sorted.sort( (A, B) => this.stringtoNum(B.cases)- this.stringtoNum(A.cases) );
  }
if (choice === 'Deaths') {
    this.api.sorted.sort( (A, B) => this.stringtoNum(B.deaths) - this.stringtoNum(A.deaths));

  }
if (choice === 'NewDeaths') {
    this.api.sorted.sort( (A, B) => this.stringtoNum(B.new_deaths) - this.stringtoNum(A.new_deaths));

  }
if (choice === 'NewCases') {
  this.api.sorted.sort( (A, B) => this.stringtoNum(B.new_cases) - this.stringtoNum(A.new_cases));
    }

}
stringtoNum(digit: string) {
  const int = parseFloat(digit.replace(/,/g, ''));
  return int;

}
onClick(country: string) {
this.router.navigateByUrl('/' + country);
}
}
