import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('App Component Tests', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule(
            {
                imports: [RouterTestingModule],
                declarations: [AppComponent]
            }
        )
            .compileComponents();
    }));

    it ('should compile the app component', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });

    it ('test function should return false', () => {
        let fixture = TestBed.createComponent(AppComponent);
        let comp = fixture.componentInstance;
        expect(comp.testFunction()).toBe(false);
    });
});