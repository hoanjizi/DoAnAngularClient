import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chinh-sach',
  templateUrl: './chinh-sach.component.html',
  styleUrls: ['./chinh-sach.component.css']
})
export class ChinhSachComponent implements OnInit {
imgs_nhataitro :string="";
  constructor() {
    this.imgs_nhataitro='./assets/images/nhataitro.png' ;
  }
  ngOnInit() {
  }

}
