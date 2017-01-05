import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutletMap } from '@angular/router';
import { async } from '@angular/core/testing';

describe('App', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({ declarations: [AppComponent]})
            .compileComponents();
    }));
    it ('should work', () => {
        console.log('MADE IT IN HERE XXXXXXXXXXXXXXXXXXXXXXXX');
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});