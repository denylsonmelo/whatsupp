import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConversaPage } from './conversa.page';

const routes: Routes = [
  {
    path: '',
    component: ConversaPage
  },
  {
    path: ':id',
    component: ConversaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConversaPage]
})
export class ConversaPageModule {}
