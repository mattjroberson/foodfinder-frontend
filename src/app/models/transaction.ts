export interface TransactionID {
    rest_id: number,
    cust_username: string
}

export interface Transaction {
    id: TransactionID,
    item_name: string,
    date_served: Date    
}