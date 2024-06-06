import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragScreenComponent } from './drag-screen.component';

describe('DragScreenComponent', () => {
  let component: DragScreenComponent;
  let fixture: ComponentFixture<DragScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
