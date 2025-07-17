export class NgheNghiep {
  idNV: string;
  trinhDoHocVan: string;
  hocHam: string;
  hocVi: string;
  linhVucChuyenGia: string;
  ngheNghiep: string;

  constructor(
    idNV: string,
    trinhDoHocVan: string,
    hocHam: string,
    hocVi: string,
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
