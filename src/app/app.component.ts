import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faCoffee = faCoffee;
  title = 'my-dream-app';
  users: any;
  // userd: any;

  WeatherData:any; 

  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: !true
    }; 
  }
  constructor(private userdata: UserdataService) {
    userdata.user().subscribe((data) => {
      console.warn('==>::::>', data);
      this.users=data

    })
  }
}
