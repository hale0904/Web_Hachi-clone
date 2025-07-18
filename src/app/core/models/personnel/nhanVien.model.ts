import { DiaChiCuTru, DiaChiTamTru } from "./diaChi.model";
import { NgheNghiep } from "./ngheNghiep.model";
import { TheuTNCN, TTChungThuc_CCCD, TTChungThuc_SoHC } from "./thongTinChungThuc.model";
import { ThongTinLienHe } from "./thongTinLienHe.model";

export class NhanVien {
  idNV: string;
  ho: string;
  tenDem: string;
  ten: string;
  tenVietTat: string;
  gioiTinh: string;
  quocTich: string;
  danToc: string;
  tonGiao: string;
  tinhTrangHonNhan: string;
  nguyenQuan: string;
  ngaySinh: Date;
  noiSinh: string;

  constructor(
    idNV: string,
    ho: string,
    tenDem: string,
    ten: string, 
    tenVietTat: string,
    gioiTinh: string,
    quocTich: string,
    danToc: string,
    tonGiao: string,
    tinhTrangHonNhan: string,
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

