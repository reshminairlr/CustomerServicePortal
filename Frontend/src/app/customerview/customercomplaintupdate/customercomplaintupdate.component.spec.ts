import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercomplaintupdateComponent } from './customercomplaintupdate.component';

describe('CustomercomplaintupdateComponent', () => {
  let component: CustomercomplaintupdateComponent;
  let fixture: ComponentFixture<CustomercomplaintupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomercomplaintupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercomplaintupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
