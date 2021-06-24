import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustCurrentuserValueComponent } from './just-currentuser-value.component';

describe('JustCurrentuserValueComponent', () => {
  let component: JustCurrentuserValueComponent;
  let fixture: ComponentFixture<JustCurrentuserValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustCurrentuserValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustCurrentuserValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
