import { TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { async } from '@angular/core/testing';

describe('Dashboard Component Specs', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({ declarations: [DashboardComponent]})
            .compileComponents();
    }));
    it ('should create dashboard component instance', () => {
        let fixture = TestBed.createComponent(DashboardComponent);

        let comp = fixture.componentInstance;
        expect(comp instanceof DashboardComponent).toBe(true, 'should create DashboardComponent');
        expect(comp.getDisplayData()).toBeDefined();
    });
});