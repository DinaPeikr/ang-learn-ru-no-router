import {Component, ContentChild, EventEmitter, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Output()
  public setDrawerControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild('drawer', {read: MatDrawer, static: true})
  public drawerFromSideNav!: MatDrawer;

  @ViewChild('contentBlock', {read: ViewContainerRef, static: true})
  public contentBlockRef!: ViewContainerRef;

  @ContentChild('contentTemplate', {static: true})
  public contentTmpl!: TemplateRef<any>;

  @ViewChild('contentMenu', {read: ViewContainerRef, static: true})
  public contentMenuRef!: ViewContainerRef;

  @ContentChild('contentMenuTemplate', {static: true})
  public contentMenuTmpl!: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
    this.setDrawerControl.emit(this.drawerFromSideNav);
  //  console.log('contentEl', this.contentEl);
  //  console.log('contentBlockRef', this.contentBlockRef);
    this.contentBlockRef.createEmbeddedView(this.contentTmpl);
    this.contentMenuRef.createEmbeddedView(this.contentMenuTmpl);
  }

  public toggleSideNavFromItSelf(): void {
    console.log('sideMenu', this.drawerFromSideNav);
    this.drawerFromSideNav.toggle().then((r: any) => {
      console.log(r);
    });
  }

}
