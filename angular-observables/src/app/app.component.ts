import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {  // Components implementing the AfterViewInit interface must declare ngAfterViewInit() method instead of ngOnInit()

  @ViewChild('button') button!: ElementRef<HTMLButtonElement>;

  interval$ = interval(1000)
    .pipe(
      map(count => count * 6),
      tap(degrees => console.log('Observable generates interval value: ', degrees)),
      filter(degrees => degrees % 10 === 0)
    );
  // The Observable is not subscribed here directly, it is subscribed using the async pipe in the components view instead! Benefit: Angular takes care of the "leaking", closing the Observable automatically once the View get closed / switched

  values: (string | number)[] = [];

  ngAfterViewInit(): void {
    /* ngAfterViewInit is an analog of the ngOnInit() method of standard components for components implementing the AfterViewInit interface. The logic in this method is executed AFTER the View was generated.  */
    fromEvent(this.button.nativeElement, 'click')
      .subscribe(
        event => this.values.push("Added a click notion!")
      );
  };

}
