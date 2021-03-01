import { Component, OnInit } from '@angular/core';
import { NgbDropdownItem } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent implements OnInit {
  //items = ['a', 'b', 'c'];
  selectedItemValue: string = '';

  customDropdownItems = [{
    name: 'Level 1',
    items: [
      {
        name: 'item 1-1',
        items: [{ name: 'item 1-1-1' }]
      },
      {
        name: 'item 1-2',
        items: [{ name: 'item 1-2-1' }, { name: 'item 1-2-2' }, { name: 'item 1-2-3' }, { name: 'item 1-2-4' }]
      },
      {
        name: 'item 1-3',
        items: [{ name: 'item 1-3-1' }, { name: 'item 1-3-2' }]
      },
      {
        name: 'item 1-4',
        items: [{ name: 'item 1-4-1' }, { name: 'item 1-4-2' }, { name: 'item 1-4-3' }, { name: 'item 1-4-4' }]
      },]
  },
  {
    name: 'Level 2',
    items: [
      {
        name: 'item 2-1',
        items: [{ name: 'item 2-1-1' }, { name: 'item 2-1-2' }, { name: 'item 2-1-3' }, { name: 'item 2-1-4' }]
      },
      {
        name: 'item 2-2',
       
      },
      {
        name: 'item 2-3',
        items: [{ name: 'item 2-3-1' }, { name: 'item 2-3-2' }]
      }]
  },
  {
    name: 'Level 3',
    items: [
      {
        name: 'item 3-1',
        items: [{ name: 'item 3-1-1' }, { name: 'item 3-1-2' }, { name: 'item 3-1-3' }]
      },
      {
        name: 'item 3-2',
        items: [{ name: 'item 3-2-1' }, { name: 'item 3-2-2' }]
      },
      {
        name: 'item 3-3',
        items: [{ name: 'item 3-3-1' }]
      }]
  }];
  constructor() { }

  ngOnInit(): void {
  }

  selectedItem(value) {
    this.selectedItemValue = value;
  }
}
