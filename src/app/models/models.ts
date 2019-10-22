export interface Perfil {
  foto: string;
  nome: string;
  midia: Array<string>;
  notificacoes: boolean;
  recado: string;
  numero: string;
  grupos: Array<string>;
  id: string;
}

export interface Mensagem {
  data: Date;
  autor: string;
  texto: string;
}

export interface ResumoConversa {
  foto: string;
  nome: string;
  ultimaMensagem: string;
  ultimaHora: Date;
  qtdMensagensNaoLidas: number;
  id: string;
  status: StatusMensagem;
  minha: boolean;
}

export enum StatusMensagem {
  ENVIANDO,
  ENVIADO,
  RECEBIDO,
  VISUALIZADO
}

export interface Usuario {
  id: string;
  email: string;
  foto: string;
  nome: string;
  telefone: string;
  resumo: Array<Resumos>;
}

export interface Resumos {}
