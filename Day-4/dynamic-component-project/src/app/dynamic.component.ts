import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dynamic",
  template: `
    <div class="job-ad">
      <h4>I am Dynamic Component</h4>
    </div>
  `
})
export class DynamicComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
