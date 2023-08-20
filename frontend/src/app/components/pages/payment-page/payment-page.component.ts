import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  order: Order = new Order();
  constructor(
    private orderService: OrderService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    orderService.getNewOrderForCurrentUser().subscribe({
      next: (order) => {
        this.order = order;
      },
      error: () => {
        router.navigateByUrl('/checkout');
      }
    });
  }

  ngOnInit(): void {
  }

  // Public method to display success message
  showSuccessMessage() {
    this.toastrService.success('Payment successful', 'Success');
  }
}