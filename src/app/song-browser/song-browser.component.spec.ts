import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongBrowserComponent } from './song-browser.component';

describe('SongBrowserComponent', () => {
  let component: SongBrowserComponent;
  let fixture: ComponentFixture<SongBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
