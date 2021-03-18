import {Component, Input, OnInit} from '@angular/core';
import {IProduct, ProductsService} from '../services/products.service';
import {ModalService} from '../services/modal.service';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css'],
  providers: [
    // {
    //   provide: ProductsService,
    // }
  ]
})
export class ShopCardComponent implements OnInit {
  @Input() public product!: IProduct;
  @Input() public index!: number;
  @Input() public count!: number;
  @Input() public first!: boolean;
  @Input() public last!: boolean;
  @Input() public even!: boolean;
  @Input() public odd!: boolean;

  constructor(private productsService: ProductsService,
              private readonly modalService: ModalService) {
    console.log(this.productsService.timestamp);
  }

  ngOnInit(): void {

  }

 async addToCard(): Promise<void> {
    const {CardConfirmComponent} = await import('./card-confirm/card-confirm.component');
    // this.modalService.open(this.product);
    this.modalService.open({
      component: CardConfirmComponent,
      context: {
        product: {...this.product},
        save: () => {
          console.log('save');
          this.modalService.close();
        },
        cancel: () => {
          console.log('cancel');
          this.modalService.close();
        },
      }
    });
  }
}
