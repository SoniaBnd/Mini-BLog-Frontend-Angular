import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcommentsComponent } from './listcomments.component';

describe('ListcommentsComponent', () => {
  let component: ListcommentsComponent;
  let fixture: ComponentFixture<ListcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
