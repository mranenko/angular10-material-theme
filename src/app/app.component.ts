import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  readonly root = document.documentElement;

  constructor() {
  }

  ngOnInit(): void {
    this.root.classList.add('summer-theme', 'summer-theme-light');
    this.root.style.setProperty('--theme', 'summer-theme');
    this.root.style.setProperty('--theme-variant', 'summer-theme-light');
  }
}
