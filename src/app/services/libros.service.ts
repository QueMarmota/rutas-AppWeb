import { Injectable } from '@angular/core';
import { Libro } from '../modelos/libro';
import { Params } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  libros: Libro[];
  ultimoId:number;
  constructor() {
    this.libros = [];
    this.ultimoId = 0;

  }
  agregar(unLibro: Libro) {
    unLibro._id = ++this.ultimoId;
    this.libros.push(unLibro);
    console.log('Soy el servicio agregando el Libro ',unLibro)
    console.log(this.libros)
  }

  getLibros(): Libro[] {
    return this.libros;
  }

  getLibro(_id:number) {
    console.log(_id);
   
    console.log(this.libros.find(l => l._id == _id));
    return this.libros.find(l => l._id == _id)
  }
}
