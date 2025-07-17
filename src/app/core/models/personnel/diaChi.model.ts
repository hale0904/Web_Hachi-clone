export class DiaChiCuTru {
  diaChi: string;
  quocGia: QuocGia;
  tinhThanh: TinhThanh;
  quanHuyen: QuanHuyen;

  constructor(
    diaChi: string,
    quocGia: QuocGia,
    tinhThanh: TinhThanh,
    quanHuyen: QuanHuyen
  ) {
    this.diaChi = diaChi;
    this.quocGia = quocGia;
    this.tinhThanh = tinhThanh;
    this.quanHuyen = quanHuyen;
  }
}

export class QuanHuyen {
  maQuanHuyen: string;
  tenQuanHuyen: string;

  constructor(ma: string, ten: string) {
    this.maQuanHuyen = ma;
    this.tenQuanHuyen = ten;
  }
}

export class TinhThanh {
  maTinh: string;
  tenTinh: string;
  quanHuyens: QuanHuyen[] = [];

  constructor(ma: string, ten: string, quanHuyens: QuanHuyen[] = []) {
    this.maTinh = ma;
    this.tenTinh = ten;
    this.quanHuyens = quanHuyens;
  }
}

export class QuocGia {
  maQG: string;
  tenQG: string;
  tinhThanhs: TinhThanh[] = [];

  constructor(ma: string, ten: string, tinhThanhs: TinhThanh[] = []) {
    this.maQG = ma;
    this.tenQG = ten;
    this.tinhThanhs = tinhThanhs;
  }
}

