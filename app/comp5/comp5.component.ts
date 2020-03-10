import {
  Component,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-comp5',
  template: `
    <h1>Component 5</h1>
    <p #myTemplateParagraph>Template Paragraph</p>
    Access from Template: {{myTemplateParagraph?.textContent}}
    <ng-content></ng-content>
    <hr>
    <button (click)="getParagraphsData()">Get Paragraphs Data</button>
    {{paragraphsData}}
  `,
  styles: []
})
export class Comp5Component {
  public paragraphsData = '';

  @ViewChild('myTemplateParagraph', { static: true }) myTemplateParagraphObj;
  @ContentChild('myParentParagraph', { static: true }) myParentParagraphObj;

  getParagraphsData() {
    this.paragraphsData = this.myTemplateParagraphObj.nativeElement.textContent + ' - ' + this.myParentParagraphObj.nativeElement.textContent;
  }
  //  ngAfterViewChecked() {
  //     console.log(this.myTemplateParagraphObj);
  //     console.log(this.myParentParagraphObj);
  // }

}
