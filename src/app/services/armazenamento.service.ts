import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArmazenamentoService {

  colecaoFirebase; usuario;

  get() {
    this.store.collection('alunos').snapshotChanges()
    .subscribe(dados => {
      this.colecaoFirebase = dados;
    });
  }

  salvar() {
    this.store.collection('alunos').add({
      nome: this.usuario.email,
      disciplina: this.usuario.senha,
      nota: 8
    });
  }

  atualizar(item) {
    this.store.collection('alunos')
      .doc(item.payload.doc.id)
      .set({
        nome: 'tay',
        nota: 5,
        materia: 'alg 2',
      }, {merge: true});
  }

  delete(id) {
    this.store.collection('alunos')
      .doc(id)
      .delete();
  }

  constructor(private store: AngularFirestore) {

    const usuario = this.store.collection('usuarios').doc('usuarios').ref;
   }
}
