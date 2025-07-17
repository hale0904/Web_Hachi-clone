export class TTChungThuc_CCCD {
  idNV: string;
  cccd: number;
  ngayCap: Date;
  ngayHetHan: Date;
  noiCap: string;
  soHoChieu: string;

  constructor(
    idNV: string,
    cccd: number,
    ngayCap: Date,
    ngayHetHan: Date,
    noiCap: string,
    soHoChieu: string
  ) {
    this.idNV = idNV;
    this.cccd = cccd;
    this.ngayCap = ngayCap;
    this.ngayHetHan = ngayHetHan;
    this.noiCap = noiCap;
    this.soHoChieu = soHoChieu;
  }
}

export class TTChungThuc_SoHC {
  idNV: string;
  soHoChieu: string;
  ngayCap: Date;
  ngayHetHan: Date;
  noiCap: string;

  constructor(
    idNV: string,
    soHoChieu: string,
    ngayCap: Date,
    ngayHetHan: Date,
    noiCap: string
  ) {
    this.idNV = idNV;
    this.soHoChieu = soHoChieu;
    this.ngayCap = ngayCap;
    this.ngayHetHan = ngayHetHan;
    this.noiCap = noiCap;
  }
}

export class TheuTNCN {
  idNV: string;
  maSoTheuTNCN: number;
  ngayDangKy: Date;
  noiDangKy: string;

  constructor (idNV: string, maSoThueTNCN: number, ngayDangKy: Date, noiDangKy: string){
    this.idNV = idNV;
    this.maSoTheuTNCN = maSoThueTNCN;
    this.ngayDangKy = ngayDangKy;
    this.noiDangKy = noiDangKy;
  }
}
