function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i=0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  } 
  return array;
}

function johnLennonFacts(facts){
<<<<<<< HEAD
  var array =[];
  let i=0;
  while(i<facts.length){
    array.push(`${facts[i]}!!!`)
    i ++
  }
  return array 
=======
  let i=0;
  while(i<facts.length){
    `${facts[i]} + !!!`
    i ++
  }
  return facts
>>>>>>> c975dbfee5042ebcb0b062f620c52a573a57de5a
}

function iLoveTheBeatles(num){
  var array =[];
  let i=0;
  do {
    array.push("I love the Beatles!")
    num++
  }
  while (num <15);
  return array
}
