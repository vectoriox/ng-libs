import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VioxUiDirevetivesComponent } from './viox-ui-direvetives.component';

describe('VioxUiDirevetivesComponent', () => {
  let component: VioxUiDirevetivesComponent;
  let fixture: ComponentFixture<VioxUiDirevetivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VioxUiDirevetivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VioxUiDirevetivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
