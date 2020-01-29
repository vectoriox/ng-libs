import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VioxAosDirective } from './viox-aos.directive';

describe('VioxAosComponent', () => {
  let component: VioxAosDirective;
  let fixture: ComponentFixture<VioxAosDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VioxAosDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VioxAosDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
