import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterControlComponent } from './character-control.component';

describe('CharacterControlComponent', () => {
  let component: CharacterControlComponent;
  let fixture: ComponentFixture<CharacterControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
