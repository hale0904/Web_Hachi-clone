export class ThongTinLienHe {
    idNV: string;
    dTDD1: number;
    dTDD2: number;
    email: string;
    nguoiLienHeKhanCap: string;
    soDTLienHeKhanCap: number;
    moiQuanHe: string;
    mangXH1: string;
    mangXH2: string;
    taiKhoanChat: string;

    constructor(
        idNV: string,
        dTDD1: number,
        dTDD2: number,
        email: string,
        nguoiLienHeKhanCap: string,
        soDTLienHeKhanCap: number,
        moiQuanHe: string,
        mangXH1: string,
        mangXH2: string,
        taiKhoanChat: string
    ) {
        this.idNV = idNV;
        this.dTDD1 = dTDD1;
        this.dTDD2 = dTDD2;
        this.email = email;
        this.nguoiLienHeKhanCap = nguoiLienHeKhanCap;
        this.soDTLienHeKhanCap = soDTLienHeKhanCap;
        this.moiQuanHe = moiQuanHe;
        this.mangXH1 = mangXH1;
        this.mangXH2 = mangXH2;
        this.taiKhoanChat = taiKhoanChat;
    }
}
