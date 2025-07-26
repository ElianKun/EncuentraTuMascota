import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarEncuentroComponent } from './reportar-encuentro.component';

describe('ReportarEncuentroComponent', () => {
  let component: ReportarEncuentroComponent;
  let fixture: ComponentFixture<ReportarEncuentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportarEncuentroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportarEncuentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
