import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
heroHeading: string;
heroText: string;
heroBtnText: string;
heroBtnUrl: string;

  constructor() { 
this.heroHeading = "Winter Experience";
this.heroText = "We are your ultimate experience provider";
this.heroBtnText = "Learn more";
this.heroBtnUrl ="https://codefactory.wien";

  }
  ngOnInit() {
  }

}
