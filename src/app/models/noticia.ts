export class Noticia {

    constructor(
        public _id: string,
        public nombre: string,
        public titulo: string,
        public descripcion: string,
        public video: string,
        public image: string,
        public profesores: string,
        public text: string,
        public categoria: string,
        public fecha: number
    ) {}
}