export class Redes {
    id?: number;
    nombre: string;
    url: string;
    iconRed: string;

    constructor(nombre: string, url: string, iconRed: string){
        this.nombre = nombre;
        this.url = url;
        this.iconRed = iconRed;

    }
}