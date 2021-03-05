import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  constructor(private router: Router) {
  }

  modules = [ //get config from server
    {
      name: "Seite in Blau",
      url: "/blue",
      theme: {
        palette: {
          primary: "blue",
        },
      },
    },
    {
      name: "Andere Seite Amber",
      url: "/amber",
      theme: {
        palette: {
          primary: "amber",
        },
      },
    },
  ];

}