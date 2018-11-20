import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/modelos/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  libro: Libro;
  servicioLibros: LibrosService;//importar el servicio
  constructor(unServicioLibros: LibrosService) {
    this.libro = new Libro();
    this.servicioLibros = unServicioLibros;//asignacion de servicio que me pasa angular
  }

  ngOnInit() {
  }

  agregar() {
    console.log(this.libro)
    this.servicioLibros.agregar(this.libro);
    this.libro = new Libro();
  }

}
