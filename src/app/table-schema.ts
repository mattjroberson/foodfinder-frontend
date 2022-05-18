export interface TableSchemaBase {
    key: string,
    text: string,
}


export interface TableSchemaEditable extends TableSchemaBase{
    input_type: string,
}

export interface TableSchemaButton extends TableSchemaBase{
    property: string,
}

export type TableSchema =  TableSchemaBase | TableSchemaEditable | TableSchemaButton;


