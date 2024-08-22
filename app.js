let bank = 100

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]

const userBankElm = document.getElementById('bank')
const team1Elm = document.getElementById('team1')
const team2Elm = document.getElementById('team2')

function drawTeam1() {
  let team1Content = ''
  for (let i = 0; i < players.length; i++) {
    let playersTeam1 = players[i]
    if (playersTeam1.teamNumber == 1) {
      // console.log('team1', playersTeam1);
      team1Content += playersTeam1.emoji
    }
  }
  // console.log('here are team 1 players', team1Content);

  team1Elm.innerText = team1Content
}


function drawTeam2() {
  let team2Content = ''
  for (let i = 0; i < players.length; i++) {
    let playersTeam2 = players[i]
    if (playersTeam2.teamNumber == 2) {
      // console.log('team2', playersTeam2);
      team2Content += playersTeam2.emoji
    }
  }
  // console.log('here are team 2 players', team2Content);

  team2Elm.innerText = team2Content
}



// Storing results returned from betTeam1() & betTeam2() & drawBank()
// let betTeam1Result = betTeam1()
// console.log(betTeam1Result);

// let betTeam2Result = betTeam2()
// console.log(betTeam2Result);

// let userBankUpdateBetTeam1 = drawBank()
// console.log(userBankUpdateBetTeam1);


// drawBank value 100
function drawInitialBank() {
  userBankElm.innerText = bank.toFixed(2)
}
// draws new bank value after bet 5 on team one
function drawBankUpdateBet5Team1() {
  if (betTeam1() == true) {
    bank += 5
  }
  else {
    bank -= 5
  }
  // console.log(bank);

  userBankElm.innerText = bank.toFixed(2)

  userBankBustedAndAlert()
}
function drawBankUpdateBet25Team1() {
  if (betTeam1() == true) {
    bank += 25
  }
  else {
    bank -= 25
  }
  // console.log(bank);

  userBankElm.innerText = bank.toFixed(2)

  userBankBustedAndAlert()
}
function drawBankUpdateBet100Team1() {
  if (betTeam1() == true) {
    bank += 100
  }
  else {
    bank -= 100
  }
  // console.log(bank);

  userBankElm.innerText = bank.toFixed(2)

  userBankBustedAndAlert()
}

function userBankBustedAndAlert() {
  if (bank <= 0) {
    alert('You went BUST!')
  }
}
// userBankBustedAndAlert()

// function creates a box for players.teamnumber1 and players.teamnumber2, determines each teams total skill, determines which team has greater total skill, returns 
function betTeam1() {
  const team1 = players.filter((players) => players.teamNumber == 1)
  const team2 = players.filter((players) => players.teamNumber == 2)

  // console.log('🏂 team 1', team1)
  // console.log('🎿 team 2', team2)

  let totalSkillTeam1 = 0
  for (let i = 0; i < team1.length; i++) {
    let player = team1[i]
    totalSkillTeam1 += player.skill
  }
  // console.log('total skill team 1', totalSkillTeam1);

  let totalSkillTeam2 = 0
  for (let i = 0; i < team1.length; i++) {
    let player2 = team2[i]
    totalSkillTeam2 += player2.skill
  }
  // console.log('total skill team 2', totalSkillTeam2);

  let userBetTeam1 = null
  if (totalSkillTeam1 > totalSkillTeam2 == true) {
    userBetTeam1 = true
    // console.log('You WON!');
  }
  else {
    userBetTeam1 = false
    // console.log('You LOST!');
  }
  // console.log('Did user win? ', userBetTeam1);
  return userBetTeam1
}

function betTeam2() {
  const team1 = players.filter((players) => players.teamNumber == 1)
  const team2 = players.filter((players) => players.teamNumber == 2)

  // console.log('🏂 team 1', team1)
  // console.log('🎿 team 2', team2)

  let totalSkillTeam1 = 0
  for (let i = 0; i < team1.length; i++) {
    let player = team1[i]
    totalSkillTeam1 += player.skill
  }
  // console.log('total skill team 1', totalSkillTeam1);

  let totalSkillTeam2 = 0
  for (let i = 0; i < team1.length; i++) {
    let player2 = team2[i]
    totalSkillTeam2 += player2.skill
  }
  // console.log('total skill team 2', totalSkillTeam2);

  let userBetTeam2 = null
  if (totalSkillTeam2 > totalSkillTeam1 == true) {
    userBetTeam2 = true
    // console.log('You WON!');
  }
  else {
    userBetTeam2 = false
    // console.log('You LOST!');
  }
  // console.log('Did user win?', userBet);
  return userBetTeam2
}



// NOTE invoking functions as the page loads
drawTeam1()
drawTeam2()
drawInitialBank()