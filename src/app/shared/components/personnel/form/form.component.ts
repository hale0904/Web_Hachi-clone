import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nhan-vien-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  gioiTinhOptions = ['Nam', 'Nữ', 'Khác'];
  quocTichOptions = ['Việt Nam', 'Trung Quốc', 'Lào', 'Mỹ', 'Anh'];
  danTocOptinos = ['Kinh', 'Mường', 'Thái', 'Dao'];
  tonGiaoOptions = ['Không', 'Thiên chúa giáo', 'Phật giáo'];
  tinhTrangHonNhanOptions = ['Đã kết hôn', 'Độc thân'];

  constructor (private fb: FormBuilder) {}
  
  ngOnInit() {
    this.form = this.fb.group({
      ho: ['', Validators.required],
      tenDem: ['', Validators.required],
      ten: ['', Validators.required],
      tenVietTat: ['', Validators.required],
      gioiTinh: ['', Validators.required],
      quocTich: ['', Validators.required],
      danToc: ['', Validators.required],
      tonGiao: ['', Validators.required]
    })
  }

  onSubmit() {
    if(this.form.valid) {
      console.log(this.form.valid)
    } else {
      this.form.markAllAsTouched();
    }
  }
}
