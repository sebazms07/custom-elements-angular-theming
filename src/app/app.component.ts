import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-custom-elements';


  ngOnInit(): void {
    if(!sessionStorage.getItem('current-theme')){
      sessionStorage.setItem('current-theme', 'theme-dark');
    }
  } 
}
