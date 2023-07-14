import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';
import { componentType } from '../utils/componentType';

@Component({
  selector: 'app-base',
  template:''
})
export class BaseComponent implements OnInit {
  componenType: typeof componentType = componentType;
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.currentTheme = sessionStorage.getItem('current-theme')!;
  }
  @HostBinding('class')
  currentTheme = sessionStorage.getItem('current-theme')!;

  @HostListener('window:storage')
  onStorageChange() {
    console.log('change...' + sessionStorage.getItem('current-theme')!);
    if (sessionStorage.getItem('current-theme')) {
      this.currentTheme = sessionStorage.getItem('current-theme')!;
    }
  }
}
