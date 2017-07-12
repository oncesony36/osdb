import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistComponent } from './user-regist.component';

describe('UserRegistComponent', () => {
  let component: UserRegistComponent;
  let fixture: ComponentFixture<UserRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
