import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatrecordService } from '../../Services/chatrecord.service';
import { Person } from '../../person';
@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {

  container: HTMLElement; 
  user:Person[];
  person = new Person();
  personTitle:string

  
  constructor(private chatrecordService:ChatrecordService) {}
 
  ngOnInit() {
    this.chatRefresh()
    
  }

 

ngAfterViewInit(){
  console.log(this.scrolldiv);
}
 
@ViewChild('scrolldiv') scrolldiv: ElementRef;

  chatRefresh() {
    this.chatrecordService.getUsers()
      .subscribe(data => {
        console.log(data)
        this.user=data;
      })      
 
  }

  scrollToBottom() {
    this.scrolldiv.nativeElement.scrollTop = this.scrolldiv.nativeElement.scrollHeight;
   }
 
  addChat() {
    this.chatrecordService.addChat(this.person)
      .subscribe(data => {
        console.log(data)
        this.chatRefresh();
      })      
      
  }
 
}
 
