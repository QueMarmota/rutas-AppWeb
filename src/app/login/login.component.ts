import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ruteador:Router;
  constructor(unRuteador:Router) {
    this.ruteador = unRuteador;
   }

  ngOnInit() {
  }

  Entrar(){
    //si el nombre de usuario y contraseña son correctos entonces
    //navegar a consultar libros
    this.ruteador.navigate(['Libros','consultar'])//equivalente a Libros/consultar
  }
}
