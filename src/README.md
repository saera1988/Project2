# Fit Lite Health Tracke

## Table of contents

* what is ?
* check the link
* Screenshots(wireframe,webpage)
* Technologies
* Features
* How to Use
* Status
* Further improvements


## what is Fit Life
IT is a simple React based SPA.A health app tracker developed better hydration and active habits 
* Tracke the water intake ,allows users to log water intake and adjust  the info.
* Tell the user if where to do the workout (indoor/outdoor) based on the weather condations which invoke the resource of sample weather api (openweathermap). 


## check the link:
https://saera1988.github.io/Project2/


## Technologies,the stack of this application consists of:
1)Frontend with React
2)A backend JSON API (openweathermap)
3)Bootstrab



## Installation:
1)Axios library.
2)React-router react-router-dom
3)Bootstrab


## How it is work :
* Hydration 💧: User will log  daily water intake every (cup) with just a tap.After every glass User can see how close  getting to daily goal,the log will give an idea of overall progress.
* Fitness: User can check the weather in fitness page,the app will suggest where to do the  workout accordingto the tempreture.

## App features :

* Track water intake and stay hydrated with Water Balance! 
* Log water with a single tap!
* Visual representations of your daily progress.
* Find out the Local weather conditions .
* Give tips for doing workout regarding the place .

## Describe how it is work (logic behind )

I used 7 component (pages):
* App component(main (parenat)page that)
* Home(act as the landing page and display a message to the user.)
* nav bar(acts as the navigational bar for the application using bootstrab templet and React-router react-router-dom)
* water(parent component for water with all function needed ,add,clear,edit,progress)
* WaterDrink(incloude form takeing info from user and submit it to Water cupe to be added ther  to the list )
* WaterCup (include 3 button linked to the function on water and display the list taking item form user send from Waterdrink)
* Fitness(use api to display weather ,linked the info provied by api and make if statment with 3 stat and desplay message according to the info from api)
 
 ## problems and solving strategy:
Api :Difficulties with finding a good api provide me with information about ative level or type of workout and the amount of calories was burned.I've tried many then it end up with using weather api and change the plan to determain the place for exersies accoording to weather condation and local tempreture.

## Status:
Project is:  finished,but it can be improved !

## List unsolved problems :
* Api not working after deployement ,but it work localy.


## Further improvements:
* Add nutration page to calculate calories for given food
* Edit the fitness page to add spasific type of workout and desplay the target hart rate and burned calories. 
* Make the site fully responsive so that it is playable from a mobile phone
* Desplay all info from  in Chart or digram .
* Allow user to set thier goals for fitness,water intake and nutration.
* Sign in /Log in and create account 
