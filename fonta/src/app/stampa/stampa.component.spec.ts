import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StampaComponent } from './stampa.component';

describe('StampaComponent', () => {
  let component: StampaComponent;
  let fixture: ComponentFixture<StampaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StampaComponent]
    });
    fixture = TestBed.createComponent(StampaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
