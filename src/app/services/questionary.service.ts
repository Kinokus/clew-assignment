import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionaryService {

  public structure:any = {
    "patientQuestions": [
      {
        "title": "Age",
        "type": "number",
        "name":"age"
      },
      {
        "title": "Are you using any heart medications ?",
        "type": "radio",
        "name":"usedMedications",
        "childItems": [
          {
            "parentAnswer": "1",
            "title": "Select medication",
            "type": "select",
            "name": "medication",
            "options": [
              "Accupril",
              "Aceon (perindopril)",
              "Adalat (nifedipine)",
              "Altace (ramipril)",
              "Apresoline (hydralazine)",
              "Aspirin",
              "Benicar HCT (hydrochlorothiazide and olmesartan)",
              "Brilinta (ticagrelor)"
            ],
            "childItems": [
              {
                "parentAnswer": "Aspirin",
                "title": "How many times did you tooks Aspirin today?",
                "type": "number",
                "name": "aspirinCount",
              },
              {
                "parentAnswer": "Aceon (perindopril)",
                "title": "How many times did you tooks Aceon today?",
                "type": "number",
                "name": "aceonCount",
              },
              {
                "title": "Did you had any water today?",
                "type": "radio",
                "name": "drunkWater",
                "childItems": [
                  {
                    "parentAnswer": "1",
                    "title": "Did you drunk more then 1 liter of water today?",
                    "type": "radio",
                    "name": "drunkOverLiter",
                  }
                ]
              }
            ]
          },
          {
            "parentAnswer": "0",
            "title": "Reason if not",
            "type": "text",
          }
        ]
      }
    ]
  }

  constructor() {
  }
}
