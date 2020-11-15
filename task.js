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

//7 https://www.hackerrank.com/challenges/mini-max-sum/problem
//7.1

function miniMaxSum(arr) {
    arr.sort( (a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        else return 0;
    });
    
    let sumMini = 0,
        sumMax = 0;
    const arrMini = [...arr],
        arrMax = [...arr];
          
    arrMini.pop();
    for (let i = 0; i < arrMini.length; i++){
        sumMini += arrMini[i];
    }

    arrMax.shift();
    for (let i = 0; i < arrMax.length; i++){
        sumMax += arrMax[i];
    }
    console.log(sumMini, sumMax);
}

//7.2
function miniMaxSum(arr) {
let sumMini = 0,
        sumMax = 0,
        posMinEl = 0,
        posMaxEl = 0,
        firstMinEl = arr[0],
        firstMaxEl = arr[0];
    const arrMax = [...arr],
        arrMini = [...arr];
    
    for (let i = 0; i < arr.length; i++) {     
        if (firstMinEl > arr[i]) {
            firstMinEl = arr[i];
            posMinEl = i;
        }
        
        if (firstMaxEl < arr[i]) {
            firstMaxEl = arr[i];
            posMaxEl = i;
        }
    }

    let delMaxEl = arrMini.splice(posMaxEl, 1);
    for (let i = 0; i < arrMini.length; i++) {
        sumMini += arrMini[i];
    }

    arrMax.splice(posMinEl, 1).unshift(delMaxEl);
    for (let i = 0; i < arrMax.length; i++) {
        sumMax += arrMax[i];
    }
    
    console.log(sumMini, sumMax);
}

//8 https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
    let longCandel = candles[0];
    for (let i = 0; i < candles.length; i++) {
        if (longCandel < candles[i]){
            longCandel = candles[i];
        }
    }
    
    const countLongCandels = candles.filter( candel => candel === longCandel);
    
    return countLongCandels.length;
}

//9 https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            if (grades[i] % 5 !== 0) {
                if ((grades[i] + 2) % 5 === 0){
                    grades[i] += 2;
                }
                if ((grades[i] + 1) % 5 === 0){
                    grades[i] += 1;
                }
            }  
        }  
    }
    return grades;
}

//10
