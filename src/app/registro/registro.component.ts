import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  ruteador:Router;
  constructor(unRuteador:Router) { //en el constructor no se le pasa nada por que angular lo hace por ti 

    this.ruteador = unRuteador;

  }

  ngOnInit() {
  }

  enviar():void{
    //si la informacion del registro es correcta
    //entonces vamos a navegar al login
    this.ruteador.navigate(['login']);
  }

}
