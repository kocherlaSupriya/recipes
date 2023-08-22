import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appBetterexample]'
})
export class BetterexampleDirective implements OnInit{

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }
@Input() color:string='transparent';
@Input('appBetterexample') highLightColor:string='blue'
  @HostBinding('style.backgroundColor') backgroundColor!:string;
ngOnInit(): void {
  this.backgroundColor=this.color;
  // this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','blue')
}

@HostListener('mouseenter') mouseover(eventData:Event){
  // this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','lightgrey')
  this.backgroundColor=this.highLightColor
}

@HostListener('mouseleave') mouseleave(eventData:Event){
  // this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','transparent')
  this.backgroundColor=this.color
}



}

