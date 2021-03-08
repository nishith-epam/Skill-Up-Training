import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'types-project';

  /*
   Interfaces are basically a way to describe data shapes, for example, an object.

   Type is a definition of a type of data, for example, a union, primitive,
   intersection, tuple, or any other type.

   Interfaces are better when you need to define a new object or method of an object.

   Types are better when you need to create functions, for example

  */
 
  getSongName() {

    // Declaration merging happens with only interface

    interface Song {
      artistName: string
    }

    interface Song {
      songName: string
    }

    const song: Song = {
      artistName: "ABC",
      songName: "XYZ"
    }

    // same thing won't happen with type, it will throw duplicate identifier Song error


  }
}
