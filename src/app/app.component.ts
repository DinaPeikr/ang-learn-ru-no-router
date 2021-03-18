import {Component, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {UnSubscriber} from './utils/unsubscriber';
import {Observable} from 'rxjs';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {IProduct, ProductsService} from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    // {
    //   provide: ProductsService,
    // }
  ]
})

export class AppComponent extends UnSubscriber implements OnInit {
  public title!: string;
  public drawerFromApp!: MatDrawer;
  // public products: IProduct[] =  products;
  public products$: Observable<IProduct[]> = this.productsServer.getProductsJson();
  // public se$: Observable<boolean | null> = products$
  //   .pipe(
  //     pluck('serverError')
  //     // map((res) => res.serverError)
  //   );
  public searchText = '';
  public hasFavorites = false;
  // constructor(private cdr: ChangeDetectorRef) {
  // }

  constructor(private productsServer: ProductsService) {
    super();
    console.log(this.productsServer.timestamp);
  }

  ngOnInit(): void {
    this.title = 'Angular-learn-ru';
    // const subProducts =
    // products$
    //   .pipe(takeUntil(this.UnSubscriber$))
    //   .subscribe(({products}) => {
    //   this.products$ = products;
    // });

    // this.sub.push(subProducts);
    // console.log(this.productsServer);
    // console.log(this.products$);
  }

  public setDrawer(drawer: MatDrawer): void {
    // console.log('APP', drawer);
    // setTimeout(() => {
    //   this.drawerFromApp = drawer;
    // }, 100);
    // Promise.resolve().then(() => {
    //   this.drawerFromApp = drawer;
    // });

    this.drawerFromApp = drawer;
    // this.cdr.detectChanges();
  }

  public searchProductByTitle(text: string): void {
    console.log(text);
    this.searchText = text;
  }

  public productsFilter(products: IProduct[]): IProduct[] {
    return products.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLocaleLowerCase().includes(this.searchText.toLowerCase());
    });
  }

  toggleFavoriteProducts(event: MatCheckboxChange): void {
    this.hasFavorites = event.checked;
    console.log(this.hasFavorites);
  }
}
