import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
   
  name!: string;
  seconds : number = 0;

  timerSubCription!: Subscription;
  constructor() { 
    console.log('constructor');
  }
  
  ngOnInit() {
    console.log('ngOnInit');
    this.timerSubCription = interval(1000).subscribe( num => {
      this.seconds = num;
    })
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubCription.unsubscribe();
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }


  save(){
    
  }


}
