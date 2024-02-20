const cloneArray = require('../CloneArray')
test("two array should be same",()=>{
    const array=[1,2,3];
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
    // expect(1).toBe(1);
})