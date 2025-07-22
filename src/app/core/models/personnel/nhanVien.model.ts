import { DiaChiCuTru, DiaChiTamTru, QuocGia } from "./diaChi.model";
import { NgheNghiep } from "./ngheNghiep.model";
import { TheuTNCN, TTChungThuc_CCCD, TTChungThuc_SoHC } from "./thongTinChungThuc.model";
import { ThongTinLienHe } from "./thongTinLienHe.model";

export class NhanVien {
  idNV: string;
  ho: string;
  tenDem: string;
  ten: string;
  tenVietTat: string;
  gioiTinh: GioiTinh;
  quocTich: QuocGia;
  danToc: danToc;
  tonGiao: tonGiao;
  tinhTrangHonNhan: tinhTrangHonNhan;
  nguyenQuan: string;
  ngaySinh: Date;
  noiSinh: string;

  constructor(
    idNV: string,
    ho: string,
    tenDem: string,
    ten: string, 
    tenVietTat: string,
    gioiTinh: GioiTinh,
    quocTich: QuocGia,
    danToc: danToc,
    tonGiao: tonGiao,
    tinhTrangHonNhan: tinhTrangHonNhan,
    nguyenQuan: string,
    ngaySinh: Date,
    noiSinh: string
  ) {
    this.idNV = idNV;
    this.ho = ho;
    this.tenDem = tenDem;
    this.ten = ten;
    this.tenVietTat = tenVietTat;
    this.gioiTinh = gioiTinh;
    this.quocTich = quocTich;
    this.danToc = danToc;
    this.tonGiao = tonGiao;
    this.tinhTrangHonNhan = tinhTrangHonNhan;
    this.nguyenQuan = nguyenQuan;
    this.ngaySinh = ngaySinh;
    this.noiSinh = noiSinh;
  }

  // Quan hệ 1-1
  diaChiCuTru!: DiaChiCuTru;
  diaChiTamTru!: DiaChiTamTru;
  thongTinChungThuc_CCCD!: TTChungThuc_CCCD;
  thongTinChungThuc_SoHC!: TTChungThuc_SoHC;
  theuTNCN!: TheuTNCN;
  ngheNghiep!: NgheNghiep;
  thongTinLienHe!: ThongTinLienHe;
}

export class danToc {
  maDanToc: string;
  tenDanToc: string;

  constructor (maDanToc: string, tenDanToc: string) {
    this.maDanToc = maDanToc;
    this.tenDanToc = tenDanToc;
  }
}

export class tonGiao {
  maTonGiao: string;
  tenTonGiao: string;

  constructor (maTG: string, tenTG: string) {
    this.maTonGiao = maTG;
    this.tenTonGiao = tenTG;
  }
}

export class tinhTrangHonNhan {
  maTTHN: string;
  tenTTHN: string;

  constructor(maTTHN: string, tenTTHN: string) {
    this.maTTHN = maTTHN;
    this.tenTTHN = tenTTHN;
  }
}

export class GioiTinh {
  maGT: string;
  tenGT: string;

  constructor(maGT: string, tenGT: string) {
    this.maGT = maGT;
    this.tenGT = tenGT;
  }
}

