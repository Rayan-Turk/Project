import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRComponent } from './users-r.component';

describe('UsersRComponent', () => {
  let component: UsersRComponent;
  let fixture: ComponentFixture<UsersRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
