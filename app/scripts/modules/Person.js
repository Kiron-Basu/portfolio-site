class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favouriteColor = favColor;
  }
    
    greet() {
      console.log('BABELMy name is ' + this.name + " and my fav color is " + this.favouriteColor);
    }
  }

export default Person;