import {
  ChangeDetectorRef,
  Directive,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: 'app-base-directive',
})
export class BaseDirective implements OnInit {
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
