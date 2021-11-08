# SharingDataParentAndChild
<div align="center">

![Screenshot 2021-11-08 at 20 00 33](https://user-images.githubusercontent.com/43299285/140801737-001f27f1-16c6-4103-a8a9-4684a808a6ee.png)

</div>

## Initial Commands:

* ng new (Name of the Project)
* ng serve -o 
* ng g c beverages

## From Parent to CHild Component:

We use [@Input()](https://angular.io/guide/inputs-outputs) decorator to send today's beverage from Parent to Child component. Importing Input from angular/core(Child) and assigning data to be displayed(Child). Making connection between parent/child and transferring data thanks to secundary property(beverage) in app-beverages selector(HTML file). Adding new data value(Coke) in parent component(TS file).

* TS beverage file(Child)
<div align="center">

![Screenshot 2021-11-08 at 20 29 44](https://user-images.githubusercontent.com/43299285/140805465-665bf69e-797e-4d26-b60e-307662257cd5.png)

</div>

* HTML beverage file(Child)
<div align="center">

![Screenshot 2021-11-08 at 20 31 39](https://user-images.githubusercontent.com/43299285/140805753-8a5f13fc-3228-45c2-ba36-297daebf3624.png)

</div>

* TS app file(Parent)
<div align="center">

![Screenshot 2021-11-08 at 20 38 13](https://user-images.githubusercontent.com/43299285/140806657-efc75840-75c7-4c23-8daa-e5277a138015.png)

</div>

* HTML app file(Parent)
<div align="center">

![Screenshot 2021-11-08 at 20 38 47](https://user-images.githubusercontent.com/43299285/140806727-70ea645b-47bb-4465-983a-264c4e3803b0.png)

</div>

## From Child to Parent Component:

We use [@Output()](https://angular.io/guide/inputs-outputs) decorator to send data from Child to PArent component. Importing Output and EventEmitter from angular/core in secundary component. then, creating an event newBeverageEvent passing string type, emitting the string value in the function addNewBeverage for linking the events with the tag newBeverage and click event passing as parameter addNewBeverage.value. Creating in parent component array with beverages to send input from child and updating with $event (event binding) data the beverage.

* TS beverage file(Child)
<div align="center">

![Screenshot 2021-11-08 at 21 16 05](https://user-images.githubusercontent.com/43299285/140811648-06fc96b2-3fe1-4ee0-b181-7174b28c444c.png)

</div>

* HTM beverage file(Child)
<div align="center">

![Screenshot 2021-11-08 at 21 20 41](https://user-images.githubusercontent.com/43299285/140812217-f8794b86-2a6b-4b19-8c3a-3b33b9fa74c2.png)

</div>

* TS app file(Parent)
<div align="center">

![Screenshot 2021-11-08 at 21 27 14](https://user-images.githubusercontent.com/43299285/140813035-3e4c2cb4-20ea-4abc-9b06-633e2303a6e6.png)

</div>

* HTML app file(Parent)
<div align="center">

![Screenshot 2021-11-08 at 21 32 57](https://user-images.githubusercontent.com/43299285/140813901-4008c88e-1f03-4ec5-8379-dd034558f1e1.png)

</div>

## How to clean input after adding beverage

#### Two possible solutions:

* Adding `newBeverage.value=''` in the button to clean the value entered in input.(Child Component).
<div align="center">

![Screenshot 2021-11-08 at 21 41 24](https://user-images.githubusercontent.com/43299285/140815000-edb6ecf8-37d6-495d-8ae3-a2b9858ab89b.png)

</div>

* Creating clearInput function to clean the value after adding.
<div align="center">

![Screenshot 2021-11-08 at 21 45 54](https://user-images.githubusercontent.com/43299285/140815541-1cc5457f-6385-4c64-bdca-35335a7da955.png)

</div>

###### Further visual info about this practice.
[Click Here](https://www.youtube.com/watch?v=qspoPXaF_Aw)


