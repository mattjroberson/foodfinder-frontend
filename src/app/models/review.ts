export interface ReviewID {
    id : number,
    rest_id : number
}
export interface Review {
    id : ReviewID,
    quality : number,
    price : number,
    summary : String
    cust_username : String,
}