import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcomponentsComponent } from './materialcomponents.component';

describe('MaterialcomponentsComponent', () => {
  let component: MaterialcomponentsComponent;
  let fixture: ComponentFixture<MaterialcomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialcomponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
