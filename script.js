/*

// Q. 5. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.


const insertDashes = (input) => {
    const str = input.toString();
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if (i < str.length - 1 && str[i] % 2 === 0 && str[i + 1] % 2 === 0 && str[i + 1] !== "0") {
            result += "-";
        }
    }
    return result;
}
const inputNum = '025468';
console.log(insertDashes(inputNum));

*/

/*

// Q. 7. Create a timer whose by default value is 10 and value should decrease by 1 per second

let timerValue = 10;

const startTimer = () => {

    console.log(timerValue);
    timerValue--;

    if (timerValue < 0) {
        clearInterval(timer);
        console.log("Time's up!");
    }

}

const timer = setInterval(() => {
    startTimer();
}, 1000)

*/



// Question 1. & Question 11.

const arr1 = [
    { age: 8, name: 'Hman', id: 1 },
    { age: 9, name: 'Iman', id: 2 },
    { age: 9.5, name: 'Kman', id: 3 },
    { age: 10, name: 'Jman', id: 4 }
];

const arr2 = [
    { id: 1, edu: 'BCom' },
    { id: 1, edu: 'Diploma' },
    { id: 2, edu: 'BSc' },
    { id: 2, edu: 'BA' },
    { id: 3, edu: 'MSc' },
    { id: 4, edu: 'BTech' }
];

const eduMap = arr2.reduce((map, { id, edu }) => {

    if (!map[id]) {
        map[id] = [];
    }
    map[id].push(edu);
    return map;
}, {});

const result = arr1.map(({ name, id }) => {
    return { id, name, qualification: eduMap[id] || [] };
});

console.log(result);



/*

// Question 2.


let listData = [
    { id: 1, name: 'Discover Music' },
    { id: 2, pid: 1, name: 'Hot Singles' },
    { id: 3, pid: 1, name: 'Rising Artists' },
    { id: 4, pid: 1, name: 'Live Music' },
    { id: 6, pid: 1, name: 'Best of 2017 So Far' },
    { id: 7, name: 'Sales and Events' },
    { id: 8, pid: 7, name: '100 Albums' },
    { id: 9, pid: 7, name: 'Hip-Hop and R&B Sale' },
    { id: 10, pid: 7, name: 'CD Deals' },
    { id: 11, name: 'Categories' },
    { id: 12, pid: 11, name: 'Songs' },
    { id: 13, pid: 11, name: 'Best Selling Albums' },
    { id: 14, pid: 11, name: 'New Releases' },
    { id: 15, pid: 11, name: 'Best Selling Songs' },
    { id: 16, name: 'MP3 Albums' },
    { id: 17, pid: 16, name: 'Rock' },
    { id: 18, pid: 16, name: 'Gospel' },
    { id: 19, pid: 16, name: 'Latin Music' },
    { id: 20, pid: 16, name: 'Jazz' },
    { id: 21, name: 'More in Music' },
    { id: 22, pid: 21, name: 'Music' },
    { id: 22, pid: 21, name: 'Music Trade-In' },
    { id: 23, pid: 21, name: 'Redeem a Gift Card' },
    { id: 24, pid: 21, name: 'Band T-Shirts' }
  ];

  const map = new Map();
  listData.forEach(item => {
    if (item.pid) {
      if (!map.has(item.pid)) {
        map.set(item.pid, []);
      }
      map.get(item.pid).push(item);
    }
  });

  const result = listData
    .filter(item => !item.pid)
    .map(item => {
      const children = map.get(item.id) || [];
      return {
        id: item.id,
        name: item.name,
        childs: children
      };
    });

  console.log(JSON.stringify(result, null, 2));

*/

/*
// Question 3.

const arrNum = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const result = arrNum.map(subArr => {
    const product = subArr.reduce((acc, num) => acc * num, 1);

    const fact = (product);

    return [fact];
  });

  console.log(result);

  */


/*
// Question 4.

const arr = [1, 2, 3, [5, [6, 7], 8], 9];

function flatten(arr) {
let result = [];
arr.forEach(item => {
  if (Array.isArray(item)) {
    result = result.concat(flatten(item));
  } else {
    result.push(item);
  }
});
return result;
}
 
console.log(flatten(arr));
 
*/

/*
// Question 5.

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const groupedInventory = inventory.reduce((acc, item) => {
  if (!acc[item.type]) {
    acc[item.type] = [];
  }
  acc[item.type].push(item);
  return acc;
}, {});

console.log(groupedInventory);

*/


/*
// Question 6 & 10.

function startTimer() {
 
  let userInput =7;

  if (isNaN(userInput) || userInput < 1 || userInput > 100) {
      console.log("Invalid input! Please enter a number between 1 and 100.");
      return;
  }

  let timeLeft = parseInt(userInput);

  function updateTimer() {
      if (timeLeft >= 0) {
          console.log(timeLeft + " seconds remaining");
          timeLeft--;
      } else {
          clearInterval(timerInterval);
          console.log("Time's up!");
      }
  }

  const timerInterval = setInterval(updateTimer, 1000);
}

startTimer();

*/


/*
// Question 8 .


function sumOfDiagonals(matrix) {
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
      primaryDiagonalSum += matrix[i][i];
      secondaryDiagonalSum += matrix[i][n - 1 - i];
  }

  const totalSum = primaryDiagonalSum + secondaryDiagonalSum;

  console.log("Primary Diagonal Sum:", primaryDiagonalSum);
  console.log("Secondary Diagonal Sum:", secondaryDiagonalSum);
  console.log("Total Sum of Diagonals:", totalSum);

  return totalSum;
}

const matrix = [
  [10, 1, 20, 40, 20],
  [10, 1, 21, 40, 20],
  [10, 1, 40, 40, 20],
  [10, 1, 30, 40, 20],
  [10, 1, 60, 40, 20]
];

sumOfDiagonals(matrix);

*/

/*

// Question 9.

function convertTo12HourFormat(time24) {

  let [hours, minutes] = time24.split(':');

  hours = parseInt(hours);

  let period = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;

  if (hours === 0) {
      hours = 12;
  }

  minutes = minutes.padStart(2, '0');

  return `${hours}:${minutes} ${period}`;
}

console.log(convertTo12HourFormat("19:30"));

*/

