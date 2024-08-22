let bank = 100

const userStartBalanceElm = document.getElementById('bank')
const userBankElm = document.getElementById('bank')

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
  const team1Elm = document.getElementById('team1')
  team1Elm.innerText = team1Content
}

function drawTeam2() {
  let team2Content = ''
  for (let i = 0; i < players.length; i++) {
    let playersTeam2 = players[i]
    if (playersTeam2.teamNumber == 1) {
      // console.log('team2', playersTeam2);
      team2Content += playersTeam2.emoji
    }
  }
  // console.log('here are team 2 players', team2Content);
  const team2Elm = document.getElementById('team2')
  team2Elm.innerText = team2Content
}

// function drawBank() {

//   userStartBalanceElm.innerText = bank.toFixed(2)

//   drawBank()

// }

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

  let userBank = 0
  if (totalSkillTeam1 > totalSkillTeam2 == true) {
    userBank = bank + 5
    console.log('You WON! +$5.00', userBank);
  }
  else {
    userBank = bank - 5
    console.log('You LOST! -$5.00', userBank);
  }
  console.log('new bank balance: ', userBank);

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

  let userBank = 0
  if (totalSkillTeam2 > totalSkillTeam1 == true) {
    userBank = bank + 5
    console.log('You WON! +$5.00', userBank);
  }
  else {
    userBank = bank - 5
    console.log('You LOST! -$5.00', userBank);
  }
  console.log('new bank balance: ', userBank);

  userBankElm.innerText = userBank.toFixed(2)
}
