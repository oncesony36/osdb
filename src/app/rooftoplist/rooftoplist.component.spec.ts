import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RooftoplistComponent } from './rooftoplist.component';

describe('RooftoplistComponent', () => {
  let component: RooftoplistComponent;
  let fixture: ComponentFixture<RooftoplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RooftoplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RooftoplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
