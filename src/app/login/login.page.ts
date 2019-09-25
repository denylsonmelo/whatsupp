import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  usuario = { email: '', senha: '' };
  usuarioFirebase;

  logout() {
    this.afa.auth.signOut();
  }

  logar() {
    this.afa.auth.signInWithEmailAndPassword(
      this.usuario.email,
      this.usuario.senha
    )
    .then(sucesso => {console.log(sucesso);})
    .catch(erro => {console.log(erro);});
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

  constructor(private afa: AngularFireAuth) {
    this.usuarioFirebase = this.afa.authState;
  }

  ngOnInit() {}
}
