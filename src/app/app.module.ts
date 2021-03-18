import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExampleModule} from './example/example.module';
import {HeaderComponent} from './header/header.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {FooterComponent} from './footer/footer.component';
import {ShopCardComponent} from './shop-card/shop-card.component';
import {ProductsFilterPipe} from './pipes/products-filter.pipe';
import {FormsModule} from '@angular/forms';
import {ExchangeRatesComponent} from './header/exchange-rates/exchange-rates.component';
import {ExchangeRatesDirective} from './header/exchange-rates/exchange-rates.directive';
import {HiddenDirective} from './header/exchange-rates/hidden.directive';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BASE_URL_TOKEN, baseUrl} from './services/config';
import {InterceptorsService} from './services/interceptors.service';
import {ModalModule} from './modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    ShopCardComponent,
    ProductsFilterPipe,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ExampleModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    // {
    //   provide: ProductsService,
    //   useClass: ProductsService
    // }
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorsService,
      multi: true
    },
    {
      provide: BASE_URL_TOKEN,
      useValue: baseUrl,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
