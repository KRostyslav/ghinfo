import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposInfoComponent } from './repos-info.component';

describe('ReposInfoComponent', () => {
  let component: ReposInfoComponent;
  let fixture: ComponentFixture<ReposInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
