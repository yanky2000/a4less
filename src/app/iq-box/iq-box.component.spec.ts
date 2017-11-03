import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IqBoxComponent } from './iq-box.component';

describe('IqBoxComponent', () => {
  let component: IqBoxComponent;
  let fixture: ComponentFixture<IqBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IqBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IqBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
