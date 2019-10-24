import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../services/autenticacao.service';

@Component({
  selector: 'app-menu-opcoes',
  templateUrl: './menu-opcoes.component.html',
  styleUrls: ['./menu-opcoes.component.scss']
})
export class MenuOpcoesComponent implements OnInit {
  sair() {
    this.autenticacao.logout();
  }

  constructor(private autenticacao: AutenticacaoService) {}

  ngOnInit() {}
}
