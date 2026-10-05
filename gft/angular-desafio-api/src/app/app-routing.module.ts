import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { NovoProdutoComponent } from './produtos/novo-produto/novo-produto.component';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ListaProdutoComponent },
  { path: 'produtos/novo', component: NovoProdutoComponent },
  { path: 'produtos/:id', component: ProdutoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
