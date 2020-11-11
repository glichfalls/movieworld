import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    sbar = new FormControl();

    constructor() { }

  ngOnInit(): void {
        this.sbar.valueChanges.subscribe(value => console.log(value));
  }

}
