# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема
## Модель бізнес-об'єктів
@startuml

entity User <<ENTITY>> #999000
entity User.id <<NUMBER>> 
entity User.job  <<TEXT>> 
entity User.usersname <<TEXT>> 
entity User.password <<TEXT>> 
entity User.mail <<TEXT>> 

entity Expert <<ENTITY>> #099900
entity Expert.id <<NUMBER>> 
entity Expert.usersname <<TEXT>> 
entity Expert.password <<TEXT>> 
entity Expert.mail <<TEXT>> 

entity Quiz <<ENTITY>> #009990
entity Quiz.id <<NUMBER>> 
entity Quiz.text <<TEXT>> 
entity Quiz.topic <<TEXT>> 

entity Question <<ENTITY>> #000999
entity Question.id <<NUMBER>> 
entity Question.text <<TEXT>> 

entity Option <<ENTITY>> #900099
entity Option.id <<NUMBER>> 
entity Option.text <<TEXT>> 

entity SelectedOption <<ENTITY>> #990009
entity SelectedOption.id <<NUMBER>> 

entity CompletedSurvey <<ENTITY>> #090909
entity CompletedSurvey.id <<NUMBER>> 
entity CompletedSurvey.userID <<NUMBER>> 
entity CompletedSurvey.topic <<TEXT>> 
entity CompletedSurvey.text <<TEXT>> 

entity Result <<ENTITY>> #909090
entity Result.id <<NUMBER>> 
entity Result.quizID <<NUMBER>> 
entity Result.mostPopularOptionsID <<NUMBER>> 
entity Result.text <<TEXT>> 

User *-- User.id
User *-- User.job
User *-- User.usersname
User *-- User.password
User *-- User.mail

Expert *-- Expert.id
Expert *-- Expert.usersname
Expert *-- Expert.password
Expert *-- Expert.mail

Quiz *-- Quiz.id
Quiz *-- Quiz.text
Quiz *-- Quiz.topic

Question *-- Question.id
Question *-- Question.text

Option *-- Option.id
Option *-- Option.text

SelectedOption *-- SelectedOption.id

CompletedSurvey *-- CompletedSurvey.id
CompletedSurvey *-- CompletedSurvey.userID
CompletedSurvey *-- CompletedSurvey.topic
CompletedSurvey *-- CompletedSurvey.text

Result *-- Result.id
Result *-- Result.quizID
Result *-- Result.mostPopularOptionsID
Result *-- Result.text

User "1, 0" -- "1, 1" Expert
User "1, 1" -- "0, *" CompletedSurvey
Expert "1, 1" -- "0, *" Quiz
Quiz "1, 1" -- "0, *" Question
Quiz "1, 1" -- "1, 1" Result
Quiz "1, 1" -- "0, *" CompletedSurvey
Question "1, 1"-- "0, *" Option
Question "1, 1" -- "0, *" SelectedOption
SelectedOption "0, *" -- "1, 1" CompletedSurvey

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
