import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LibrosService} from './services/libros.service'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearComponent } from './libros/crear/crear.component';
import { ConnsultarComponent } from './libros/connsultar/connsultar.component';
import { AppRutas } from './app.rutas';
import { DetallesComponent } from './libros/detalles/detalles.component';
import {FormsModule} from '@angular/forms'

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
    AppRutas,
    FormsModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent],

})

export class AppModule { }
