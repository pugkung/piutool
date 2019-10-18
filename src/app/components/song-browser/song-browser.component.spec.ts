import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';

import { SongBrowserComponent } from './song-browser.component';
import { MaterialModule } from '../../material-module';
import { SearchBarComponent } from '../search-bar/search-bar.component';

describe('SongBrowserComponent', () => {
  let component: SongBrowserComponent;
  let fixture: ComponentFixture<SongBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, ReactiveFormsModule, NouisliderModule ],
      declarations: [ SongBrowserComponent, SearchBarComponent ]
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
