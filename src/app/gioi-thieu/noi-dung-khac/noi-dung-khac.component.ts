import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noi-dung-khac',
  templateUrl: './noi-dung-khac.component.html',
  styleUrls: ['./noi-dung-khac.component.css']
})
export class NoiDungKhacComponent implements OnInit {
imgs_b11:string="";
imgs_b22 :string="";
imgs_modal :string="";
  constructor() { 
    this.imgs_b11='./assets/images/b11.jpg';
    this.imgs_b22='./assets/images/b22.jpg';
    this.imgs_modal='./assets/images/3.jpg';
  }

  ngOnInit() {
  }

}
