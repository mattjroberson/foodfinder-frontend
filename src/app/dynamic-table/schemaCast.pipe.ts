import { Pipe, PipeTransform } from '@angular/core';
import { TableSchemaButton, TableSchemaEditable } from './table-schema';

@Pipe({
  name: 'editableCast',
  pure: true
})

export class EditableCastPipe implements PipeTransform {  
  transform(value: any): TableSchemaEditable {
    return value;
  }
}

@Pipe({
  name: 'buttonCast',
  pure: true
})

export class ButtonCastPipe implements PipeTransform {  
  transform(value: any): TableSchemaButton {
    return value;
  }
}