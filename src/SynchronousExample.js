function  func1Calculate(arg){
    console.log("this is func1 current : " + arg)
}

function  func2Sorting(arg, argCallBackFunc){
    console.log("this is func2 before : " + arg);
    argCallBackFunc("function 1 parameter");
    console.log("this is func2 after : " + arg);
}

function  func3(arg, argCallBackFunc){
    console.log("this is func3 before : " + arg);

    // the first parameter is a real value
    // the second parameter is the pointer of func1
    argCallBackFunc(" function 2 parameter ", func1Calculate);

    console.log("this is func3 after : " + arg);
}

func3(" function 3 parameter ", func2Sorting);