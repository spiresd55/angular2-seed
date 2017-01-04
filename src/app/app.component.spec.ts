import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [AppComponent]});
    });
    it ('should work', () => {
        console.log('MADE IT IN HERE XXXXXXXXXXXXXXXXXXXXXXXX');
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});