import { Component, OnInit } from '@angular/core';
import { TableSchema } from '../../dynamic-table/table-schema';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.css']
})
export class AllRestaurantsComponent implements OnInit {

  USER_DATA = [
    {"name": "John Smith", "occupation": "Advisor", "age": 36},
    {"name": "Muhi Masri", "occupation": "Developer", "age": 28},
    {"name": "Peter Adams", "occupation": "HR", "age": 20},
    {"name": "Lora Bay", "occupation": "Marketing", "age": 43}
  ];
  
  COLUMNS_SCHEMA : TableSchema[] =[
    {
        key: "name",
        text: "Full Name",
        input_type: "text",
    },
    {
        key: "occupation",
        text: "Occupation",
    },
    {
        key: "age",
        text: "Age",
    },
    {
      key: "isEdit",
      text: "Button",
      property: "test",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
