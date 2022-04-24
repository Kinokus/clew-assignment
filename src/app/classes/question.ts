export class Question {
  title: string;
  type: string;
  name: string;
  childItems: Question[] = [];
  options: string[];
  parentAnswer: any

  constructor({
                title,
                type,
                name,
                options = [],
                childItems = [],
                parentAnswer
              }: Question) {
    this.title = title;
    this.type = type;
    this.name = name;
    this.options = options;
    this.childItems = childItems;
    this.parentAnswer = parentAnswer;
  }
}
