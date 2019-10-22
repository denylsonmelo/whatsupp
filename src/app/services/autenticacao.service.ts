import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/models';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  usuario;
  colecaoFirebase;
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

  getUser() {
    console.log('dentro do user');
    console.log(this.usuario);
    return this.usuario;
  }

  constructor(private afa: AngularFireAuth) {
    console.log('construtor autenticacao');

    this.afa.authState.subscribe(usuario => {
      if (usuario) { console.log('existe'); } else { console.log('nao existe'); }
    });
  }
}
