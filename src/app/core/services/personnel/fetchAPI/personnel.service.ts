import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NhanVien } from 'src/app/core/models/personnel/nhanVien.model';
import { NHANVIENS } from '../data/personnel.data';

@Injectable({
  providedIn: 'root',
})
export class MockNhanVienService {
    
  constructor() {}

  // Fetch toàn bộ danh sách
  fetchAll(): Observable<NhanVien[]> {
    return of (NHANVIENS);
  }

  // Fetch theo ID
  fetchById(id: string): Observable<NhanVien | undefined> {
    const nhanVien = NHANVIENS.find(nv => nv.idNV = id);
    return of(nhanVien);
  }
}
