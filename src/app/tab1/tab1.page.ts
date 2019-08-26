import { Component } from '@angular/core';
import { ResumoConversa, StatusMensagem } from '../models/models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  paginaAtiva = 'conversas';

  conversas: Array<ResumoConversa> = [
    {
      id: 'a7b3c289-b562-40ff-9a6c-42dc738680fe',
      qtdMensagensNaoLidas: 0,
      nome: 'Elísio',
      ultimaHora: new Date(Date.now()),
      ultimaMensagem: 'e aew',
      minha: true,
      status: StatusMensagem.ENVIANDO,
      foto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/saschadroste/128.jpg'
    },
    {
      id: 'e3236f38-8565-4859-bcfd-9fb4270e8182',
      nome: 'Cecília',
      qtdMensagensNaoLidas: 0,
      ultimaHora: new Date(Date.now()),
      ultimaMensagem: 'quibusdam omnis cupiditate',
      minha: true,
      status: StatusMensagem.ENVIADO,
      foto: 'https://s3.amazonaws.com/uifaces/faces/twitter/falvarad/128.jpg'
    },
    {
      id: '965cf65e-de57-4b45-b2da-4b6cd856846e',
      nome: 'Carlos',
      qtdMensagensNaoLidas: 0,
      ultimaHora: new Date(Date.now()),
      ultimaMensagem: 'Delectus omnis dolorem.',
      minha: false,
      status: StatusMensagem.VISUALIZADO,
      foto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/benjamin_knight/128.jpg'
    },
    {
      id: '99651e6f-dfaa-4ec2-a7e0-929568233ba8',
      nome: 'Tertuliano',
      qtdMensagensNaoLidas: 0,
      ultimaHora: new Date(Date.now()),
      minha: true,
      status: StatusMensagem.VISUALIZADO,
      ultimaMensagem:
        'Doloribus est dolorum aspernatur labore sit et esse enim.',
      foto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/devinhalladay/128.jpg'
    },
    {
      id: 'ea04bdda-a7cc-468b-911d-fbeaa2cb3da0',
      nome: 'Salvador',
      qtdMensagensNaoLidas: 1,
      ultimaHora: new Date(Date.now()),
      ultimaMensagem: 'Possimus optio eligendi.',
      minha: false,
      status: StatusMensagem.RECEBIDO,
      foto: 'https://s3.amazonaws.com/uifaces/faces/twitter/coderdiaz/128.jpg'
    },
    {
      id: 'c2692770-f1cd-40d8-ad82-5f82dd754688',
      nome: 'Fabiano',
      qtdMensagensNaoLidas: 6,
      ultimaHora: new Date(Date.now()),
      ultimaMensagem: 'Et alias animi quia voluptatem quia in harum.',
      minha: false,
      status: StatusMensagem.RECEBIDO,
      foto: 'https://s3.amazonaws.com/uifaces/faces/twitter/belyaev_rs/128.jpg'
    },
    {
      id: 'b6bb0f00-137a-4519-8ed6-04734b328261',
      nome: 'Marli',
      qtdMensagensNaoLidas: 8,
      ultimaHora: new Date(Date.now()),
      ultimaMensagem: 'Ut modi reprehenderit.',
      minha: false,
      status: StatusMensagem.RECEBIDO,
      foto: 'https://s3.amazonaws.com/uifaces/faces/twitter/richwild/128.jpg'
    }
  ];

  constructor() {}

  trocouSegmento(evento: any) {
    this.paginaAtiva = evento.detail.value;
  }

  verificarIcone(resumo: ResumoConversa): string {
    switch (resumo.status) {
      case StatusMensagem.ENVIANDO:
        return 'time';
      case StatusMensagem.ENVIADO:
        return 'checkmark';
      case StatusMensagem.RECEBIDO:
        return 'done-all';
      case StatusMensagem.VISUALIZADO:
        return 'done-all';
      default:
        return '';
    }
  }

  verificarCor(resumo: ResumoConversa): string {
    return (resumo.status === StatusMensagem.VISUALIZADO && resumo.minha) ? 'secondary' : 'medium';
  }

  esconderIconeEnvio(resumo: ResumoConversa) {
      return (resumo.status === StatusMensagem.VISUALIZADO && !resumo.minha) ? true : false;
  }

  deveExibirPaginaConversas() {
    return this.deveExibirPagina('conversas');
  }

  deveExibirPaginaChamadas() {
    return this.deveExibirPagina('chamadas');
  }

  deveExibirPaginaStatus() {
    return this.deveExibirPagina('status');
  }

  private deveExibirPagina(pagina) {
    return this.paginaAtiva === pagina;
  }
}
