import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/models';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  logout() {
    this.afa.auth.signOut();
  }

  logar(email, senha) {
    this.afa.auth
      .signInWithEmailAndPassword(email, senha)
      .then(sucesso => {
        console.log('sucesso');
        console.log(sucesso);
      })
      .catch(erro => {
        console.log('erro');
        console.log(erro);
      });
  }

  registrar(email, senha) {
    this.afa.auth
      .createUserWithEmailAndPassword(email, senha)
      .then(usuarioFirebase => {
        console.log('deu certo');
        console.log(usuarioFirebase);
      })
      .catch(erro => {
        console.log('erro');
        console.log(erro);
      });
  }

  async getUser() {
    console.log('dentro do user autenti');

    return this.afa.authState.subscribe(usuario => {
      return usuario ? usuario.email : null;
    });
  }

  constructor(private afa: AngularFireAuth) {
    console.log('construtor autenticacao');
  }
}
