import { Component, Input, OnInit } from '@angular/core';
import { NgbDropdownItem } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent implements OnInit {
  @Input() customDropdownItems;

  selectedItemValue: string = '';
  dropDownItems = [];
  constructor() { }

  ngOnInit(): void {
    this.dropDownItems = this.customDropdownItems.childrens;
  }

  selectedItem(value) {
    this.selectedItemValue = value;
  }
}
