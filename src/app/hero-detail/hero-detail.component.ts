import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

 
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http : HttpClient
  ) {}

  ngOnInit(): void {

  }
  
  goBack(): void {
    this.location.back();
  }
  
  sendMessage(): void {
    
    $.ajax({
      type: 'POST',
      url: "https://messages.getsandbox.com/messages",
      data: JSON.stringify({
        "message" : $("#inputBox").val()
      }),
      success : function(e){
        var $res = window.location.href.split("/");
        var $href = $res[$res.length-1];
        var $div = $("#textarea").val() + "\n" + decodeURI($href) + " : " + $("#inputBox").val() + "\nEchoBot : " + e.message;
        $("#textarea").html($div);
        
        var psconsole = $('#textarea');
        if(psconsole.length)
          psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
        
        console.log(e.message);
        $("#inputBox").val(""); 
      },
      error: function(e) {
        console.log(e);
        $("#inputBox").val("");
      },
      dataType: "json",
      contentType: "application/json"
    });
    
  }
}
