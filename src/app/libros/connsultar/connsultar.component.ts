import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-connsultar',
  templateUrl: './connsultar.component.html',
  styleUrls: ['./connsultar.component.css']
})
export class ConnsultarComponent implements OnInit {
  servicioLibros: LibrosService;//importar el servicio

  constructor(unServicioLibros:LibrosService) { 
    this.servicioLibros = unServicioLibros;
  }

  ngOnInit() {
  }

  

}
