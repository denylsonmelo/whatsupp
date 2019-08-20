import { Component } from '@angular/core';
import { ResumoConversa } from '../models/models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  conversas: Array<ResumoConversa> = [
    {
      qtdMensagensNaoLidas: 3,
      nome: 'evaldo',
      ultimaHora: new Date(Date.now()),
      ultimaMensagem: 'e aew',
      foto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/saschadroste/128.jpg'
    },
    {
      nome: 'Cecília',
      qtdMensagensNaoLidas: 7,
      ultimaHora: new Date(Date.now()),
      ultimaMensagem: 'quibusdam omnis cupiditate',
      foto: 'https://s3.amazonaws.com/uifaces/faces/twitter/falvarad/128.jpg'
    },

  ];

  constructor() {}
}
