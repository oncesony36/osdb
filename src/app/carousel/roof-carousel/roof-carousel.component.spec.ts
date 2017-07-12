import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofCarouselComponent } from './roof-carousel.component';

describe('RoofCarouselComponent', () => {
  let component: RoofCarouselComponent;
  let fixture: ComponentFixture<RoofCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoofCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
