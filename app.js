let answer= ''

let counter = 0



const questionsList = [
 ['How many planets are in the Solar System?'],
 ['How many continents are there?'],
 ['How many legs does an insect have?'],
 ['What year was JavaScript created?']
]


const answerList = [
['8'],
['6'],
['8'],
['1995']
]

let correctAnswers = []
let incorrectAnswers = []

for ( let i = 0; i < questionsList.length;i++ ){
  
  answer = prompt(`${questionsList[i]}`)
  console.log(answer)
  if (answer==answerList[i]){
    correctAnswers.push(questionsList[i])
    
    counter+=1
    console.log(counter)
  }
   else{
     incorrectAnswers.push(questionsList[i])
     
   }
}
 
 

console.log(correctAnswers, incorrectAnswers)

let rightResponses = (arr) => {
  let correctItems = ''
  for(let i = 0; i<arr.length;i++){
     correctItems+=`<li> ${arr[i]} </li>`
    
  }
  return correctItems
}


let wrongResponses = (arr) => {
  let incorrectItems = ''
  for(let i =0; i<arr.length;i++){
    incorrectItems += `<li>${arr[i]}</li>`
  }
  return incorrectItems
}

document.querySelector('header').innerHTML = `<h1>You've got ${counter} correct answers!</h1>`
document.querySelector('main').innerHTML = `<h1 style="color:green">You've got these questions right:</h1>
                                            <ol>${rightResponses(correctAnswers)}<ol>

                                            <h1 style="color:red">You've got these questions wrong:</h1>
                                            <ol>${wrongResponses(incorrectAnswers)}</ol>
                                             `


