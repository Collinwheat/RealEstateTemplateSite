import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclosuresComponent } from './disclosures.component';

describe('DisclosuresComponent', () => {
  let component: DisclosuresComponent;
  let fixture: ComponentFixture<DisclosuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclosuresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisclosuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
