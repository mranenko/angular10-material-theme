import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-expansion-page',
  templateUrl: './expansion-page.component.html',
})
export class ExpansionPageComponent implements OnInit {
  panelOpenState = false;

  constructor() {
  }

  ngOnInit(): void {
  }
}
