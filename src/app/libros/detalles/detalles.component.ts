import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from 'src/app/services/libros.service';
import {Libro} from '../../modelos/libro';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  rutaActiva: ActivatedRoute;
  serviciosLibros:LibrosService;
  titulo:String;
  autor:String;
  librito:Libro;
  constructor(laRutaActiva: ActivatedRoute,unServiciosLibros:LibrosService) {
    this.rutaActiva = laRutaActiva;
    this.serviciosLibros = unServiciosLibros;
    this.titulo ='';
    this.autor='';
    
    
  }

  ngOnInit() {//esta funcion ejecuta codigo despues de q el objeto es creado
    console.log(this.rutaActiva.snapshot.params.id);
    
    this.librito = this.serviciosLibros.getLibro(this.rutaActiva.snapshot.params.id)
   

  }

}
