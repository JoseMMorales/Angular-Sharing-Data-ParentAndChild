import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {

  @Input() beverages = "Tea";
  @Output() newBeverageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addNewBeverageEvent(value: string) {
    this.newBeverageEvent.emit(value);
  }

}
