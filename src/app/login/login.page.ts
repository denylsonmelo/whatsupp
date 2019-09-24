import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {email: '', senha: ''};

  registrar() {
    this.auth.auth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha);
    // this.auth.auth.sign;
  }

  constructor(private auth: AngularFireAuth) { }

  ngOnInit() {
  }

}
