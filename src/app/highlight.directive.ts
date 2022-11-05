import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') myBackgroundColor:string | undefined;

  constructor() {}

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnterEvent(eventData:Event) {
    this.myBackgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseLeaveEvent(eventData:Event) {
    this.myBackgroundColor = 'transparent';
  }
}
