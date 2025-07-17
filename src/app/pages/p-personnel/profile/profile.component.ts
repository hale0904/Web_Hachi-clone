import { Component } from '@angular/core';
import { NgheNghiep } from 'src/app/core/models/personnel/ngheNghiep.model';
import { NhanVien } from 'src/app/core/models/personnel/nhanVien.model';
import { TheuTNCN, TTChungThuc_CCCD, TTChungThuc_SoHC } from 'src/app/core/models/personnel/thongTinChungThuc.model';
import { ThongTinLienHe } from 'src/app/core/models/personnel/thongTinLienHe.model';

@Component({
  selector: 'app-home',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  nhanVien: NhanVien = new NhanVien(
  'NV001',
  'Nguyen',
  'Van',
  'An',
  'N.V.A',
  'Nam',
  'Việt Nam',
  'Kinh',
  'Không',
  'Độc thân',
  'TP Hồ Chí Minh',
  new Date('2000-01-01'),
  'TP Hồ Chí Minh'
  );

  constructor (){
    this.mockData();
  }

  mockData() {
    this.nhanVien.thongTinChungThuc_CCCD = new TTChungThuc_CCCD (
      'NV001',
      123456789012,
      new Date('2020-01-01'),
      new Date('2030-01-01'),
      'Cục Cảnh sát QLHC',
      'B1234567'
    )

    this.nhanVien.thongTinChungThuc_SoHC = new TTChungThuc_SoHC(
      'NV001',
      'B1234567',
      new Date('2020-06-15'),
      new Date('2030-06-15'),
      'Cục Quản lý Xuất nhập cảnh'
    );

    this.nhanVien.theuTNCN = new TheuTNCN(
      'NV001',
      2222222,
      new Date('2020-06-15'),
      'Cục quản lý'
    )

    this.nhanVien.ngheNghiep = new NgheNghiep(
      'NV001',
      'Đại học',
      'Không',
      'Cử nhân',
      'Công nghệ thông tin',
      'Lập trình viên'
    );

    this.nhanVien.thongTinLienHe = new ThongTinLienHe(
      'NV001',
      999555444,
      999888555,
      'admin@gmai.com',
      'Nguyễn Văn A',
      666688877,
      'Chồng',
      'nguyen@linki',
      'nguyen@linke',
      'nguuyen@linkd'
    )
  }

}
