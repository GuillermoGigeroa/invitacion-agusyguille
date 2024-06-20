import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleMapsComponent } from './google-maps.component';
import { SafePipe } from './safe.pipe';
import { AddressData } from 'src/app/shared/model/branches/addressData.model';

describe('GoogleMapsComponent', () => {
  let component: GoogleMapsComponent;
  let fixture: ComponentFixture<GoogleMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleMapsComponent, SafePipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleMapsComponent);
    component = fixture.componentInstance;
    component.location = new AddressData('','','');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
