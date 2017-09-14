import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemePreviewComponent } from './meme-preview.component';

describe('MemePreviewComponent', () => {
  let component: MemePreviewComponent;
  let fixture: ComponentFixture<MemePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
