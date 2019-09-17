import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResumoConversa, StatusMensagem, Mensagem } from '../models/models';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conversa',
  templateUrl: './conversa.page.html',
  styleUrls: ['./conversa.page.scss']
})
export class ConversaPage implements OnInit {
  mensagens: Array<Mensagem> = [
    {
      texto: 'Beatae autem voluptatem et nemo ad facilis provident est.',
      data: new Date(Date.now()),
      autor: 'a7b3c289-b562-40ff-9a6c-42dc730987654'
    },
    {
      texto: 'Et deserunt rem sed expedita velit veniam.',
      data: new Date(Date.now()),
      autor: 'a7b3c289-b562-40ff-9a6c-42dc738680fe'
    },
    {
      texto: 'Quia sint sapiente laboriosam dolor alias totam.',
      data: new Date(Date.now()),
      autor: 'a7b3c289-b562-40ff-9a6c-42dc730987654'
    },
    {
      texto:
        'Ea consequatur eligendi nostrum voluptatem enim dolorum deserunt.',
      data: new Date(Date.now()),
      autor: 'a7b3c289-b562-40ff-9a6c-42dc730987654'
    },
    {
      texto:
        'Mollitia enim sapiente provident sit beatae consequatur in perferendis.',
      data: new Date(Date.now()),
      autor: 'a7b3c289-b562-40ff-9a6c-42dc738680fe'
    },
    {
      texto: 'Sequi voluptatem eaque.',
      data: new Date(Date.now()),
      autor: 'a7b3c289-b562-40ff-9a6c-42dc738680fe'
    }
  ];

  conversa: ResumoConversa = {
    id: 'a7b3c289-b562-40ff-9a6c-42dc738680fe',
    qtdMensagensNaoLidas: 0,
    nome: 'Elísio',
    ultimaHora: new Date(Date.now()),
    ultimaMensagem: 'e aew',
    minha: true,
    status: StatusMensagem.ENVIANDO,
    foto: 'https://s3.amazonaws.com/uifaces/faces/twitter/saschadroste/128.jpg'
  };

  verificarAutor(mensagem: Mensagem) {
    return mensagem.autor === this.conversa.id ? 'recebeu' : 'enviou';
  }

  enviarMensagem(campo) {
    this.mensagens.push(campo.value);
  }

  irParaPaginaPerfil() {
    this.navCtrl.navigateForward(`perfil/${this.conversa.id}`);
  }

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {
    // this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}
}
