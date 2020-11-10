//1 https://www.hackerrank.com/challenges/solve-me-first/problem

function solveMeFirst(a, b) {
  return a + b; 
} 

//2 https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar) {
    let sumArray = 0
    
    for(let i = 0; i < ar.length; i++) {
        sumArray += ar[i];
    }
    
    return sumArray;
}

//3 https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {

    let score = [0, 0];
    
    for(let i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            score[0] += 1;
        }
        if(a[i] < b[i]) {
            score[1] += 1;
        }
    }
    
    return score;
}


//4 https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(array) {
    let sumVeryBigArray = 0;

    for(let i = 0; i < array.length;i++){
        sumVeryBigArray += array[i];
    }
    
    return sumVeryBigArray;
}

//5. https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    
    let negativeNumber = 0,
        zero = 0,
        positiveNumber = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeNumber += 1;
        }
        if (arr[i] > 0) {
            positiveNumber += 1;
        } 
        if (arr[i] === 0) {
            zero += 1;    
        }
    }
    
    console.log(positiveNumber/arr.length);
    console.log(negativeNumber/arr.length);
    console.log(zero/arr.length);
}

//6. https://www.hackerrank.com/challenges/staircase/problem?h_r=next-challenge&h_v=zen

function staircase(n) {
    const reshitka = '#',
        probil = ' ';
//1
    for (let i = 1; i < n; i++) {
        console.log(probil.repeat(n-i-1), reshitka.repeat(i));
    }
// 2     
//     let i = 1;
//     do {
//         console.log(probil.repeat(n-i-1), reshitka.repeat(i));
//         i++;
//     } while (i < n)
//3 
//     let i = 1;
//     while (i < n) {
//         console.log(probil.repeat(n-i-1), reshitka.repeat(i));
//         i++;
//     }

    console.log(reshitka.repeat(n))
}
