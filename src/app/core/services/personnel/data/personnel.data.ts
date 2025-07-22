import { danToc, GioiTinh, NhanVien, tinhTrangHonNhan, tonGiao } from "src/app/core/models/personnel/nhanVien.model";
import { DiaChiCuTru, QuocGia, TinhThanh, QuanHuyen, DiaChiTamTru } from "src/app/core/models/personnel/diaChi.model";
import { HocHam, HocVi, NgheNghiep, TrinhDoHocVan } from "src/app/core/models/personnel/ngheNghiep.model";
import { TheuTNCN, TTChungThuc_CCCD, TTChungThuc_SoHC } from "src/app/core/models/personnel/thongTinChungThuc.model";
import { ThongTinLienHe } from "src/app/core/models/personnel/thongTinLienHe.model";


// Quận/Huyện
const quan1 = new QuanHuyen('Q1', 'Quận 1');
const quan2 = new QuanHuyen('Q2', 'Quận 2');
const baDinh = new QuanHuyen('BD', 'Ba Đình');
const cauGiay = new QuanHuyen('CG', 'Cầu Giấy');
const dongDa = new QuanHuyen('DD', 'Đống Đa');
const cauCong = new QuanHuyen('CC', 'Cầu Cống');
const brooklyn = new QuanHuyen('BK', 'Brooklyn');
const manhattan = new QuanHuyen('MH', 'Manhattan');

// Giới tính
const nam = new GioiTinh('GT01', 'Nam');

// Dan tộc
const kinh = new danToc('DT001', 'Kinh');

// Tôn giáo
const thienChua = new tonGiao('TG001', 'Thiên chúa')

// TTHN
const daKetHon = new tinhTrangHonNhan('TTHN01', 'Đã kết hôn')

// TDHV
const daiHoc = new TrinhDoHocVan('HV01', 'Đại học')

// Học hàm
const tuTai = new HocHam('HH01', 'Tú tài')

// Học vị
const phoGiaoSu = new HocVi('HV02', 'Phó giáo sư')

// Tỉnh/Thành
const haNoi = new TinhThanh('HN', 'Hà Nội', [baDinh, cauGiay, dongDa, cauCong]);
const newYork = new TinhThanh('NY', 'New York', [brooklyn, manhattan]);
const tphcm = new TinhThanh('TPHCM', 'TP Hồ Chí Minh', [quan1, quan2]);

// Quốc gia
const vietNam = new QuocGia('QG01', 'Việt Nam', [tphcm, haNoi]);


export const NHANVIENS: NhanVien[] = [
  (() => {
    const nv = new NhanVien(
      'NV001',
      'Nguyễn',
      'Văn',
      'An',
      'NVA',
      nam,
      vietNam,
      kinh,
      thienChua,
      daKetHon,
      'Hà Nội',
      new Date('1990-01-01'),
      'Hà Nội'
    );

    nv.diaChiCuTru = new DiaChiCuTru('NV001', '123 Đường ABC', vietNam, tphcm, quan1);
    nv.diaChiTamTru = new DiaChiTamTru('NV001', '123 Đường ABC', vietNam, haNoi, cauGiay);
    nv.ngheNghiep = new NgheNghiep('NV001', daiHoc , tuTai, phoGiaoSu, 'Công nghệ thông tin', 'Lập trình viên');
    nv.thongTinChungThuc_CCCD = new TTChungThuc_CCCD('NV001', 123456789, new Date('2020-01-01'), new Date('2030-01-01'), 'Cục Cảnh sát QLHC');
    nv.thongTinChungThuc_SoHC = new TTChungThuc_SoHC('NV001', 'B12345678', new Date('2020-01-01'), new Date('2030-01-01'), 'Hà Nội');
    nv.theuTNCN = new TheuTNCN('NV001', 1234567890, new Date('2021-01-01'), 'Chi cục thuế Quận 1');
    nv.thongTinLienHe = new ThongTinLienHe('NV001', 912345678, 934567890, 'nguyenvanan@gmail.com', 'Nguyễn Thị B', 987654321, 'Mẹ', 'facebook.com/nva', 'linkedin.com/in/nva', 'zalo.me/nva');
    return nv;
  })()
];

export const DS_DAN_TOC: danToc[] = [
  new danToc('DT001', 'Kinh'),
  new danToc('DT002', 'Tày'),
  new danToc('DT003', 'H Mông'),
];

export const DS_TON_GIAO: tonGiao[] = [
  new tonGiao('TG001', 'Thiên chúa'),
  new tonGiao('TG002', 'Phật giáo'),
  new tonGiao('TG003', 'Không'),
];

export const DS_TTHN: tinhTrangHonNhan[] = [
  new tinhTrangHonNhan('TTHN01', 'Đã kết hôn'),
  new tinhTrangHonNhan('TTHN', 'Chưa kết hôn'),
];

export const DS_QuocGia: QuocGia[] = [
  new QuocGia('QG01', 'Việt nam'),
  new QuocGia('QG02', 'Mỹ'),
  new QuocGia('QG03', 'Lào'),
  new QuocGia('QG04', 'Trung quốc'),
];

export const DS_TDHV: TrinhDoHocVan[] = [
  new TrinhDoHocVan('HV01', 'Đại học'),
  new TrinhDoHocVan('HV02', 'Cao đẳng'),
  new TrinhDoHocVan('HV03', 'Trung cấp')
]

export const DS_GT: GioiTinh[] = [
  new GioiTinh('GT01', 'Nam'),
  new GioiTinh('GT02', 'Nữ')
]

export const DS_HH: HocHam[] = [
  new HocHam('HH01', 'Tú tài'),
  new HocHam('HH02', 'Cử nhân'),
]

export const DS_HocVi: HocVi[] = [
  new HocVi('HV01', 'Không'),
  new HocVi('HV02', 'Phó giáo sư'),
]