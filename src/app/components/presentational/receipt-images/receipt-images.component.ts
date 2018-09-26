import { Component, Input } from '@angular/core';
import { Expense } from '../../../models';

@Component({
  selector: 'app-receipt-images',
  templateUrl: './receipt-images.component.html',
  styleUrls: ['./receipt-images.component.scss']
})
export class ReceiptImagesComponent {
  @Input() expense: Expense;
  show: boolean;
  backendUrl = 'http://localhost:3000';

  constructor() { 
    this.show = false;
  }

  onToggle() {
    this.show = !this.show;
  }

}
