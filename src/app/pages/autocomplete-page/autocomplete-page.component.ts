import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-autocomplete-page',
  templateUrl: './autocomplete-page.component.html',
})
export class AutocompletePageComponent implements OnInit {
  readonly capitals = [
    {
      city: 'Abidjan/Yamoussoukro',
      country: 'Côte d\'Ivoire',
    },
    {
      city: 'Abuja',
      country: 'Nigeria',
    },
    {
      city: 'Accra',
      country: 'Ghana',
    },
    {
      city: 'Addis Ababa',
      country: 'Ethiopia',
    },
    {
      city: 'Algiers',
      country: 'Algeria',
    },
    {
      city: 'Antananarivo',
      country: 'Madagascar',
    },
    {
      city: 'Asmara',
      country: 'Eritrea',
    },
  ];


  constructor() {
  }

  ngOnInit(): void {
  }
}
