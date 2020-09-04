import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../person';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class ChatrecordService {
 
  //baseURL: string = "http://localhost:3000/posts";
 
  constructor(private http: HttpClient) {
  }
 
  getUsers(): Observable<Person[]> {
    console.log('getUsers '+"http://localhost:3000/posts")
    return this.http.get<Person[]>("http://localhost:3000/posts")
  }
 
  addChat(person:Person): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post("http://localhost:3000/posts" , body,{'headers':headers})
  }
 
}