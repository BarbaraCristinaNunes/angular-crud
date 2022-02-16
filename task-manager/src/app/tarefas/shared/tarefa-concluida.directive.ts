import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  constructor(private el: ElementRef) { }

  @Input() tarefaConcluida: boolean;

  ngOnInit()
  {
    if(this.tarefaConcluida){
      this.el.nativeElement.style.textDecoration = "line-through"
    }
  }

}
