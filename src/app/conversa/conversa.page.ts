import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResumoConversa, StatusMensagem } from '../models/models';

@Component({
  selector: 'app-conversa',
  templateUrl: './conversa.page.html',
  styleUrls: ['./conversa.page.scss']
})
export class ConversaPage implements OnInit {

  mensagens: Array<string> = [];
  conversa: ResumoConversa = {
    id: 'a7b3c289-b562-40ff-9a6c-42dc738680fe',
    qtdMensagensNaoLidas: 0,
    nome: 'Elísio',
    ultimaHora: new Date(Date.now()),
    ultimaMensagem: 'e aew',
    minha: true,
    status: StatusMensagem.ENVIANDO,
    foto:
      'https://s3.amazonaws.com/uifaces/faces/twitter/saschadroste/128.jpg'
  };

  enviarMensagem(campo) {
    this.mensagens.push(campo.value);
  }

  constructor(private route: ActivatedRoute) {
    // this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}
}
