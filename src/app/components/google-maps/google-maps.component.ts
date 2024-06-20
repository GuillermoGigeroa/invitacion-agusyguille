import { AfterContentChecked, Component, Input } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements AfterContentChecked{
  @Input()
  input!: string;
  mapsURL?: string;
  ngAfterContentChecked(): void {
    this.mapsURL = `https://maps.google.com/maps?q=${this.input}&t=&z=20&ie=UTF8&iwloc=&output=embed`;
  }
}
