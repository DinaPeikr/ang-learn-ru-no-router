import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

interface IUser {
  name: string;
  surName: string;
}

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})


export class ExampleComponent implements OnInit {
  private money = 3000;
  public user: IUser = {
    name: 'Diana',
    surName: 'Peikr'
  };
  public contentHead = this.domSanitizer.bypassSecurityTrustHtml('<h2 style="color:red">Angular</h2>');
  public imgSrc = 'https://uploads.toptal.io/blog/image/125413/toptal-blog-image-1518523133236-d2bc894552c77f954f1e5ce48da6604d.png';
  public contentDiv = '<div class="text-warning">some text</div>';

  @Input()
  public title!: string;

  public inputValueText = '';
  public inputValueTextRef = '';

  constructor(private readonly domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  public getFullName({name, surName}: IUser): string {
    return `${name} ${surName}`;
  }

  public getSalary(add: number): number {
    return this.money * add;
  }

  clickOnImg(_el: HTMLDivElement, e: Event): void {
    const target = e.target as HTMLImageElement;
    console.log('click', target.src);
    console.log('el', _el);
  }

  public onSearch(e: Event): void {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
    this.inputValueText = target.value;
  }

  public onSearchRef(value: string): void {
    console.log(value);
    this.inputValueTextRef = value;
  }
}
