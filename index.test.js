const calculate = require('./index')

// Testing sum 


// Takes in two parameters
test('Adds two numbers correctly', () => {
    expect(calculate(10,10,'+')).toBe(20)
})

// Testing subtracting

test('Subtracts two numbers correctly', () => {
    expect(calculate(1,2,'-')).toBe(-1);
})

// Testing Multiplication 
2
test('Multiplies two numbers correctly', () => {
    expect(calculate(10,10,'*')).toBe(100);
});

// Testing Division

test('Divides two numbers correctly', () => {
    expect(calculate(5,2,'/')).toBe(2.5);
});

// Error Occurs When Divding By 0

test('Error when dividing by 0', () => {
    expect(calculate(10,0,'/')).toBe(`Can't divide by 0`);
})




