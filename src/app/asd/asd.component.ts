import {Component, EventEmitter , Input, OnInit, Output} from '@angular/core';
import {Asd} from '../app.component';

@Component({
  selector: 'app-asd',
  templateUrl: './asd.component.html',
  styleUrls: ['./asd.component.scss']
})
export class AsdComponent implements OnInit {

  @Input() asd: Asd[] = [];
  @Output() onT = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(id: number){
    this.onT.emit(id);
  }
}
