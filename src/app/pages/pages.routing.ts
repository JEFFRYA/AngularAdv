import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromiseComponent } from "./promise/promise.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { titulo: "Inicio" } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: "Configuración" } },
            { path: 'grafica1', component: Grafica1Component, data: { titulo: "Graficas" } },
            { path: 'progress', component: ProgressComponent, data: { titulo: "Progreso" } },
            { path: 'promise', component: PromiseComponent, data: { titulo: "Promesas" } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: "rxjs" } },
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class PagesRoutingModule {}