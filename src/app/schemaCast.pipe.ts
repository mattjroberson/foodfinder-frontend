import { Pipe, PipeTransform } from '@angular/core';
import { TableSchemaEditable } from './table-schema';

@Pipe({
  name: 'schemaCast',
  pure: true
})
export class SchemaCastPipe implements PipeTransform {  
  transform(value: any): TableSchemaEditable {
    return value;
  }
}