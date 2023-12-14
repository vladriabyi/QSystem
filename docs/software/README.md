# Реалізація інформаційного та програмного забезпечення

- SQL-скрипт для створення на початкового наповнення бази даних

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema survey system
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `survey system` ;

-- -----------------------------------------------------
-- Schema survey system
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `survey system` DEFAULT CHARACTER SET utf8 ;
USE `survey system` ;

-- -----------------------------------------------------
-- Table `survey system`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey system`.`user` ;

CREATE TABLE IF NOT EXISTS `survey system`.`user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `survey system`.`expert`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey system`.`expert` ;

CREATE TABLE IF NOT EXISTS `survey system`.`expert` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `job` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_expert_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_expert_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `survey system`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `survey system`.`quiz`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey system`.`quiz` ;

CREATE TABLE IF NOT EXISTS `survey system`.`quiz` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `topic` VARCHAR(45) NOT NULL,
  `text` VARCHAR(45) NOT NULL,
  `expert_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_quiz_expert1_idx` (`expert_id` ASC) VISIBLE,
  CONSTRAINT `fk_quiz_expert1`
    FOREIGN KEY (`expert_id`)
    REFERENCES `survey system`.`expert` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `survey system`.`question`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey system`.`question` ;

CREATE TABLE IF NOT EXISTS `survey system`.`question` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(45) NOT NULL,
  `quiz_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_question_quiz1_idx` (`quiz_id` ASC) VISIBLE,
  CONSTRAINT `fk_question_quiz1`
    FOREIGN KEY (`quiz_id`)
    REFERENCES `survey system`.`quiz` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `survey system`.`option`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey system`.`option` ;

CREATE TABLE IF NOT EXISTS `survey system`.`option` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(45) NOT NULL,
  `question_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_option_question1_idx` (`question_id` ASC) VISIBLE,
  CONSTRAINT `fk_option_question1`
    FOREIGN KEY (`question_id`)
    REFERENCES `survey system`.`question` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `survey system`.`selected option`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey system`.`selected option` ;

CREATE TABLE IF NOT EXISTS `survey system`.`selected option` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `question_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_selected option_question1_idx` (`question_id` ASC) VISIBLE,
  CONSTRAINT `fk_selected option_question1`
    FOREIGN KEY (`question_id`)
    REFERENCES `survey system`.`question` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `survey system`.`result`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey system`.`result` ;

CREATE TABLE IF NOT EXISTS `survey system`.`result` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(45) NOT NULL,
  `most_popular_option_id` INT NOT NULL,
  `quiz_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_result_quiz1_idx` (`quiz_id` ASC) VISIBLE,
  CONSTRAINT `fk_result_quiz1`
    FOREIGN KEY (`quiz_id`)
    REFERENCES `survey system`.`quiz` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `survey system`.`completed survey`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `survey system`.`completed survey` ;

CREATE TABLE IF NOT EXISTS `survey system`.`completed survey` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `topic` VARCHAR(45) NOT NULL,
  `text` VARCHAR(45) NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `selected option_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_completed survey_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_completed survey_selected option1_idx` (`selected option_id` ASC) VISIBLE,
  CONSTRAINT `fk_completed survey_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `survey system`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_completed survey_selected option1`
    FOREIGN KEY (`selected option_id`)
    REFERENCES `survey system`.`selected option` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

- RESTfull сервіс для управління даними

