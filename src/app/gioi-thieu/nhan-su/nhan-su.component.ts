import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nhan-su',
  templateUrl: './nhan-su.component.html',
  styleUrls: ['./nhan-su.component.css']
})
export class NhanSuComponent implements OnInit {
  imgs_team1 :string="";
  imgs_team2 :string="";
  imgs_team3 :string="";
  constructor() { 
    this.imgs_team1='./assets/images/team1.jpg' ;
    this.imgs_team2='./assets/images/team2.jpg' ;
    this.imgs_team3='./assets/images/team3.jpg' ;
  }

  ngOnInit() {
  }

}
