import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VioxMasonryComponent } from './viox-masonry.component';

describe('VioxMasonryComponent', () => {
  let component: VioxMasonryComponent;
  let fixture: ComponentFixture<VioxMasonryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VioxMasonryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VioxMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
