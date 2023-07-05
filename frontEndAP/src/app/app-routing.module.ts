import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { LoginComponent } from './componentes/login/login.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: IndexComponent },
  { path: 'iniciarsesion', component: LoginComponent },
  { path: '**', component: Pagina404Component }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
