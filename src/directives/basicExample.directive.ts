import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector:'[BasicExample]'
})
export class BasicExampleDirective implements OnInit{
    constructor(private elementRef:ElementRef){}


    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor='pink'
    }


}