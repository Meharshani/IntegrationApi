import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faCoffee = faCoffee;
  title = 'my-dream-app';
  users: any;
  forcastData: any;
  Today: any;
  // userd: any;

  WeatherData: any;

  ngOnInit() {
    this.WeatherData = {
      main: {},
      isDay: true
    };
  }
  constructor(private userdata: UserdataService) {
    userdata.user().subscribe((data) => {

      console.warn('==>::::>', data);
      this.users = data

    })
    userdata.forcastData().subscribe((data) => {
      console.warn('==>::::}}}}>', data);

      let f: any = [data]
      var forecast: any = f[0];
      // const [forecastday]:any=forecast;
      // var arraycontainsturtles = (forecast.indexOf("forecastday"));
      console.log('==================>,', [forecast][0].forecast.forecastday[0].date_epoch)

      // var someDate = new Date([forecast][0].forecast.forecastday[0].date_epoch);
      var utcSeconds =new Date(1318023197289);
       var d = utcSeconds.getDay()
       const options:any = { weekday: 'long'};
       console.log(new Intl.DateTimeFormat('en-US', options).format(d));
       this.Today = new Intl.DateTimeFormat('en-US', options).format(d)
       let myMoment: moment.Moment = moment(d);
      console.warn('==>::::}}}}===============>',  moment.utc(d).format("HH:MM"));

      this.forcastData = [forecast][0].forecast.forecastday[0]

    })
  }
}
