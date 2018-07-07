import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Utils} from '../common/Utils'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
  ]
})
export class HeaderComponent implements OnInit {
  kemail:boolean=false;
  kten:boolean=false;
  kpassword:boolean=false;
  mpassword:boolean=false;
  bb:string="";

  public checkUser:boolean = false
  public userdadangnhap:boolean = true
  private apiUrl:string

  constructor(private http:HttpClient,private cookie:CookieService,private utils:Utils) { 
    if(cookie.get("idUser")!="")
    {
      this.userdadangnhap = false
      
    }
    this.apiUrl = utils.Url
    
  }
  
  ngOnInit() {
  }

  xylydangky(xungho:string,ten:string,ho:string,usernames:string,
  emaill:string,passwords:string,passwordc:string,quocgia:string){
    alert(xungho+ten+ho+usernames+emaill+passwords+passwordc+quocgia);
  }
  xylypassword(passwords:string){
    var cyeu = new RegExp(/(?=.{6,})/);
    var ctrungbinh =  new RegExp(/^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/);
    var cmanh =  new RegExp(/^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$/);

    if(!cyeu.test(passwords)){
      this.bb ="Mật khẩu yếu";
      this.mpassword=true;
    }
    else if(!ctrungbinh.test(passwords)){
      this.bb="Mật khẩu trung bình";
      this.mpassword=true;
    }
    else if(!cmanh.test(passwords)){
      this.bb="Mật khẩu mạnh";
      this.mpassword=true;
    }
    else{
      this.bb="Nhập mật khẩu từ 6-14 ký tự bao gồm số, chữ cái, và ký tự đặc biệt ()";
      this.mpassword=true;
    }

  }
  xylytrungpassword(password:String,passwordc:string){
  if(passwordc == password){
    this.kpassword=false;
  }
  else{
    this.kpassword=true;
  }
}

  xulyemail(emaill:string){
    var cemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!cemail.test(emaill)) { 
    this.kemail=true; 
  }
    else{ 
    this.kemail=false;
    } 
  }
  xylyten(ten:string){
    var cusername = /^[a-zA-Z\-_]{4,10}/;
    if(!cusername.test(ten)){
      this.kten=true;
    }
    else{
      this.kten=false;
    }
  }
  thoatuser(){
    this.cookie.deleteAll()
    this.userdadangnhap = true
  }
xylydangnhap(user:string,pass:string)
  {
    this.checkUser =false
    const req = this.http.post<ListBody>(this.apiUrl,{username:user,password:pass},{ observe: 'response' }).subscribe(res=>{
      if(res.status ==200)
      {
        this.cookie.set("idUser",res.body.body.idUser)
        this.cookie.set("token",res.body.body.token)
        this.cookie.set("role",res.body.body.role)
        this.cookie.set("nickname",res.body.body.nickname)
        this.userdadangnhap = false
      }
    },err=>{
      this.checkUser = true
    });
    console.log(req);
  }

}
interface ListBody{
  message:string,
  body:UserLogin
}
interface UserLogin
{
  idUser : string,
  token : string,
  role:string,
  nickname:string
}


