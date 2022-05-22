import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Restaurant } from "../models/restaurant";
import { Param } from "../models/param";
import { Review } from "../models/review";
import { MenuItem, MenuItemID } from "../models/menu_item";
import { Customer } from "../models/customer";
import { Transaction } from "../models/transaction";

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {
    private apiServerURL = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public searchRestaurants(param : Param){
        return this.http.post<Restaurant[]>(`${this.apiServerURL}/restaurant/search`, param);
    }

    public addRestaurant(rest : Restaurant){
        return this.http.post(`${this.apiServerURL}/restaurant/`, rest);
    }

    public getRestaurants(): Observable<Restaurant[]>{
        return this.http.get<Restaurant[]>(`${this.apiServerURL}/restaurant/all`);
    }

    public deleteRestaurant(id : number){
        return this.http.delete(`${this.apiServerURL}/restaurant/?restID=${id}`);
    }

    public updateRestaurant(rest : Restaurant){
        return this.http.put(`${this.apiServerURL}/restaurant/`, rest);
    }

    public getReviewsByRestaurant(id : number) : Observable<Review[]> {
        return this.http.get<Review[]>(`${this.apiServerURL}/restaurant/reviews/?restID=${id}`);
    }

    public addReview(review: Review){
        return this.http.post(`${this.apiServerURL}/restaurant/review/`, review);
    }

    public deleteReview(id: number){
        return this.http.delete(`${this.apiServerURL}/restaurant/review/?revID=${id}`)
    }

    public updateReview(review: Review){
        return this.http.put(`${this.apiServerURL}/restaurant/review/`, review);
    }

    public getMenuItemsByRestaurant(id : number) : Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${this.apiServerURL}/restaurant/menuitems/?restID=${id}`);
    }

    public addMenuItem(item: MenuItem){
        return this.http.post(`${this.apiServerURL}/restaurant/menuitem/`, item);
    }

    public updateMenuItem(item: MenuItem){
        return this.http.put(`${this.apiServerURL}/restaurant/menuitem/`, item);
    }

    public deleteMenuItem(itemID: MenuItemID){
        return this.http.delete(`${this.apiServerURL}/restaurant/menuitem/?name=${itemID.name}&restID=${itemID.rest_id}`);
    }

    public addCustomer(customer: Customer){
        return this.http.post(`${this.apiServerURL}/restaurant/customers/`, customer);
    }

    public getCustomers(): Observable<Customer[]>{
        return this.http.get<Customer[]>(`${this.apiServerURL}/restaurant/customers`);
    }

    public getCustomerByUserName(userName: String): Observable<Customer>{
        return this.http.get<Customer>(`${this.apiServerURL}/restaurant/customer/?userName=${userName}`);
    }

    public deleteCustomer(userName : string){
        return this.http.delete(`${this.apiServerURL}/restaurant/customers/?userName=${userName}`);
    }

    public updateCustomer(customer : Customer){
        return this.http.put(`${this.apiServerURL}/restaurant/customers`, customer);
    }

    public getRestaurantById(id: number) : Observable<Restaurant> {
        return this.http.get<Restaurant>(`${this.apiServerURL}/restaurant/?restID=${id}`);
    }

    public getFoodTypes(): Observable<String[]>{
        return this.http.get<String[]>(`${this.apiServerURL}/restaurant/foodtypes`)
    }

    public getAvgPrice(restID: number): Observable<number>{
        return this.http.get<number>(`${this.apiServerURL}/restaurant/price/?restID=${restID}`)
    }

    public getAvgReview(restID: number): Observable<number>{
        return this.http.get<number>(`${this.apiServerURL}/restaurant/quality/?restID=${restID}`)
    }

    public addTransaction(transaction: Transaction){
        return this.http.post<Transaction>(`${this.apiServerURL}/restaurant/transactions/`, transaction);
    }

    public getTransactionsByCustomer(userName: string): Observable<Transaction[]>{
        return this.http.get<Transaction[]>(`${this.apiServerURL}/restaurant/transactions/?cUserName=${userName}`)
    }
}