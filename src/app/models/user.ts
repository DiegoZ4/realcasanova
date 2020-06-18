export class User {

    constructor(
        public _id: string,
        public nombre: string,
        public apellido: string,
        public nick: string,
        public image: string,
        public password: string,
        public clubHincha: string,
        public clubJuega: string,
        public direccion: string,
        public localidad: string,
        public email: string,
        public posicion: string,
        public score: string,
        public nacimiento: number,
        public role: string
    ) {}
}