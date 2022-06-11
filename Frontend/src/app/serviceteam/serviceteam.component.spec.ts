import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceteamComponent } from './serviceteam.component';

describe('ServiceteamComponent', () => {
  let component: ServiceteamComponent;
  let fixture: ComponentFixture<ServiceteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
