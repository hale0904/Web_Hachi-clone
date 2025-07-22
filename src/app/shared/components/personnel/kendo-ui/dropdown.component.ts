import {
  Component, Input, Output, EventEmitter, ViewChild, OnChanges,
  SimpleChanges
} from '@angular/core';
import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';
import { from } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-kendo-dropdown',
  template: `
    <div class="dropdown">
      <div class="dropdown__label">
        <kendo-label [for]="dropdownRef" [text]="label"></kendo-label>
      </div>
      
      <kendo-dropdownlist
        #dropdownRef
        [data] = "filteredData"
        [textField]="textField"
        [valueField]="valueField"
        [value]="model?.[property]"
        [defaultItem]="defaultItem"
        [disabled]="disabled"
        [loading]="loading"
        [filterable]="Filterable"
        (valueChange)="onValueChange($event)"
        (filterChange)="onFilterChange($event)">
      </kendo-dropdownlist>
    </div>
  `,
  styles: [`
    .dropdown__label {
      padding: 9px 0 7px;
    }
    kendo-label {
      font-size: 1.4rem;
    }
    
    kendo-dropdownlist {
      display: flex;
      width: 220px;
      padding: 2.5px;
      background-color: #fff;
      color: #000;
      font-size: 1.3rem;
    }
  `]
})
export class KendoDropdownComponent implements OnChanges {
  @Input() label!: string;
  @Input() model: any;
  @Input() property!: string;
  @Input() data: any[] = [];
  @Input() textField!: string;
  @Input() valueField!: string;
  @Input() defaultItem: any;
  @Input() disabled: boolean = false;
  @Input() filterable: boolean = true;

  @Output() valueChange = new EventEmitter<any>();
  @ViewChild('dropdownRef') dropdownRef!: DropDownListComponent;

  public Filterable: boolean = false;
  public filteredData: any[] = [];
  public loading = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['filterable']) {
      this.Filterable = this.filterable && this.data?.length > 2;
      this.filteredData = this.data.slice();
    }
  }

  onValueChange(value: any) {
    if(this.model && this.property) {
      this.model[this.property] = value;
    }
    this.valueChange.emit(value);
  }

  onFilterChange(value: string) {
    this.loading = true;

    from([this.data])
      .pipe(
        delay(300), 
        map(items => {
          const keyword = value.toLowerCase();
          return items.filter(item =>
            item[this.textField]?.toLowerCase().includes(keyword)
          );
        }),
        tap(() => this.loading = false)
      )
      .subscribe(filtered => {
        this.filteredData = filtered;
      });
  }
}
