// Defines a class called Shape which has a constructor intializing 'color' and sets the 'color' value.
class Shape{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color= color;
    }
}

// Defines a Square class that extends Shape and renders an SVG Square with position, size, and fill color based on the current instance's properties.
class Square extends Shape{
    render(){
        return `<svg xmlns="https://www.w3.org/2000/svg"> <rect x="50" height="200" width="200" fill="${this.color}"> </svg>`
    }
}
// Defines a Triangle(Polygon) class that extends Shape and renders an SVG Triangle(Polygon) with position, size, and fill color based on the current instance's properties.
class Triangle extends Shape{
    render(){
        //return `<polygon height="100%" width="100%" points="25,75 75,25 25,25" fill="${this.color}">'
        return `<svg xmlns="https://www.w3.org/2000/svg" <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"> </svg>`
    }
}
// Defines a Circle class that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
class Circle extends Shape{
    render(){
        return `<svg xmlns="https://www.w3.org/2000/svg" <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}> </svg>`
    }
};

// Exports classes (Square, Triangle, Circle)
module.exports = {Square, Triangle, Circle};