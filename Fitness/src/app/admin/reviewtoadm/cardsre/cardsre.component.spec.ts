import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsreComponent } from './cardsre.component';

describe('CardsreComponent', () => {
  let component: CardsreComponent;
  let fixture: ComponentFixture<CardsreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
