import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ChatrecordService } from './Services/chatrecord.service';
import { FormsModule } from '@angular/forms';
import { ChatBotComponent } from './Components/chat-bot/chat-bot.component';



@NgModule({
  declarations: [
    AppComponent,
    ChatBotComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

    
   
    
    
  ],
  providers: [ChatrecordService],

  bootstrap: [AppComponent]
})
export class AppModule { }
