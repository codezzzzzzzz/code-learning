function game (playerAction) {
  const arr = ['rock', 'paper', 'scissor']
  const index = Math.floor(Math.random() * 3)
  const computerAction = arr[index]

  console.log(`我出了：${computerAction}`);
  

  if (playerAction === computerAction) {
    console.log('平局');
    return 0
  } else if (
    (playerAction === 'rock' && computerAction === 'scissor') || 
    (playerAction === 'paper' && computerAction === 'rock') || 
    (playerAction === 'scissor' && computerAction === 'paper')
  ) {
    console.log('你赢了');
    return 1
  } else {
    console.log('你输了');
    return -1
  }


}

module.exports = {
  game
}
