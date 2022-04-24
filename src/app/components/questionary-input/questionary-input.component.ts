import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../classes/question";


@Component({
  selector: 'app-questionary-input',
  templateUrl: './questionary-input.component.html',
  styleUrls: ['./questionary-input.component.scss']
})
export class QuestionaryInputComponent implements OnInit {
  constructor() {
  }

  @Input() question!: Question;
  @Input() level!: number;
  @Input() parentAnswer!: any;
  @Input() formGroup!: any;
  answer: any;

  get q() {
    return JSON.stringify(this.question)
  }

  @Output() updateEvent = new EventEmitter<any>();
  update() {
    let updateObj: any = {}
    updateObj[this.question.name] = this.answer
    this.updateEvent.emit(updateObj)
  }
  previousChildData:any = {}
  updateEventHandler(value:any) {
    let updateObj: any = {}
    updateObj[this.question.name] = this.answer
    this.updateEvent.emit({...updateObj, ...this.previousChildData,...value})
    this.previousChildData = {...this.previousChildData,...value}
  }


  ngOnInit(): void {
  }

  submit() {
  }

}
