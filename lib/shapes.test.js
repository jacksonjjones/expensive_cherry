const { Square, Triangle, Circle } = require("./lib/shapes");

// Square Shape
describe('Square', () => {
    test('test for a square with a yellow background', () => {
        const shape = new Square();
        const color = 'yellow'; 
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`); 
    });
});
// Triangle Shape
describe('Triangle', () => {
    test('test for a square with a red background', () => {
        const shape = new Triangle();
        const color = 'red'; 
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`); 
    });
});
// Circle Shape
describe('Circle', () => {
    test('test for a circle with a blue background', () => {
        const shape = new Circle();
        const color = 'blue'; 
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`); 
    });
});
