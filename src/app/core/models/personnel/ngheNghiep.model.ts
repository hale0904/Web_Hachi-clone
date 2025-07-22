export class NgheNghiep {
  idNV: string;
  trinhDoHocVan: TrinhDoHocVan;
  hocHam: HocHam;
  hocVi: HocVi;
  linhVucChuyenGia: string;
  ngheNghiep: string;

  constructor(
    idNV: string,
    trinhDoHocVan: TrinhDoHocVan,
    hocHam: HocHam,
    hocVi: HocVi,
    linhVucChuyenGia: string,
    ngheNghiep: string
  ) {
    this.idNV = idNV;
    this.trinhDoHocVan = trinhDoHocVan;
    this.hocHam = hocHam;
    this.hocVi = hocVi;
    this.linhVucChuyenGia = linhVucChuyenGia;
    this.ngheNghiep = ngheNghiep;
  }
}

export class TrinhDoHocVan {
  maHocVan: string;
  tenHocVan: string;

  constructor(maHocVan: string, tenHocVan: string) {
    this.maHocVan = maHocVan;
    this.tenHocVan = tenHocVan;
  }
}

export class HocHam {
  maHocHam: string;
  tenHocHam: string;

  constructor(maHocHam: string, tenHocHam: string) {
    this.maHocHam = maHocHam;
    this.tenHocHam = tenHocHam;
  }
}

export class HocVi {
  maHocVi: string;
  tenHocVi: string;

  constructor(maHocVi: string, tenHocVi: string) {
    this.maHocVi = maHocVi;
    this.tenHocVi = tenHocVi;
  }
}