import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  
  constructor( ) { }

messageAlert(){
alert("Thhis is message");

}
  
}
