const findNeedle = require('../8-A-Needle-in-the-Haystack') 

test('Test description', () =>{
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
    
    expect(findNeedle(haystack_1)
    ).toBe('found the needle at position 3', undefined, "Your function didn't return anything")

} )


test('Able to return needleIndex in array filled with various data types', () =>{
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

    expect(findNeedle(haystack_1)
    ).toBe('found the needle at position 3')
  
} )

test('Able to return needleIndex in String filled array', () =>{
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];

    expect(findNeedle(haystack_2)
    ).toBe('found the needle at position 5')

} )


test('Able to return needleIndex in integer filled array', () =>{
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
       
    expect(findNeedle(haystack_3)
    ).toBe('found the needle at position 30')
} )