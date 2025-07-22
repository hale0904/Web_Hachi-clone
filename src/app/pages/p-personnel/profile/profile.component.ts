import { Component, OnInit } from '@angular/core';
import { QuanHuyen, QuocGia, TinhThanh } from 'src/app/core/models/personnel/diaChi.model';
import { HocHam, HocVi, TrinhDoHocVan } from 'src/app/core/models/personnel/ngheNghiep.model';
import { danToc, GioiTinh, NhanVien, tinhTrangHonNhan, tonGiao } from 'src/app/core/models/personnel/nhanVien.model';
import { DS_DAN_TOC, DS_GT, DS_HH, DS_HocVi, DS_QuocGia, DS_TDHV, DS_TON_GIAO, DS_TTHN } from 'src/app/core/services/personnel/data/personnel.data';
import { MockNhanVienService } from 'src/app/core/services/personnel/fetchAPI/personnel.service';

@Component({
  selector: 'app-home',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  nhanVien!: NhanVien;

  ds_danTocs: danToc[] = [];
  ds_tonGiaos: tonGiao[] = [];
  ds_tinhTrangHonNhan: tinhTrangHonNhan[] = [];
  ds_gioiTinh: GioiTinh[] = [];
  ds_trinhDoHocVan: TrinhDoHocVan[] = [];
  ds_hocham: HocHam[] = [];
  ds_hocVi: HocVi[] = [];

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

        this.cuTru_QuocGias = DS_QuocGia;
        this.cuTru_TinhThanhs = nv.diaChiCuTru.quocGia?.tinhThanhs ?? [];
        this.cuTru_QuanHuyens = nv.diaChiCuTru.tinhThanh?.quanHuyens ?? [];

        this.tamTru_QuocGias = DS_QuocGia;
        this.tamTru_TinhThanhs = nv.diaChiTamTru.quocGia?.tinhThanhs ?? [];
        this.tamTru_QuanHuyens = nv.diaChiTamTru.tinhThanh?.quanHuyens ?? [];

       this.ds_danTocs = DS_DAN_TOC;
       this.ds_tonGiaos = DS_TON_GIAO;
       this.ds_tinhTrangHonNhan = DS_TTHN;
       this.ds_gioiTinh = DS_GT;
       this.ds_trinhDoHocVan = DS_TDHV;
       this.ds_hocham = DS_HH;
       this.ds_hocVi = DS_HocVi;
      }
    });
  }

  // Dân tộc
  onChangeDanToc(danToc: danToc) {
    this.nhanVien.danToc = danToc;
  }

   // Giới tính
  onChangeGioiTinh(gioiTinh: GioiTinh) {
    this.nhanVien.gioiTinh = gioiTinh;
  }

  // Tôn giáo
  onChangeTonGiao(tonGiao: tonGiao) {
    this.nhanVien.tonGiao = tonGiao;
  }

   // Tình trạng hôn nhân
  onChangeTTHN(tinhTrangHonNhan: tinhTrangHonNhan) {
    this.nhanVien.tinhTrangHonNhan = tinhTrangHonNhan;
  }

  // Quốc tịch
  onChangeQuocTich(quocGia: QuocGia) {
    this.nhanVien.quocTich = quocGia;
  }

  // Học vị
  onChangeHocVi(hocVi: HocVi) {
    this.nhanVien.ngheNghiep.hocVi = hocVi;
  }

  // Trình độ học vắn
  onChangeTrinhDoHocVan(trinhDoHocVan: TrinhDoHocVan) {
    this.nhanVien.ngheNghiep.trinhDoHocVan = trinhDoHocVan;
  }

   // Học hàm
  onChangeHocHam(hocHam: HocHam) {
    this.nhanVien.ngheNghiep.hocHam = hocHam;
  }

  // Thường trú
  onChangeQuocGia_CT(quocGia: QuocGia) {
    this.nhanVien.diaChiCuTru.quocGia = quocGia;
    this.nhanVien.diaChiCuTru.tinhThanh = undefined!;
    this.nhanVien.diaChiCuTru.quanHuyen = undefined!;
    
    this.cuTru_TinhThanhs = quocGia?.maQG ? (quocGia.tinhThanhs ?? []) : [];
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

    this.tamTru_TinhThanhs = quocGia?.maQG ? (quocGia.tinhThanhs ?? []) : [];
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

