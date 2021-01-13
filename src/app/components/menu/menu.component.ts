import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() MenuItem = {
    name: null,
    price: null,
    preparationTime: null,
    description: null,
    picture: null,
    restaurantId: null,
  }

  saveMenu() {
    
  }

}
