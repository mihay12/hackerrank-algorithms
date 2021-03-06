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

//10 https://www.hackerrank.com/challenges/apple-and-orange/problem?h_r=next-challenge&h_v=zen

function countApplesAndOranges(startHome, endHome, locatedAppleTree, locatedOrangeTree, apples, oranges) {
    let countApple = 0,
        countOrange = 0,
        placeFallApple = 0,
        placeFallOrange = 0;
        
    for (let i = 0; i < apples.length; i++) {
        placeFallApple = apples[i] + locatedAppleTree;
        
        if (placeFallApple >= startHome && placeFallApple <= endHome) {
            countApple++;
        }
    }
    
    for (let i = 0; i < oranges.length; i++) {
        placeFallOrange = oranges[i] + locatedOrangeTree;
        
        if ( placeFallOrange >= startHome && placeFallOrange <= endHome) {
            countOrange++;
        }
    }
    console.log(countApple);
    console.log(countOrange);
}

//11 https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
    let time = s.slice(0,8);
    
    if(s.slice(8) === 'PM'){
        time = time.split(":");
        time[0] = Number(time[0]) + 12;
        time = time.toString();
        time = time.replace(',', ':');
        time = time.replace(',', ':');
        if (time.slice(0,2) === '24') {
            time = time.replace('24', '12');
        }
    }
    
    if(s.slice(8) === 'AM' && s.slice(0,2) === '12'){
        time = time.split(":");
        time = time.toString();
        time = time.replace('12', '00');
        time = time.replace(',', ':');
        time = time.replace(',', ':');
    }
    
    return time;
}

//12 https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
    let differenceDiagonal = 0,
        sumMainDiagonal = 0,
        sumOpossiteDiagonal = 0;
        
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++){
            if (i === j) {
                sumMainDiagonal += arr[i][j];   
            }
            
            if (i === arr.length - j - 1) {
                sumOpossiteDiagonal += arr[i][j];
            }
        }
    }
    
    differenceDiagonal = Math.abs(sumMainDiagonal - sumOpossiteDiagonal);
    
    return differenceDiagonal;
}

//13 https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
    let minRecordScores = 0,
        maxRecordScores = 0,
        maxScores = scores[0],
        minScores = scores[0],
        resultScores = [];
                
        for (let i = 0; i < scores.length; i++) {
            if (minScores < scores[i]) {
                minRecordScores++;
                minScores = scores[i];
            }
            if (maxScores > scores[i]) {
                maxRecordScores++;
                maxScores = scores[i];
            }
        }
        
        resultScores.push(minRecordScores);
        resultScores.push(maxRecordScores);
        
        return resultScores;
}

//14 https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(n, k, arr) {
    let divisibleSumPairs = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if(i < j) {
                let sum = arr[i] + arr[j];
                if (sum % k === 0) {
                    divisibleSumPairs++;
                }
            }
        }
    }
    return divisibleSumPairs;
}

//15 https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
    if (v1 < v2 && x1 < x2) {
        return 'NO';
    }
    
    for (let i = 0; i <= 10000; i++){
        x1 += v1;
        x2 += v2;
        
        if (x1 === x2) {
            return 'YES';
        }
    }
    
    return 'NO';
}

//16 https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
    let sum = 0;
    
    for(let i = 0; i < bill.length; i++) {
        sum += bill[i];
    }
    
    sum -= bill[k];
    sum /= 2;
    
    if (b - sum === 0) {
        console.log('Bon Appetit');
    } else {
        console.log(b - sum);
    }
}

//17 https://www.hackerrank.com/challenges/sock-merchant/problem?h_r=next-challenge&h_v=zen

function sockMerchant(n, ar) {
    let result = {},
    counterSocks = 0;
    
    for (let i = 0; i < n; i++) {
      let a = ar[i];
      if (result[a] !== undefined) {
        result[a]++;
      } else {
        result[a] = 1;
      }
    }

    for (let key in result) {
      if (result[key] % 2 === 0) {
          counterSocks += result[key] / 2;
      } 
      if (result[key] - 1 > 0 && (result[key] - 1) % 2 === 0) {
        counterSocks += (result[key] - 1) / 2;;
      }
    }
  
    return counterSocks; 
}

//18 https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
    return Math.abs(x - z) < Math.abs(y - z) ? 'Cat A' :
           Math.abs(x - z) > Math.abs(y - z) ? 'Cat B' : 
           'Mouse C';
}

//19 https://www.hackerrank.com/challenges/extra-long-factorials/problem

function generateNumberFactorial(n) {
  n = BigInt(n);

  return n === 0n ? 1n : n * generateNumberFactorial(n - 1n);
};

function extraLongFactorials(n) {
    console.log(generateNumberFactorial(n).toString());
}

//20 https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arr) {
  let max = arr[0];
  let finalArr = arr.filter(i => i == 0);

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  for (let idx = 0; idx <= max; idx++){
    let temArr = arr.filter(i => i == idx);

    if (finalArr.length < temArr.length){
      finalArr = [...temArr];
    }
  }

  return finalArr[0];
}

//21 https://www.hackerrank.com/challenges/day-of-the-programmer/problem?h_r=next-challenge&h_v=zen
//21.1
function dayOfProgrammer(year) {
  if (year == "1918") {
    return `26.09.${year}`;
  }
  if (
    year % 400 == 0 ||
    (year % 4 == 0 && !(year % 100 == 0)) ||
    (year < 1918 && year % 4 == 0)
  ) {
    return `12.09.${year}`;
  }

  return `13.09.${year}`;
}

//21.2
function dayOfProgrammer(year) {
  return year == "1918"
    ? `26.09.${year}`
    : year % 400 == 0 ||
      (year % 4 == 0 && !(year % 100 == 0)) ||
      (year < 1918 && year % 4 == 0)
    ? `12.09.${year}`
    : `13.09.${year}`;
}

//22 https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k, height) {
    let maxHeight = height[0];
    
    for (let i = 0; i < height.length; i++) {
        if (maxHeight < height[i]) {
            maxHeight = height[i];
        }
    }

    return k > maxHeight ? 0 : maxHeight - k;
}

//23 https://www.hackerrank.com/challenges/utopian-tree/problem

function utopianTree(n) {
    let heightTree = 0;
    
    if (n === 0) return 1;
    
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            heightTree++;
        }
        
        if (i % 2 !== 0) {
            heightTree*=2;
        }
    }
    
    return heightTree;
}

//24 https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) {
    let maxNum = 0;
    
    for (let i = 0; i < word.length; i++) {
        if (maxNum < h[word[i].charCodeAt(0) - 97]) {
            maxNum = h[word[i].charCodeAt(0) - 97];
        }
    }

    return maxNum * word.length;
}

//25 https://www.hackerrank.com/challenges/angry-professor/problem

function angryProfessor(confirmCountStudent, arrayStudent) {
    let countStudent = 0;
    
    for(let i = 0; i < arrayStudent.length; i++) {
        if (arrayStudent[i] <= 0) {
            countStudent++;
        }    
    }
    
    return countStudent < confirmCountStudent ? 'YES' : 'NO';
}

//26
