import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearComponent } from './libros/crear/crear.component';
import { ConnsultarComponent } from './libros/connsultar/connsultar.component';
import { AppRutas } from './app.rutas';
import { DetallesComponent } from './libros/detalles/detalles.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    CrearComponent,
    ConnsultarComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
