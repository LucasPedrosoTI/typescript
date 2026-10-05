import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './navigation/home/home.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './service/produto.service';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';
import { SpinnerComponent } from './util/spinner/spinner.component';
import { httpInterceptorProviders } from './http-interceptor';
import { NovoProdutoComponent } from './produtos/novo-produto/novo-produto.component';
import { FormsModule } from '@angular/forms';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    ListaProdutoComponent,
    ProdutoDetalheComponent,
    SpinnerComponent,
    NovoProdutoComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    httpInterceptorProviders,
    ProdutoService,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
