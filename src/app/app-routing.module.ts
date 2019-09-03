import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListagemPageModule } from './listagem/listagem.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./listagem/listagem.module').then(m => m.ListagemPageModule)
  },
  { path: 'pesquisa', loadChildren: './pesquisa/pesquisa.module#PesquisaPageModule' },
  { path: 'contatos', loadChildren: './contatos/contatos.module#ContatosPageModule' },
  { path: 'listagem', loadChildren: './listagem/listagem.module#ListagemPageModule' },
  { path: 'conversa', loadChildren: './conversa/conversa.module#ConversaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
