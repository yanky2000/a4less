import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrdirsComponent } from './attrdirs.component';

describe('AttrdirsComponent', () => {
  let component: AttrdirsComponent;
  let fixture: ComponentFixture<AttrdirsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrdirsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrdirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
