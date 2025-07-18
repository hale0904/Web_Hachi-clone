import { NhanVien } from "src/app/core/models/personnel/nhanVien.model";
import { DiaChiCuTru, QuocGia, TinhThanh, QuanHuyen, DiaChiTamTru } from "src/app/core/models/personnel/diaChi.model";
import { NgheNghiep } from "src/app/core/models/personnel/ngheNghiep.model";
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

// Tỉnh/Thành
const haNoi = new TinhThanh('HN', 'Hà Nội', [baDinh, cauGiay, dongDa, cauCong]);
const newYork = new TinhThanh('NY', 'New York', [brooklyn, manhattan]);
const tphcm = new TinhThanh('TPHCM', 'TP Hồ Chí Minh', [quan1, quan2]);

// Quốc gia
const vietNam = new QuocGia('VN', 'Việt Nam', [tphcm, haNoi]);
const usa = new QuocGia('US', 'Mỹ', [newYork]);


export const NHANVIENS: NhanVien[] = [
  (() => {
    const nv = new NhanVien(
      'NV001',
      'Nguyễn',
      'Văn',
      'An',
      'NVA',
      'Nam',
      'Việt Nam',
      'Kinh',
      'Không',
      'Độc thân',
      'Hà Nội',
      new Date('1990-01-01'),
      'Hà Nội'
    );

    nv.diaChiCuTru = new DiaChiCuTru('NV001', '123 Đường ABC', vietNam, tphcm, quan1);
    nv.diaChiTamTru = new DiaChiTamTru('NV001', '1 Đường C', vietNam, haNoi, cauGiay);
    nv.ngheNghiep = new NgheNghiep('NV001', 'Đại học', 'Không', 'Thạc sĩ', 'Công nghệ thông tin', 'Lập trình viên');
    nv.thongTinChungThuc_CCCD = new TTChungThuc_CCCD('NV001', 123456789, new Date('2020-01-01'), new Date('2030-01-01'), 'Cục Cảnh sát QLHC', 'B12345678');
    nv.thongTinChungThuc_SoHC = new TTChungThuc_SoHC('NV001', 'B12345678', new Date('2020-01-01'), new Date('2030-01-01'), 'Hà Nội');
    nv.theuTNCN = new TheuTNCN('NV001', 1234567890, new Date('2021-01-01'), 'Chi cục thuế Quận 1');
    nv.thongTinLienHe = new ThongTinLienHe('NV001', 912345678, 934567890, 'nguyenvanan@gmail.com', 'Nguyễn Thị B', 987654321, 'Mẹ', 'facebook.com/nva', 'linkedin.com/in/nva', 'zalo.me/nva');
    return nv;
  })()
];
