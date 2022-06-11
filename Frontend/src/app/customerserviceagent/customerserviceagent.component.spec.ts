import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerserviceagentComponent } from './customerserviceagent.component';

describe('CustomerserviceagentComponent', () => {
  let component: CustomerserviceagentComponent;
  let fixture: ComponentFixture<CustomerserviceagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerserviceagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerserviceagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
