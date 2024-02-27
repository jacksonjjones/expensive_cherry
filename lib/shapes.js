// Shape class which has a constructor intializing 'color' and sets the 'color' value.
class Shape{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color= color;
    }
}

// Square class that extends Shape and renders an SVG Square
class Square extends Shape{
    render(){
        return `<rect x="50" y="50" height="100" width="200" fill="${this.color}"/>`
    }
}
// Triangle(Polygon) class that extends Shape and renders an SVG Triangle.
class Triangle extends Shape{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    }
}
// Circle class that extends Shape and renders an SVG Circle.
class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
};

// Exports classes (Square, Triangle, Circle)
module.exports = {Square, Triangle, Circle};