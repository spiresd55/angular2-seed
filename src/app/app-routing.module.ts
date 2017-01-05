import { NgModule }               from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent} from './testComponent/testComponent.component'
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'test', component: TestComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: '**', component: DashboardComponent},  //Can replace this with a 404 component
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
