import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: 'img[rotate]',
})
export class RotateDirective implements OnInit {
  private rotationDegree = 0;

  @Input('rotate')
  initialRotation: string;

  @Input()
  step: string = '10';

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const initialRotation = this.initialRotation ?? this.step;
    this.addRotation(+initialRotation);
  }

  @HostListener('click', ['$event.shiftKey'])
  elementClickHandler(shiftKeyPressed: boolean) {
    if (shiftKeyPressed) {
      this.backRotationStep();
    } else {
      this.nextRotationStep();
    }
  }

  private nextRotationStep = () => {
    this.addRotation(+this.step);
  };

  private backRotationStep = () => {
    this.addRotation(-this.step);
  };

  private addRotation(step: number) {
    this.rotationDegree += step;
    this.setRotation(this.rotationDegree);
  }

  private setRotation(step: number) {
    this.element.nativeElement.style.transform = `rotate(${step ?? '10'}deg)`;
  }
}
