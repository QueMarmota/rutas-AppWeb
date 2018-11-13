import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearComponent } from './libros/crear/crear.component';
import { ConnsultarComponent } from './libros/connsultar/connsultar.component';
import { DetallesComponent } from './libros/detalles/detalles.component';

const rutas: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'crearLibro', component: CrearComponent },
    { path: 'Libros/consultar', component: ConnsultarComponent },
    { path: 'libro/:id', component: DetallesComponent },
    { path: '**', redirectTo: '/login' },//Cualquier ruta desconocida mandara al login
];

export const AppRutas = RouterModule.forRoot(rutas);