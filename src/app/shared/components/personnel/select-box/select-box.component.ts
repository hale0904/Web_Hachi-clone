import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {
  @Input() label!: string;
  @Input() model!: any;
  @Input() property!: string;
  @Input() options: any[] = [];
  @Input() disabled: boolean = false;

  @Output() selectionChange = new EventEmitter<any>();

  searchKeyWord = '';
  filteredOptions: any[] = [];

  ngOnInit() {
    this.filteredOptions = [...this.options];
  }

  getLabel(option: any): string {
    return option?.tenQG || option?.tenTinh || option?.tenQuanHuyen || option?.toString();
  }

  onSearchChange() {
    const keyword = this.searchKeyWord.toLowerCase();
    this.filteredOptions = this.options.filter(option =>
      this.getLabel(option).toLowerCase().includes(keyword)
    );
  }

  onSelect(option: any) {
    this.model[this.property] = option;
    this.selectionChange.emit(option);
    this.searchKeyWord = this.getLabel(option); // Hiển thị tên đã chọn
    this.filteredOptions = []; // Ẩn dropdown sau chọn
  }
}
