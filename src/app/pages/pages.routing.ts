import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'grafica1', component: Grafica1Component },
            { path: 'progress', component: ProgressComponent },
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class PagesRoutingModule {}