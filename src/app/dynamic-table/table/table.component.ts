import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { TableSchema, TableSchemaButton, TableSchemaEditable } from '../table-schema';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  
  @Input() dataSource!: any;
  @Input() columnsSchema!: TableSchema[];

  displayedColumns!: string[];

  @Output() cellChangeEvent = new EventEmitter<string>();
  @Output() buttonClickEvent = new EventEmitter<string>();

  isButton = (col : any) => { return (col as TableSchemaButton).property != undefined };
  isEditable = (col : any) => { return (col as TableSchemaEditable).input_type != undefined };

  ngAfterViewInit(){
    this.displayedColumns = this.columnsSchema.map(col => col.key);
  }

  // addRow(){
  //   const newRow = {"name": "", "occupation": "", "dateOfBirth": "", "age": 0, isEdit: true}
  //   this.dataSource = [newRow, ...this.dataSource];
  // }

  onCellChange(id : any, attr : any, newVal: any){
    console.log(`Element ${id} Attribute ${attr} has new Value ${newVal}`);
  }

  onButtonClick(id : any, button : any){

  }
}
