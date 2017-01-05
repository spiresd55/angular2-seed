import { TestBed } from '@angular/core/testing';
import { TestComponent } from './testComponent.component';
import { async } from '@angular/core/testing';

describe('Test Component tests', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({ declarations: [TestComponent]})
            .compileComponents();
    }));
    it ('should create test component instance', () => {
        let fixture = TestBed.createComponent(TestComponent);

        let comp = fixture.componentInstance;
        expect(comp instanceof TestComponent).toBe(true, 'should create TestComponent');
    });
});