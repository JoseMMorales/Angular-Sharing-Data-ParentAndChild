# SharingDataParentAndChild

![Screenshot 2021-11-08 at 20 00 33](https://user-images.githubusercontent.com/43299285/140801737-001f27f1-16c6-4103-a8a9-4684a808a6ee.png)

## Initial Commands:

* ng new (Name of the Project)
* ng serve -o 
* ng g c beverages

## From Parent to CHild Component:

We use [@Input()](https://angular.io/guide/inputs-outputs) decorator to send today's beverage from Parent to Child component. Importing Input from angular/core(Child) and assigning data to be displayed(Child). Making connection between parent/child and transferring data thanks to secundary property(beverage) in app-beverages selector(HTML file). Adding new data value(Coke) in parent component(TS file).

* TS beverage file(Child)
![Screenshot 2021-11-08 at 20 29 44](https://user-images.githubusercontent.com/43299285/140805465-665bf69e-797e-4d26-b60e-307662257cd5.png)
)

* HTML beverage file(Child)
![Screenshot 2021-11-08 at 20 31 39](https://user-images.githubusercontent.com/43299285/140805753-8a5f13fc-3228-45c2-ba36-297daebf3624.png)

* TS app file(Parent)
![Screenshot 2021-11-08 at 20 38 13](https://user-images.githubusercontent.com/43299285/140806657-efc75840-75c7-4c23-8daa-e5277a138015.png)
)

* HTML app file(Parent)
![Screenshot 2021-11-08 at 20 38 47](https://user-images.githubusercontent.com/43299285/140806727-70ea645b-47bb-4465-983a-264c4e3803b0.png)
)

## From Child to Parent Component:






This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
