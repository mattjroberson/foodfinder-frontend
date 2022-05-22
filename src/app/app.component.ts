import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { TableSchema } from "./dynamic-table/table-schema";
import { ButtonEvent, CellChangeEvent } from "./dynamic-table/table/table.component";
import { Restaurant } from "./models/restaurant";
import { RestaurantService } from './services/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'foodfinder-frontend';
  
  USER_DATA !: Restaurant[];
  
  COLUMNS_SCHEMA : TableSchema[] =[
    {
        key: "name",
        text: "Restaurant",
    },
    {
        key: "latitude",
        text: "Latitude",
    },
    {
        key: "longitude",
        text: "Longitude",
    },
    {
        key: "food_type",
        text: "Food Type",
        input_type: "text",
    },
    {
      key: "reviews",
      text: "Reviews",
      property: "primary",
    },
    {
      key: "menu",
      text: "Menu",
      property: "accent",
    },
    {
      key: "delete",
      text: "Delete",
      property: "warn",
    }
  ];
  
  constructor(private restaurantService: RestaurantService){}

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe({
      next: (response: Restaurant[]) => {
        this.USER_DATA = response;
      },
      error: (error: HttpErrorResponse) => alert(error.message)
    })
  }

  onButtonPress(event: ButtonEvent){
    console.log(event);
  }

  onCellChange(event: CellChangeEvent){
    console.log(event);
  }
}
