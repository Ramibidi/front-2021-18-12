import { DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Demande } from "../../demande";







@Component({
  templateUrl: "historique.component.html",
})


export class HistoriqueComponent implements OnInit { 
  searchText : any ;
  p :any ;
 
  SelectedDate : any ;
  readonly ROOT_URL = 'http://127.0.0.1:8000/api/affichedemande/';
  
public historique : any = [];

  constructor(private http: HttpClient , public datepipe: DatePipe) {
    
   }


  ngOnInit(): void {
  
  localStorage.getItem('talan_userId')
  this.historique= this.http.get(this.ROOT_URL+ localStorage.getItem('talan_userId'));
  
  }

  
}
