import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = ['https://education.launchcode.org/intro-to-professional-web-dev/chapters/angular-lsn1/exercises.html#add-more-movies', 'https://www.w3schools.com/tags/tag_hr.asp', 'https://angular.io/cli#command-overview'] ;
  constructor() { }

  ngOnInit() {
  }

}
