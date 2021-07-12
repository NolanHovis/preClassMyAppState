import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('animationState', [
      state('initial', style({
        backgroundColor: 'purple',
        opacity: '1'
      })),
      state('horizontal', style({
        backgroundColor: 'purple',
        transform: 'translateX(500px) scale(1)'
      })),
      state('size', style({
        backgroundColor: 'purple',
        transform: 'translateX(0) scale(0.5)'
      })),
      state('opacity', style({
        backgroundColor: 'purple',
        transform: 'translateX(0) scale(1)',
        opacity: '0'
      })),
      state('round', style({
        backgroundColor: 'purple',
        borderRadius: '50%'
      })),
      state('color', style({
        backgroundColor: 'orange'
      })),
      transition('initial <=> *', animate(1000))
    ]),
    trigger('keyframesEx', [
      state('example', style({
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          backgroundColor: 'green',
          transform: 'translateX(0)'
        }),
        animate(1000, keyframes([
          style({
            transform: 'translateX(100px)'
          }),
          style({
            transform: 'translateX(200px)'
          }),
          style({
            transform: 'translateX(300px)'
          }),
          style({
            transform: 'translateX(700px)'
          }),
        ]))
      ])
    ])
  ]
})
export class AnimateComponent {

  state = 'initial';


  move() {
    this.state == 'initial' ? this.state = 'horizontal' : this.state = 'initial'
    /* this.state = 'horizontal' */
  }

  size() {
    this.state == 'initial' ? this.state = 'size' : this.state = 'initial'
  }

  opacity() {
    this.state == 'initial' ? this.state = 'opacity' : this.state = 'initial'
  }

  round() {
    this.state == 'initial' ? this.state = 'round' : this.state = 'initial'
  }

  color() {
    this.state == 'initial' ? this.state = 'color' : this.state = 'initial'
  }

}
