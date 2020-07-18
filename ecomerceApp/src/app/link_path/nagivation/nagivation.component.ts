import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nagivation',
  templateUrl: './nagivation.component.html',
  styleUrls: ['./nagivation.component.css']
})
export class NagivationComponent implements OnInit {

  public currentUser=true

  constructor() { }

  ngOnInit(): void {
  }

}
