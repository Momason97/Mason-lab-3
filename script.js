"use strict";

const submission = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

//const addSumbission = (array, newName, newScore, newDate) => {
//    let newPassedProperty = null
//    if(newScore >= 60){
//       newPassedProperty = true
//   } else {
//       newPassedProperty = false
//   }
// const newSubmission = {
//     name: newName,
//     score: newScore,
//    date: newDate,
//   passed: newPassedProperty
// };
// array.push(newSubmission);
//};
// 2
const addSumbission = (array, newName, newScore, newDate) => {
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  });
};
//addSumbission(submission, "Mo", 71, "2022-01-06");
console.log(submission);
// 3
const deletedSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
//deletedSubmissionByIndex(submission, 1);
console.log(submission);
// 4
const deletedSubmissionByName = (array, nameParam) => {
  const index = array.findIndex((item) => {
    return item.name === nameParam;
  });
  array.splice(index, 1);
};
//deletedSubmissionByName(submission, "Jill");
console.log(submission);
// 5
const editSubmission = (array, index, score) => {
  array[index].score = score;
  if (score >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
};
//editSubmission(submission, 3, 40);
console.log(submission);
// 6
const findSubmissionByName = (array, name) => {
  const index = array.find((item) => {
    return item.name === name;
  });
  if (!index) {
    return `No name found`;
  } else {
    return index;
  }
};
console.log(findSubmissionByName(submission, "Jane"));

// 7
const findLowestScore = (array) => {
  return array.forEach((item) => {});
};

//8
for (const findAverageScore of array.score) {
  console.log();
}

//9

//10
const filter90AndAbove = (array) => {
  return array.submission((item) => {
    return item.score >= 90;
  });
};
console.log();
