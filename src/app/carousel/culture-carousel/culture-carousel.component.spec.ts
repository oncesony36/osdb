import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureCarouselComponent } from './culture-carousel.component';

describe('CultureCarouselComponent', () => {
  let component: CultureCarouselComponent;
  let fixture: ComponentFixture<CultureCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
