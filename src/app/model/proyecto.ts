export class Proyecto {
  id?: number;
  nombre: string;
  descripcion: string;
  imgP?: string;
  
  gitLink?: string;

  constructor(nombre: string, descripcion: string, imgP: string, gitLink: string){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imgP = imgP;
    
    this.gitLink = gitLink;
  }
}
