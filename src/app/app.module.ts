import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {HttpClientModule} from '@angular/common/http';
import {Utils} from './common/Utils'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { LienHeComponent } from './lien-he/lien-he.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { SoBaoComponent } from './so-bao/so-bao.component';
import { ThongBaoComponent } from './thong-bao/thong-bao.component';
import { NopBaiComponent } from './nop-bai/nop-bai.component';
import { DanhGiaComponent } from './danh-gia/danh-gia.component';

import { NhanSuComponent } from './gioi-thieu/nhan-su/nhan-su.component';
import { ChinhSachComponent } from './gioi-thieu/chinh-sach/chinh-sach.component';
import { NoiDungKhacComponent } from './gioi-thieu/noi-dung-khac/noi-dung-khac.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LienHeComponent,
    TrangChuComponent,
    GioiThieuComponent,
    SoBaoComponent,
    ThongBaoComponent,
    NopBaiComponent,
    DanhGiaComponent,

    NhanSuComponent,
    ChinhSachComponent,
    NoiDungKhacComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [CookieService,Utils]
})
export class AppModule { }
