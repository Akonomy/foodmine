import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent  implements OnInit {
    orders: Order[] = [];

    constructor(private route: ActivatedRoute, private orderService: OrderService) {}

    ngOnInit(): void {
        const userId = this.route.snapshot.params.userId; 
        this.orderService.getAllOrdersForUser(userId).subscribe((orders) => {
            this.orders = orders;
        });
    }
}