import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsTreeComponent } from './ingredients-tree.component';

describe('IngredientsTreeComponent', () => {
  let component: IngredientsTreeComponent;
  let fixture: ComponentFixture<IngredientsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
