import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];

    constructor(private restService: RestService) {}

    getOrders(): Order[] {
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.restService.saveOrder(order);
    }
        
    }
