import { Component } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

import { ResumoConversa, StatusMensagem } from '../models/models';
import { MenuOpcoesComponent } from '../components/menu-opcoes/menu-opcoes.component';
import { OpcoesContatoComponent } from '../components/opcoes-contato/opcoes-contato.component';

@Component({
  selector: 'app-listagem',
  templateUrl: 'listagem.page.html',
  styleUrls: ['listagem.page.scss']
})
export class ListagemPage {
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
    }
  ];

  constructor(
    private navCtrl: NavController,
    private ppvCtrl: PopoverController
  ) {}

  async exibirOpcoesContato(conversa: ResumoConversa) {
    const modal = await this.ppvCtrl.create({
      component: OpcoesContatoComponent,
      componentProps: {
        id: conversa.id,
        nome: conversa.nome,
        imagem: conversa.foto
      }
    });
    return await modal.present();
  }

  async exibirMenuOpcoes(ev) {
    const popover = await this.ppvCtrl.create({
      component: MenuOpcoesComponent,
      event: ev
    });
    return await popover.present();
  }

  trocouSegmento(evento: any) {
    this.paginaAtiva = evento.detail.value;
  }

  verificarIcone(resumo: ResumoConversa): string {
    switch (resumo.status) {
      case StatusMensagem.ENVIANDO:
        return 'time';
      case StatusMensagem.ENVIADO:
        return 'checkmark';
      case StatusMensagem.RECEBIDO || StatusMensagem.VISUALIZADO:
        return 'done-all';
      case StatusMensagem.VISUALIZADO:
        return 'done-all';
    }
  }

  verificarCor(resumo: ResumoConversa): string {
    return resumo.status === StatusMensagem.VISUALIZADO && resumo.minha
      ? 'secondary'
      : 'medium';
  }

  deveEsconderIconeEnvio(resumo: ResumoConversa) {
    return resumo.status === StatusMensagem.VISUALIZADO && !resumo.minha
      ? true
      : false;
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

  irParaPaginaConversa(uuid) {
    this.irParaPagina(`conversa/${uuid}`);
    // this.irParaPagina('conversa/' + uuid + '');
  }

  irParaPaginaPesquisa() {
    this.irParaPagina('pesquisa');
  }

  irParaPaginaContatos() {
    this.irParaPagina('contatos');
  }

  private irParaPagina(pagina) {
    this.navCtrl.navigateForward(pagina);
  }
}
