import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingCarouselComponent } from './meeting-carousel.component';

describe('MeetingCarouselComponent', () => {
  let component: MeetingCarouselComponent;
  let fixture: ComponentFixture<MeetingCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
