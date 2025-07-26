import { Routes } from '@angular/router';

export const routes: Routes = [

        {path:"inicio", loadComponent: () => import("./Componentes/pagina-principal/pagina-principal.component").then(m=>m.PaginaPrincipalComponent) },
        {path:"login", loadComponent: () => import("./Componentes/login/login.component").then(m=>m.LoginComponent) },
        {path:"campañas", loadComponent: () => import("./Componentes/campanias/campanias.component").then(m=>m.CampaniasComponent) }
        //{path:"login", loadComponent: () => import("./Componentes/login/login.component").then(m=>m.LoginComponent) },


];
