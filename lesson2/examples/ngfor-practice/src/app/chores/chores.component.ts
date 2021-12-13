import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's Chores", tasks: [
         'Empty dishwasher', 'Start launchCode prep work', 'Buy groceries']},
      {title: "Today's Chores", tasks: [
         'Load dishwasher', 'Finish launchCode prep work', 'Buy groceries you forgot']},
      {title: "Today's Chores", tasks: [
         'Load dishwasher again', 'play launchCode practice code', 'Buy groceries again']}
   ]     
      
   todoTitles = ["Tomorrow's Chores", "Next Month's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
