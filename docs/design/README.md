# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема
## Модель бізнес-об'єктів
@startuml

entity User <> entity User.id <> #ffffff entity User.job  <> #ffffff entity User.usersname <> #ffffff entity User.password <> #ffffff entity User.mail <> #ffffff
entity Expert <> entity Expert.id <> #ffffff entity Expert.usersname <> #ffffff entity Expert.password <> #ffffff entity Expert.mail <> #ffffff
entity Quiz <> entity Quiz.id <> #ffffff entity Quiz.text <> #ffffff entity Quiz.topic <> #ffffff
entity Question <> entity Question.id <> #ffffff entity Question.text <> #ffffff
entity Option <> entity Option.id <> #ffffff entity Option.id <> #ffffff
entity SelectedOption <> entity SelectedOption.id <> #ffffff
entity CompletedSurvey <> entity CompletedSurvey.id <> #ffffff entity CompletedSurvey.userID <> #ffffff entity CompletedSurvey.topic <> #ffffff entity CompletedSurvey.text <> #ffffff
entity Result <> entity Result.id <> #ffffff entity Result.quizID <> #ffffff entity Result.mostPopularOptionsID <> #ffffff entity Result.text <> #ffffff
User.id -u-* User.job -u-* User.usersname -u-* User.password -u-* User.mail -u-* User
Expert.id -u-* Expert.usersname -u-* Expert.password -u-* Expert.mail -u-* Expert
Quiz.id -u-* Quiz.text -u-* Quiz.topic -u-* Quiz
Question.id -u-* Question.text -u-* Question
Option.id -u-* User.job -u-* Option
SelectedOption.id -u-* SelectedOption
CompletedSurvey.id -u-* CompletedSurvey.userID -u-* CompletedSurvey.topic -u-* CompletedSurvey.text -u-* CompletedSurvey
Result.id -u-* Result.quizID -u-* Result.mostPopularOptionsID -u-* Result.text -u-* Result
User "1, 1" -u- "1, 1" Expert
User "1, 1" -u- "0, *" CompletedSurvey
Expert "1, 1" -u- "0, *" Quiz
Quiz "1, 1" -u- "0, *" Question
Quiz "1, 1" -u- "1, 1" Result
Quiz "1, 1" -u- "0, *" CompletedSurvey
Question "1, 1"-u- "0, *" Option
Question "1, 1" -u- "0, *" SelectedOption
SelectedOption "0, *" -u- "1, 1" CompletedSurvey

@enduml

## ER-модель

@startuml
  entity User <<ENTITY>> {
    id:NUMBER
    job:TEXT
    usersname:TEXT
    password:TEXT
    mail:TEXT
  }
  entity Expert <<ENTITY>>{
    id:NUMBER
    usersname:TEXT
    password:TEXT
    mail:TEXT
  }
  entity Quiz <<ENTITY>>{
    id:NUMBER
    text:TEXT
    topic:TEXT
  }
  entity Question <<ENTITY>>{
    id:NUMBER
    text:TEXT
  }
  entity Option <<ENTITY>>{
    id:NUMBER
    text:TEXT
  }
  entity SelectedOption {
    id:NUMBER
  }
  entity CompletedSurvey {
    id:NUMBER
    userID:NUMBER
    topic:TEXT
    text:TEXT
  }
  entity Result {
    id:NUMBER
    quizID:NUMBER
    mostPopularOptionsID:NUMBER
    text:TEXT
  }

  Question "1, 1"-u- "0, *" Option
  Quiz "1, 1" -u- "0, *" Question
  Quiz "0, *" -u- "1, 1" Expert
  Result "1, 1" -u- "1, 1" Quiz
  Expert "1, 1" -u- "1, 1" User
  SelectedOption "0, *" -u- "1, 1" Question
  SelectedOption "0, *" -u- "1, 1" CompletedSurvey
  CompletedSurvey "0, *" -u- "1, 1" Quiz
  CompletedSurvey "0, *" -u- "1, 1" User
@enduml

## Реляційна схема

![Реляційна схема](https://github.com/REFLAXua/QSystem/raw/master/docs/.vuepress/public/image_2023-11-27_12-34-32.png)
