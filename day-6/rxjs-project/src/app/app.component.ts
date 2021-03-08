import { Component } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs'
import { ajax } from 'rxjs/ajax';
import { map, catchError, retry, tap, shareReplay, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-project';
  source: any;
  sub3: any;

  constructor() {

  }

  callOfFunction() {
    let sum = 0;

    of(1, 2, 3).subscribe(
      value => {
        console.log('Adding: ' + value);
        sum = sum + value;
      },
      err => console.error(err),
      () => console.log('Sum equals: ' + sum)
    );
  }

  callPipeFunction() {
    const squareOdd = of(1, 2, 3, 4, 5)
      .pipe(
        filter(n => n % 2 !== 0),
        map(n => n * n)
      );

    // Subscribe to get values
    squareOdd.subscribe(x => console.log(x));
  }

  callShareReplayFunction() {
    this.source = interval(1000).pipe(
      shareReplay({ refCount: true, bufferSize: 2 })
      //or just shareReplay(2)
    );
    const sub1 = this.source.subscribe(x => console.log('sub 1', x));
    const sub2 = this.source.subscribe(x => console.log('sub 2', x));

    setTimeout(() => {
      sub1.unsubscribe();
      sub2.unsubscribe();
    }, 2000);
    setTimeout(() => {
      this.sub3 = this.source.subscribe(x => console.log('sub 3', x));
    }, 4000);
    setTimeout(() => {
      this.sub3.unsubscribe();

    }, 7000);
  }

  callTapFunction() {
    const clicks = fromEvent(document, 'click');
    const positions = clicks.pipe(
      tap(ev => console.log(ev)),
      map(ev => ev['clientX']),
    );
    const sub = positions.subscribe(x => console.log(x));

    setTimeout(() => sub.unsubscribe(), 1000);
  }

  callErrorFunction() {
    // Return "response" from the API. If an error happens,
    // return an empty array.
    const apiData = ajax('/api/data').pipe(
      map((res: any) => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res.response;
      }),
      retry(1), // Retry one more time before failing
      catchError(async (err) => console.error('Custom catchError called: ' + err))
    );

    apiData.subscribe({
      next(x) { console.log('data: ', x); },
      error(err) { console.log('errors already caught... will not run'); }
    });
  }
}


