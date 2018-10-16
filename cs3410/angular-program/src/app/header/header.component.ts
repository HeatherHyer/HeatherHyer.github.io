import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { MOCKPERSON } from '../mock-person';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  person = MOCKPERSON;

  constructor() { }

  ngOnInit() {
  }

}
