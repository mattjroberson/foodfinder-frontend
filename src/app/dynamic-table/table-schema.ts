//If used on its own represents plain text attribute
export interface TableSchemaBase {
    key: string,
    text: string,
}

//Represents  editable attribute
export interface TableSchemaEditable extends TableSchemaBase{
    input_type: string,
}

//Represents a button type
export interface TableSchemaButton extends TableSchemaBase{
    property: string,
}

export type TableSchema =  TableSchemaBase | TableSchemaEditable | TableSchemaButton;


