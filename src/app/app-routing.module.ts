import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LienHeComponent } from './lien-he/lien-he.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { SoBaoComponent } from './so-bao/so-bao.component';
import { ThongBaoComponent } from './thong-bao/thong-bao.component';
import { NopBaiComponent } from './nop-bai/nop-bai.component';
import { DanhGiaComponent } from './danh-gia/danh-gia.component';

import { ChinhSachComponent } from './gioi-thieu/chinh-sach/chinh-sach.component';
import { NhanSuComponent } from './gioi-thieu/nhan-su/nhan-su.component';
import { NoiDungKhacComponent } from './gioi-thieu/noi-dung-khac/noi-dung-khac.component';


const routes: Routes = [
  {path: 'lienHe', component: LienHeComponent},
  {path: 'trangChu', component: TrangChuComponent},
  {path: 'gioiThieu', component: GioiThieuComponent},
  {path: 'soBao', component: SoBaoComponent},
  {path: 'thongBao', component: ThongBaoComponent},
  {path: 'nopBai', component: NopBaiComponent},
  {path: 'danhGia', component: DanhGiaComponent},
  {path: 'gioiThieu/nhanSu', component: NhanSuComponent},
  {path: 'gioiThieu/chinhSach', component: ChinhSachComponent},
  {path: 'gioiThieu/noiDungKhac', component: NoiDungKhacComponent},

]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
