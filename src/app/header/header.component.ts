import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  public set title(t: string){
    this.OwnTitle = t;
  }

  public OwnTitle!: string;

  @Input()
  public drawerFromHeader!: MatDrawer;

  constructor() {
  }

  ngOnInit(): void {
  }

  public setFavorite($event: MouseEvent): void {
    console.log('click Favorite', $event.target);
  }

  setShare($event: MouseEvent): void {
    console.log('click Share', $event.target);
  }

  public toggleSideNavFromHeader(): void {
  //  console.log('Header Drawer', this.drawerFromHeader);
    this.drawerFromHeader?.toggle().then(r => {
      console.log(r);
    });
  }
}
