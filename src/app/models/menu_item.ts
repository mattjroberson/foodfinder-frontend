export interface MenuItemID {
    name : string,
    rest_id : number
}
export interface MenuItem {
    id : MenuItemID;
    price : number;
    calories : number;
}