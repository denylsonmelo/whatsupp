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
