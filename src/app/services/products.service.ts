import {products$} from '../data';
import {pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

export interface IProduct {
  _id: string;
  title: string;
  img: string;
  price: number;
  author: string;
  isFavorite: boolean;
}
@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  public timestamp = Date.now();

  getProducts(): Observable<IProduct[]> {
    return products$
      .pipe(
        pluck('products')
        // map(({products}) => products)
      );
  }

  getProductsJson(): Observable<IProduct[]> {
    return this.http.get<any>(`/`);
  }
}
