import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCardComponent } from './cat-card.component';

describe('CatCardComponent', () => {
  let component: CatCardComponent;
  let fixture: ComponentFixture<CatCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatCardComponent]
    });
    fixture = TestBed.createComponent(CatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
