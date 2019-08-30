import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opcoes-contato',
  templateUrl: './opcoes-contato.component.html',
  styleUrls: ['./opcoes-contato.component.scss'],
})
export class OpcoesContatoComponent implements OnInit {

  @Input() id: string;
  @Input() nome: string;
  @Input() imagem: string;

  constructor() { }

  ngOnInit() {}

}
