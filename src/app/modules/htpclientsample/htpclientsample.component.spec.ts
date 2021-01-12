import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtpclientsampleComponent } from './htpclientsample.component';

describe('HtpclientsampleComponent', () => {
  let component: HtpclientsampleComponent;
  let fixture: ComponentFixture<HtpclientsampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtpclientsampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtpclientsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
