import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturelistComponent } from './culturelist.component';

describe('CulturelistComponent', () => {
  let component: CulturelistComponent;
  let fixture: ComponentFixture<CulturelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
