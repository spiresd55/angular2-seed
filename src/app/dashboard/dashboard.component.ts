import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
    displayData: string = "Welcome to the dashboard";

    getDisplayData(): string {
        return this.displayData;
    }
}