# Assignment 2

* Date Created: 06 06 2020
* Last Modification Date: 13 06 2020

## Author

* Anqi Chen B00838586 (anqi.chen@dal.ca) 

## Table of Contents
- [Live display](#live-display)
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Local development](#local-development)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Sources Used](#sources-used)
- [References](#references)

## Live display
[Noval Life App deployed to Heroku](https://react-noval-life.herokuapp.com/)

## Introduction

This assignment focuses on understanding the application of usability and design principles for creating the overall look-and-feel of a web application’s UI. It is all about front end part without backend supports.

## Design justifications

This project uses ReactJS, Ant Design, and Mapbox to implement the web application about covid-19. It contains 4 main pages: landing(home), login/registration, latest updates and help which are chosen by everyone in our group25. I designed the web application mainly based on my assignment1 lo-Fidelity Prototype, only changes the user icon to the upper-right corner to make user management function accessible. Also, I added a map display on the help page, trying to make the application more interactive with users.

### Prerequisites

To have a local copy of this project and run it on your local machine, you will first need to install the following software / libraries / plug-ins:

Latest version of npm installed
React
Ant Design(UI library)
Mapbox(demonstrate a map in the page: help)


See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### local-development

* Clone the repo: git clone https://github.com/onlyanqi/react-noval-life.git
* Navigate to the folder by 'cd react-novel-life'
* Install the npm modules by: 'npm install'
* Run 'npm start' to start the web application and open this address on your browser: http://localhost:3000.


## Deployment

This assignment is available on GitHub and Heroku:
GIT Repository Link: https://github.com/onlyanqi/react-noval-life.git
Heroku Deployment Link: https://react-noval-life.herokuapp.com/

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - A JavaScript library for building user interfaces
* [Ant Design](https://ant.design/) - UI Library
* [Mapbox](https://www.mapbox.com/) - Maps and location for developers

## Sources Used

### login.js

Lines 41 - 52
---------------

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="1">+1</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );

- <!---How---> The code in [Ant Design](https://ant.design/) is modified by setting some options inside the <select> label of <Form.Item>
- <!---Why---> [Ant Design](https://ant.design/)'s Code was used because I'm not familiar with the 'Form' component it offers and I want to add the selection of the prefix of telephone numbers.


### user.js

Lines 13 - 25
---------------
   <div>
        <Avatar
          size={100}
          src="https://image.flaticon.com/icons/svg/3039/3039750.svg"
        />
      </div>
      <div className="user-introduction">
        Hello! you've logged in
        <Divider>Social Media</Divider>
        <Avatar size={28} icon={<TwitterOutlined />} className="account" />
        <Avatar size={28} icon={<FacebookOutlined />} className="account" />
        <Avatar size={28} icon={<LinkedinOutlined />} className="account" />
      </div>

- <!---How---> The code in [jspang](https://jspang.com/detailed?id=52) was modified by using the similar format to implement a user's profile.
- <!---Why---> [jspang](https://jspang.com/detailed?id=52)'s Code was used because I do not know how the implement this section, and I was inspired by his code which is implementing the similar part in a personal blog.


## References

* 30 free vector icons of Charity designed by Eucalyp. Flaticon. Retrieved from https://www.flaticon.com/packs/charity-101
* Causes of Heroku H10-App Crashed Error And How To Solve Them - DEV. Retrieved from https://dev.to/lawrence_eagles/causes-of-heroku-h10-app-crashed-error-and-how-to-solve-them-3jnl
* Icon - Ant Design. Retrieved from https://ant.design/components/icon/
* Introduction. Mapbox. Retrieved from https://www.mapbox.com/mapbox-gl-js/api/
* 技术胖-React Hooks+Egg.js实战视频教程-技术胖Blog开发. Retrieved from https://jspang.com/detailed?id=52
