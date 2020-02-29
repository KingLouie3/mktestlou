import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(public _http: HttpClient) {}
submit() {
  this._http.post(`https://figuektqni.execute-api.us-west-1.amazonaws.com')
}
}
