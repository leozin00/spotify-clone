import { InicioComponent } from './paginas/inicio/inicio.component';
import { BibliotecaComponent } from './paginas/biblioteca/biblioteca.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'biblioteca', component: BibliotecaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
