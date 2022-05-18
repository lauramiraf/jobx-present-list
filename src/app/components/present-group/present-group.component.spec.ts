import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentGroupComponent } from './present-group.component';

describe('PresentGroupComponent', () => {
  let component: PresentGroupComponent;
  let fixture: ComponentFixture<PresentGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
