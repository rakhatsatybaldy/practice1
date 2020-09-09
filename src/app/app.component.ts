import { Component } from '@angular/core';

export interface Asd {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'ToDo List';

  public asd: Asd[] = [
    {id: 1, title: 'First Item', completed: true},
    {id: 2, title: 'Second Item', completed: false},
    {id: 3, title: 'Third Item', completed: false},
  ];

  onT(id: number){
    const index = this.asd.findIndex(value => value.id === id);
    this.asd[index].completed = !this.asd[index].completed;
  }
}
