// for (let i = 10; i <= 100; i += 10 ){
//     console.log(i)
// }

// class Welcome extends React.Component {
//   render() {
//     return <p> hello world</p>;
//   }
// }

// let Welcome = () => {
//   return <p> Hello world</p>;
// };

// let messages = [
//     "hey hows it going",
//     "im great thank you how about you",
//     "all good beenworking on my portfolio",
//     "same here",
//     "same there",
//     "same everywhere"
// ]

// let petet = "ik heb gewoon kaas nodig"
// messages.push(petet)

// for (let i = 0; i < messages.length; i +=1 ){
//     console.log(messages[i])
// }

// let cards = [7, 3, 9]

// for (let i =0; i <cards.length; i++ ){
//  console.log(cards[i])
// }

// let sentence = ["hello","my","name","is","derick","bank"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i ++){
//     greetingEl.textContent += sentence [i] + " "
// }

// let playerOne = 102
// let playerTwo = 107

// let getFastestRaceTime = () =>{
//     if (playerOne < playerTwo) {
//         return playerOne
//     }
//     else if (playerOne > playerTwo){
//         return playerTwo
//     }
//     else {
//         return playerOne
//     }
// }

// let totalRT = () =>{
//     return playerOne + playerTwo
// }

// let totalRaceTime = totalRT()
// console.log(totalRaceTime)

// let rollDice = () => {
//     let randomNumber = Math.floor( Math.random() * 6) +1
//     return randomNumber
//  }

//  console.log(rollDice() )

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false || hasHintsLeft === false){
//     return showSolution()
// }
// else {
//     return console.log("Try again")
// }

// function showSolution() {
//     console.log("Showing the solution")
// }

// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === false || likesStartups === false){
//     return recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like it!")
// }

// let course = {
//     title: "learn css grid for free",
//     lessons: 16,
//     creator: "Per Harold Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]

// }

// console.log(course.tags[1])

// let castle = {
//     rooms: 23,
//     location: "Ireland",
//     terrain: "flatland",
//     wifi: true,
//     roomview: ["option a would be a mountain view", "option b would be lakeview", "standard rooms have drive in view"]

// }

// console.log(castle.terrain, "+", castle.roomview[1])

// console.log(castle.terrain)
// console.log(castle.rooms)

// let largeCountries = ["China", "India", "USA", "Indonesia","Pakistan"]

// console.log("The 5 largest countries in the world:")
// for (let i = 0; i < largeCountries.length; i++){
//     console.log("- " + largeCountries[i])
// }

// let largeCountries = [
//     "India",
//     "USA",
//     "Indonesia",
//     "Monaco"];

// let wCcountry = "China"
// let country2 = "Pakistan"

// largeCountries.pop()
// largeCountries.push(country2);
// largeCountries.unshift(wCcountry)

// console.log("The 5 largest countries in the world:");
// for (let i = 0; i < largeCountries.length; i++) {
//   console.log("- " + largeCountries[i]);
// }

// let dayOfMonth = 14
// let weekDay = "Friday"

// if (dayOfMonth === 13 && weekDay === "Friday"){
//     return console.log("😱");
// }

// let hands = ["rock", "paper", "scissor"]

// let randomHand = () =>{
//     let randomIndex = Math.floor(Math.random() * hands.length)
//     return hands[randomIndex]
// }

// console.log(randomHand())

// let food = ["chinese", "japane", "turkish", "dutch", "itallian", "spanish"];

// let randomFood = () => {
//   let random = Math.floor(Math.random() * food.length);
//   return food[random];
// };

// console.log(randomFood());

// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊", "🍊", "🍎", "🍎", "🍊"];
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// let sortFruit = () => {
//     for (let i = 0; i < fruit.length; i++){
//    if (fruit[i] === "🍎")
//    appleShelf.textContent += "🍎";

//    else if (fruit[i] === "🍊")
//    orangeShelf.textContent += "🍊";
//     }

// }
// sortFruit()
