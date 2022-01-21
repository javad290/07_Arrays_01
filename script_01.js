"use strict";

/* Die Satzbau-Maschine | Arrays */


//more of the same !!!!

// **02.******Arrays ********* */

let arr;

// arr = new Array();

// arr=[]
// arr=[2,3,7,11]
// output(arr)
// output(arr.length)
// output(arr[0])
// output(arr[arr.length-1])








// 01. Funktionalität mit Einzelparametern
// Ich bin Javad Hajian
output(getSentenceArr(["Ich", "bin", "Javad", "Hajian"]))
function getSentenceArr(arr) {

    const gap = " "
    const punct = "."
    const str = 
        arr[0] + gap +
        arr[1] + gap +
        arr[2] + gap +
        arr[3] +
        punct;


    return str
}





// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


