import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentGroupListComponent } from './present-group-list.component';

describe('PresentGroupListComponent', () => {
  let component: PresentGroupListComponent;
  let fixture: ComponentFixture<PresentGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentGroupListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
