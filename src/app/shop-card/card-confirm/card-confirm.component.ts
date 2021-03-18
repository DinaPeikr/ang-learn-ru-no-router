import {Component, NgModule} from '@angular/core';
import {IProduct} from '../../services/products.service';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-card-confirm',
  templateUrl: './card-confirm.component.html',
  styleUrls: ['./card-confirm.component.css']
})
export class CardConfirmComponent {
  public product!: IProduct;
  public save!: () => void;
  public cancel!: () => void;
}

@NgModule({
  declarations: [CardConfirmComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})

// @ts-ignore
class CardConfirmModule {
}
