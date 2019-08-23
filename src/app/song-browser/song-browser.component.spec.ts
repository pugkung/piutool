import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongBrowserComponent } from './song-browser.component';
import { MaterialModule } from '../material-module';
import { ReactiveFormsModule } from '@angular/forms';

describe('SongBrowserComponent', () => {
  let component: SongBrowserComponent;
  let fixture: ComponentFixture<SongBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, ReactiveFormsModule ],
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
