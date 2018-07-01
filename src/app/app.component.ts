import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchedText: string = '';
  users;
  res;
  numberShown;

  constructor(private http: HttpClient) {
    console.log('[constructor] httpClient')
    this.numberShown = 9
    this.http.get('https://randomuser.me/api/?results=1000').subscribe(data => {
      this.res = data
      this.users = this.res.results
      console.log(this.users)
    })
  }

  addNineUsers () {
    this.numberShown = this.numberShown + 9
    return console.log('addNineUsers')
  }
}
