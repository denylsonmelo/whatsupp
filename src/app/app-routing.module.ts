import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tab1PageModule } from './tab1/tab1.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  { path: 'pesquisa', loadChildren: './pesquisa/pesquisa.module#PesquisaPageModule' },
  { path: 'contatos', loadChildren: './contatos/contatos.module#ContatosPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
