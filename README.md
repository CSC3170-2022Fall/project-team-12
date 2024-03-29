[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9423235&assignment_repo_type=AssignmentRepo)
# CSC3170 Course Project

## Project Overall Description

This is our implementation for the course project of CSC3170, 2022 Fall, CUHK(SZ). For details of the project, you can refer to [project-description.md](project-description.md). In this project, we utilized what we learned in the lectures and tutorials in the course.

## Presentation Video Link

This is the link for presentation video: https://www.bilibili.com/video/BV1iM411173W/?vd_source=3fe6ce71d4bf62c78c2fed488c7d138c <br>
For the slides of the presentation, you can refer to [presentation-slides.pdf](presentation-slides.pdf).</br>

## Team Members

Our team consists of the following members, listed in the table below (the team leader is shown in the first row, and is marked with 🚩 behind his/her name):

| Student ID | Student Name | GitHub Account (in Email) | User Name   |
| ---------- | ------------ | ------------------------- | ----------- |
| 120040076  | 许可 🚩      | 1536222503@qq.com         | @[Markkkx](https://github.com/Markkkx)     |
| 120010030  | 石行言        | andrewshi2002@163.com     | @[p0sitive1](https://github.com/p0sitive1)   |
| 120010019  | 张梓杰        | itif_hq@126.com        | @[CHANG-Tzuchieh](https://github.com/CHANG-Tzuchieh)   |
| 120040064  | 陈祥志        | 1060239950@qq.com            | @[Aycaramb8](https://github.com/Aycaramb8)        |
| 119020055  | 魏弋博        | 1912664053@qq.com         | @[WYS-Lucas](https://github.com/WYS-Lucas)        |
| 120090600  | 叶超          | 1016558312@qq.com            | @[JackeyYe12](https://github.com/sadd)        |

## Project Specification

After thorough discussion, our team made the choice and the specification information is listed below:

- Our option choice is: **Option 1**
- Our branch choice is: **Branch 1**
- The difficulty level is: **Normal**

## Project Abstract

This project is under option 1, branch 1, normal difficulty. This project aims to implement a platform designed for chip transactions between consumers and producers and handle chip production procedures. Specifically, this project aims to accomplish the following goals for the platform: 

- Consumers and producers sign up and sign in 

- Consumers to register/modify purchase requests 

- Producers to register package information 

- Producers to register/modify product (chip) description 

- Assign operations to machines

- General information look up

- General information comparison with visualization

## Program Design

First, we have a homepage with some contents of our company and two buttons that link to consumer and producer login page. At the consumer login page, users will be asked to enter email and passward in order to get in. There's also a signup page, in which users will need to enter some infomation to set up an account. And the producer login page will be about the same contents stored in a different database.

Additionally, after login, consumer homepage and producer homepage will be shown according to the user's status. In this page, users can check their packages, make some purchase, delete their accounts, and logout to the homepage. As for the producer homepage, "make purchase" button is replaced by "check plants" button. Specific data will be visualized according to specific functions.

## Functionality Implementation

Consumer homepage is similar to producer homepage in functionalities. 3 out of 5 buttons are the same: “Home”, “Log-out”, “Delete account”. “Home” is a button linking to either consumer homepage or producer homepage. “Log-out” is a button linking to the login/registration page. At the same time, it will also change the user status into offline. “Delete account” is a button linking to a confirmation page. After the user confirms the account that he wants to delete, it will delete the relative information (including package) in the database and go to the login/registration page. 

For consumer homepage, “Check package” button allows the user to check and search for package information. “Make purchase” button allows the user to select from the different kinds of chips to make a purchase. 

For producer homepage, “Check plants” button allows user to manage their plants (including adding and deleting). “Check package” button is basically the same as the one on the consumer homepage, but it also allows the producer to update the package information (in-progress or finished).  

## Historical Progress

  | Milestone |      Progress                                                          |
  | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
  | Week 3   | <ul><li>Determined the main functions & basic idea of project</li><li>Wrote the Project Abstract</li><li>Drew the ER diagram</li></ul>  |                                                                                              |
  | Week 4   | <ul><li>Separated the total work into small parts</li> <li> Allocated to each member of the group</li></ul> |
  | Week 5   | <ul><li> Integrated all the parts of the codes</li> <li> Unified the style </li> <li> Check each other for loopholes</li> </ul>                                |
  | Week 6   | <ul><li> Did the final adjustment </li><li> Wrote the Report </li><li> Recorded the presentation video </li></ul>                                                                |

## Repository Structure

In our group's Github repo profile, the [source](source) folder stores the code of our main program. Inside the folder, all the html, javascript and json files are stored in main directory. And css files are stored in src subdirectory. Users can open the home page of the website through [home_page.html](home_page.html). 
Outside the folder, there are [presentation-slides.pdf](presentation-slides.pdf) and a [project-description.md](project-description.md).

## Actual Contribution
| Student ID | Student Name | Contribution | Personal Sentiment   |
| ---------- | ------------ | ------------------------------------------- | --------------------------------- |
| 120040076  | 许可          | Responsible for writing two functions：Producer add plant information page and update package information.         | As a leader of the team, glad to see these well cooperated teammates. Learnt to use the knowldge from classes and how to build websites from this project.|
| 120010030  | 石行言        | Responsible for writing two functions: Consumer add purchace package using shopping cart and consumer check package information page    | It was nice to work with such an execellent team, learnt many things along the way. |
| 120010019  | 张梓杰        | Responsible for writing consumer and producer login and sign-up pages        |  It was great to work with the team members towards the same goal. Thanks to them, I learned a lot from it |
| 120040064  | 陈祥志        | Responsible for writing consumer homepage and corresponding functions.            | I would like to express my thanks for my team members, who gave me a great help. It is not smooth that we have finished this project, but we managed to finish the project and harvested a sense of pride in our success. |
| 119020055  | 魏弋博        | Responsible for writing producer homepage and css style.        | Happy to cooperate with teammates! Learnt some new stuff like how to write webpages. Teammates are really helpful. |
| 120090600  | 叶超          | Responsible for writing produer login pages            |I have learned a lot of knowledge about making web pages. I am very grateful to my team members for their help  |

