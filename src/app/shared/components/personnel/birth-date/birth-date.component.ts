import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-birth-date',
  templateUrl: './birth-date.component.html',
  styleUrls: ['./birth-date.component.scss']
})
export class BirthDateComponent {
  @Input() label!: string;
  @Input() model!: any;
  @Input() property!: string;

  years: number[] = [];
  months: number[] = Array.from({length: 12}, (_, i) => i + 1);
  days: number[] = [];

  selectedYear!: number;
  selectedMonth!: number;
  selectedDay!: number;

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();

    this.years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    const value = this.model[this.property];
    if (value instanceof Date) {
      this.selectedYear = value.getFullYear();
      this.selectedMonth = value.getMonth() + 1;
      this.selectedDay = value.getDate();
    }

    this.updateDays();
  }

  updateDays(): void {
    const daysInMonth = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
    this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // Nếu ngày hiện tại > số ngày trong tháng => reset về 1
    if (this.selectedDay > daysInMonth) {
      this.selectedDay = 1;
    }

    this.updateModel();
  }

  updateModel(): void {
    if (this.selectedYear && this.selectedMonth && this.selectedDay) {
      this.model[this.property] = new Date(this.selectedYear, this.selectedMonth - 1, this.selectedDay);
    }
  }
}
