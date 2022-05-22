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

  @Output() cellChangeEvent = new EventEmitter<CellChangeEvent>();
  @Output() buttonClickEvent = new EventEmitter<ButtonEvent>();

  isButton = (col : any) => { return (col as TableSchemaButton).property != undefined };
  isEditable = (col : any) => { return (col as TableSchemaEditable).input_type != undefined };

  ngAfterViewInit(){
    if(this.columnsSchema != undefined) this.displayedColumns = this.columnsSchema.map(col => col.key);
  }

  onCellChange(id : any, attr : any, event: any){
    this.cellChangeEvent.emit({"id": id, "attr": attr, "oldVal": event.oldVal, "newVal": event});
  }

  onButtonClick(id : any, button : any){
    this.buttonClickEvent.emit({"id": id, "button": button});
  }
}

export interface ButtonEvent{
  id: any,
  button: any,
}

export interface CellChangeEvent{
  id: any,
  attr: any,
  oldVal: any,
  newVal: any,
}