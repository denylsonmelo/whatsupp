import { Component, OnInit } from '@angular/core';
import { ResumoConversa, StatusMensagem, Perfil } from '../models/models';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  perfil: Perfil = {
    id: 'a7b3c289-b562-40ff-9a6c-42dc738680fe',
    nome: 'Elísio',
    recado: 'bateria prestes a acabar',
    foto: 'https://s3.amazonaws.com/uifaces/faces/twitter/saschadroste/128.jpg',
    notificacoes: true,
    numero: '+55 86 99130-4378',
    midia: ['1', '2', '3', '4', '5', '6', '7', ],
    grupos: ['eos magnam voluptas', 'impedit natus est']
  };

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 4.7
  };

  constructor() { }

  ngOnInit() {
  }

}
