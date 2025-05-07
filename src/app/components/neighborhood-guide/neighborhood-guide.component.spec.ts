import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighborhoodGuideComponent } from './neighborhood-guide.component';

describe('NeighborhoodGuideComponent', () => {
  let component: NeighborhoodGuideComponent;
  let fixture: ComponentFixture<NeighborhoodGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeighborhoodGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeighborhoodGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
