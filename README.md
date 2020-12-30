# Novel Life website by Group 25
## Author
* Anqi Chen B00838586 (B00838586) 
* Shivam Gupta (B00810723)
* Nupur Bhatt  (B00842470)
* Rishabh Baheti  (B00843322)
* Vidya Boghara (B00837972)
* Siddhant Ashutosh  (B00836612)

## Table of Contents
- [Live display](#live-display)
- [Introduction](#introduction)
- [Local development](#local-development)
- [Deployment](#deployment)
- [Built With](#built-with)
- [References](#references)

## Live display
[Novel Life App deployed to Heroku](https://g25novellife.herokuapp.com/)

## Introduction

This project focuses on understanding the application of usability and design principles for creating the overall look-and-feel of a web application’s UI. Also, we applied some of the popular back-end development techniques, approaches, Frameworks and APIs, to implement the functionality of a web application regarding to Covid-19, based on a given set of requirements written in our project proposal. 

## Design justifications

This project uses ReactJS, Ant Design, and Mapbox to implement the web application about covid-19. We designed the web application mainly based on our lo-Fidelity Prototype, only changes the user icon to the upper-right corner to make user management function accessible. Also, we added graphs, slides and map displayed on the website, trying to make the application more interactive with users.

The Travel Advisory function should provide recent and accurate travel restrictions of countries and regions worldwide. I first considered gathering all the boarding information from the official website of the Government of Canada, but the related data there are not ready to use in our application. Then, I found https://www.travel-advisory.info/ is a good source for up-to-date travel advisories. I tried using the free API interface available as the data is very detailed. However, it will show a lot of numbers and text descriptions on the web page, which is not friendly for users. As our group hasn't implemented the front-end for this feature, I finally chose to use the widget since it is intuitive to show travel advisories and travel warnings for a specific country. These advisories contain a risk value which describes how dangerous a country is from a traveller's perspective. During Covid-19, this is exactly what our target users need.


### local-development

* Clone the repo: git clone 
* Navigate to the folder
* Install the npm modules by: 'npm install'
* Run 'npm start' to start the web application and open this address on your browser: http://localhost:8080.


## Deployment

This assignment is available on GitHub and Heroku:
* GIT Repository Link: https://github.com/Shivam1805/Group25_Novel_Life.git
* Heroku Deployment Link: https://novellife.herokuapp.com/

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - A JavaScript library for building user interfaces
* [Ant Design](https://ant.design/) - UI Library
* [Mapbox](https://www.mapbox.com/) - Maps and location for developers
* [Travel-Advisory](https://www.travel-advisory.info/) -Daily updated travel advisories - Worldwide

## References

* Icon - Ant Design. Retrieved from https://ant.design/components/icon/
* G. A. C. Government of Canada, “Travel Advice and Advisories,” Travel.gc.ca, Nov. 16, 2012. https://travel.gc.ca/travelling/advisories (accessed Jul. 03, 2020).
* “Travel Advisory Widgets for Webmasters | Travel-Advisory.info.” https://www.travel-advisory.info/widgets (accessed Jul. 25, 2020).
