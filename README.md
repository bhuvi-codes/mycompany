# Mycompany

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Problem Statement

Create a project Name My Company and have following modules and components

* Auth Module
* Company Module.

Auth Module should contain two components - Login and Signup to perform authentication and new user registration.

Company Module should contain interfaces to list, add and visualize employees.

All forms should have sufficient validations. Use JSON Server as backend.

## Project Design

JSON Server is used for two APIs - users and employees.

Auth Module is implemented with two components that use users API of JSON Server. Additionally sessionStorage is used to maintain login persistance for given session. On successfull login user is redirected to employeeinfo page which acts as our homepage.

Company Module is implemented with two components that use employees API of JSON Server. The table view and Chart view is shown in employeeinfo component and new employee can be added in addemployee component.There is a toggle for chart view and table view using buttons provided.

There is a default db.json with one user and four employees to begin with JSON Server.

## Running (dev server)

Install the following dependencies:
 - Install node js 10+
 - Install angular cli
    npm install -g @angular/cli
 - Install JSON Server
    npm install -g json-server   
 - Copy this project directory to a location
 - Install dependencies, from the project folder
    npm install
 - Run `json-server --watch db.json` to run the backend server.   
 - Run `ng serve` for a dev server from this directory. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running (Webserver)

On a machine where a webserver is available:
 - Copy the dist folder of this project to the webserver root directory (e.g. htdocs for Apache)
 - Start the webserver.
 - For backend, follow JSON Server related steps mentioned in above section.

## Demo

Live Demo: https://mycompany.avpcloud.in (As this is a WIP project, requires additional username/password access which will be given by me on request)