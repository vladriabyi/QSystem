# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

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
