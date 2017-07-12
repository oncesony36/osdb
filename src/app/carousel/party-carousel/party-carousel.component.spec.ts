import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyCarouselComponent } from './party-carousel.component';

describe('PartyCarouselComponent', () => {
  let component: PartyCarouselComponent;
  let fixture: ComponentFixture<PartyCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
