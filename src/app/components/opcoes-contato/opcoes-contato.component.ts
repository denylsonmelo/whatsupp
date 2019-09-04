import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-opcoes-contato',
  templateUrl: './opcoes-contato.component.html',
  styleUrls: ['./opcoes-contato.component.scss'],
})
export class OpcoesContatoComponent implements OnInit {

  @Input() id: string;
  @Input() nome: string;
  @Input() imagem: string;

  irParaPaginaPerfil() {
    this.irParaPagina(`perfil/${this.id}`);
  }

  irParaPaginaConversa() {
    this.irParaPagina(`conversa/${this.id}`);
  }

  private irParaPagina(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

}
