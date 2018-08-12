# AngularAnimationDemo

This project explains how to use animations in angular.

### Application ###

Here I just created a simple application which has main menus. By clicking the menu item it will be redirecting to the respective page with routing animations like slidingToTop, slidingToBottom, slidingToLeft and slidingToRight.

I used ***router.animations.ts*** file for the routing animations.

```
import { trigger, state, animate, style, transition } from '@angular/animations';
export function routerTransition() {
  return slideToLeft();
}

export function slideToRight() {
  return trigger('routerTransition', [
    state('void', style({position: 'fixed', width: '40%'}) ),
    state('*', style({position: 'fixed', width: '0%'}) ),
    transition(':enter', [
      style({transform: 'translateX(-40%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(40%)'}))
    ])
  ]);
}

export function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position: 'fixed', width: '70%'}) ),
    state('*', style({position: 'fixed', width: '70%'}) ),
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
    ])
  ]);
}

export function slideToBottom() {
  return trigger('routerTransition', [
    state('void', style({position: 'fixed', width: '100%', height: '100%'}) ),
    state('*', style({position: 'fixed', width: '100%', height: '100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))
    ])
  ]);
}

export function slideToTop() {
  return trigger('routerTransition', [
    state('void', style({position: 'fixed', width: '100%', height: '100%'}) ),
    state('*', style({position: 'fixed', width: '100%', height: '100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
    ])
  ]);
}

```

Need to call routing animation file in the component which you want to do animation effect like this.

For example lets take 

***blog.component.ts***

```
import { slideToBottom } from '../shared/router.animations';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [slideToBottom()]
})

```

***blog.component.html***

* Need to include [@routerTransition] like below

```
<div  [@routerTransition]>
  <img src="assets/images/blog.png"  width="100%"/>
</div>

```

### Happy Coding ###
