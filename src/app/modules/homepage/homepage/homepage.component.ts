import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @ViewChildren("commentCard1") commentCard1?: QueryList<ElementRef>;
  @ViewChildren("commentCard2") commentCard2?: QueryList<ElementRef>;
  @ViewChildren("commentCard3") commentCard3?: QueryList<ElementRef>;
  constructor() { }

  ngOnInit(): void {
  }

}
