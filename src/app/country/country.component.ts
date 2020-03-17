import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router, RouterLinkActive, RouterState, RouterLink, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
country: any;
  constructor(private router: Router, private routeActive: ActivatedRoute, public api: ApiService) { }


  ngOnInit() {
    window.scrollTo(0, 0);
    this.routeActive.paramMap.subscribe(url => {
      if (!url.has('country')) {
        return;
      }
      if (this.api.data.length <= 0) {
        this.api.loading = true;
        this.api.findCountryByName().subscribe( (data) => {
          // tslint:disable-next-line: no-string-literal
          // tslint:disable-next-line: no-string-literal
          this.api.data = data['countries_stat'];
          this.api.sorted = this.api.data.slice();
          // tslint:disable-next-line: no-string-literal
          this.country = this.api.data.find( item => {
            // tslint:disable-next-line: no-string-literal
            return item['country_name'] === url.get('country');
          });
          this.api.loading = false;

        }
      );
      } else {
        this.country = this.api.data.find( item => {
          // tslint:disable-next-line: no-string-literal
          return item['country_name'] === url.get('country');
        });
      }
    });
  }

}
