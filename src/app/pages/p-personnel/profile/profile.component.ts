import { Component } from '@angular/core';
import { QuanHuyen, QuocGia, TinhThanh } from 'src/app/core/models/personnel/diaChi.model';
import { NhanVien } from 'src/app/core/models/personnel/nhanVien.model';
import { MockNhanVienService } from 'src/app/core/services/personnel/fetchAPI/personnel.service';

@Component({
  selector: 'app-home',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  nhanVien!: NhanVien;

  cuTru_QuocGias: QuocGia[] = [];
  cuTru_TinhThanhs: TinhThanh[] = [];
  cuTru_QuanHuyens: QuanHuyen[] = [];

  tamTru_QuocGias: QuocGia[] = [];
  tamTru_TinhThanhs: TinhThanh[] = [];
  tamTru_QuanHuyens: QuanHuyen[] = [];

  constructor(private nhanVienService: MockNhanVienService) {}

  ngOnInit() {
    this.nhanVienService.fetchById('NV001').subscribe(nv => {
      if (nv) {
        this.nhanVien = nv;

        this.cuTru_QuocGias = [nv.diaChiCuTru.quocGia];
        this.cuTru_TinhThanhs = nv.diaChiCuTru.quocGia?.tinhThanhs ?? [];
        this.cuTru_QuanHuyens = nv.diaChiCuTru.tinhThanh?.quanHuyens ?? [];

        this.tamTru_QuocGias = [nv.diaChiTamTru.quocGia];
        this.tamTru_TinhThanhs = nv.diaChiTamTru.quocGia?.tinhThanhs ?? [];
        this.tamTru_QuanHuyens = nv.diaChiTamTru.tinhThanh?.quanHuyens ?? [];
      }
    });
  }

  // Thường trú
  onChangeQuocGia_CT(quocGia: QuocGia) {
    this.nhanVien.diaChiCuTru.quocGia = quocGia;
    this.nhanVien.diaChiCuTru.tinhThanh = undefined!;
    this.nhanVien.diaChiCuTru.quanHuyen = undefined!;
    this.cuTru_TinhThanhs = quocGia.tinhThanhs;
    this.cuTru_QuanHuyens = [];
  }

  onChangeTinhThanh_CT(tinh: TinhThanh) {
    this.nhanVien.diaChiCuTru.tinhThanh = tinh;
    this.nhanVien.diaChiCuTru.quanHuyen = undefined!;
    this.cuTru_QuanHuyens = tinh.quanHuyens;
  }

  onChangeQuanHuyen_CT(qh: QuanHuyen) {
    this.nhanVien.diaChiCuTru.quanHuyen = qh;
  }

  // Tạm trú
  onChangeQuocGia_TT(quocGia: QuocGia) {
    this.nhanVien.diaChiTamTru.quocGia = quocGia;
    this.nhanVien.diaChiTamTru.tinhThanh = undefined!;
    this.nhanVien.diaChiTamTru.quanHuyen = undefined!;
    this.tamTru_TinhThanhs = quocGia.tinhThanhs;
    this.tamTru_QuanHuyens = [];
  }

  onChangeTinhThanh_TT(tinh: TinhThanh) {
    this.nhanVien.diaChiTamTru.tinhThanh = tinh;
    this.nhanVien.diaChiTamTru.quanHuyen = undefined!;
    this.tamTru_QuanHuyens = tinh.quanHuyens;
  }

  onChangeQuanHuyen_TT(qh: QuanHuyen) {
    this.nhanVien.diaChiTamTru.quanHuyen = qh;
  }
}

