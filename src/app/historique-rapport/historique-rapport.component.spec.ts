import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueRapportComponent } from './historique-rapport.component';

describe('HistoriqueRapportComponent', () => {
  let component: HistoriqueRapportComponent;
  let fixture: ComponentFixture<HistoriqueRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriqueRapportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
