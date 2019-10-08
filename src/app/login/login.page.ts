import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  usuario = { email: '', senha: '' };
  usuarioFirebase;
  colecaoFirebase;

  logout() {
    // this.afa.auth.signOut();

    console.log(this.colecaoFirebase);

  }

  logar() {
    this.afa.auth.signInWithEmailAndPassword(
      this.usuario.email,
      this.usuario.senha
    )
    .then(sucesso => {console.log(sucesso); })
    .catch(erro => {console.log(erro); });
  }

  registrar() {
    this.afa.auth
      .createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha)
      .then(usuarioFirebase => {
        console.log('deu certo');
        console.log(usuarioFirebase);
      })
      .catch(erro => {
        console.log('erro');
        console.log(erro);
      });
  }

  constructor(
    private afa: AngularFireAuth,
    private store: AngularFirestore
    ) {
    this.usuarioFirebase = this.afa.authState;

    this.store.collection('alunos').stateChanges()
      .subscribe(dados => {
        this.colecaoFirebase = dados;
      });
  }

  ngOnInit() {}
}
