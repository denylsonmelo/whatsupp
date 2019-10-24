import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  email;
  senha;
  usuario;

  sair() {
    this.autenticacao.logout();
  }

  logar() {
    this.autenticacao.logar(this.email, this.senha);
  }

  constructor(private autenticacao: AutenticacaoService) {}

  async ngOnInit() {
    console.log('dentro do login');
    this.usuario = await this.autenticacao.getUser();
    console.log(this.usuario);
  }
}
