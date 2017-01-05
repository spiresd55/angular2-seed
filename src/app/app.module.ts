import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './testComponent/testComponent.component';
import { DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        TestComponent,
        DashboardComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
