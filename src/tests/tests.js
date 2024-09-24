
function add (a,b) {
    return a+b;
}
 
test("add 2 numbers", ()=>{
    const acctualResult = add(2,3);
    const expectedResult = 5;
    expect(acctualResult).toBe(expectedResult);
})