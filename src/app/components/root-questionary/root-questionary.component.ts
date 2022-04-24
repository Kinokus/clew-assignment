import {AfterContentChecked, AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {QuestionaryService} from "../../services/questionary.service";


@Component({
  selector: 'app-root-questionary',
  templateUrl: './root-questionary.component.html',
  styleUrls: ['./root-questionary.component.scss']
})
export class RootQuestionaryComponent implements OnInit, AfterContentInit, AfterContentChecked {

  constructor(public questiobnaryService: QuestionaryService) {
  }

  @ViewChild('rootForm') rootForm :any;

  ngAfterContentChecked(): void {
  }

  ngAfterContentInit() {
  }

  ngOnInit(): void {
  }

  submit() {
  }

  formData = {}
  get formDataJson(){
    return JSON.stringify(this.formData,null,' ')
  }
  updateEventHandler(value?:any) {
    this.formData = {...this.formData, ...value}
    console.log(this.formData);
  }
}
