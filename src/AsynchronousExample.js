// function printMe() {
//     console.log('This is printMe() function passing to setTimeout function as a parameter.');
// }
//
// function test() {
//     console.log('This is test function.');
// }
//
// setTimeout(printMe, 2000);
// test();




function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('This is main function');

    setTimeout(f1, 3000);

    f2();
}

main();