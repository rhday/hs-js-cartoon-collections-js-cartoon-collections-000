function dwarfRollCall(dwarves) {
  var i
  let answer=""
  for (i=0;i<dwarves.length;i++){
    answer += `${i+1}. ${dwarves[i]} `
    //answer += (i+1) + ". " + dwarves[i] +" "
  }
  return answer
}

function summonCaptainPlanet(planeteerCalls){
  var i
  let elements = []
  for (i=0;i<planeteerCalls.length;i++){
    var lower = planeteerCalls[i]
    var upper = lower.toUpperCase()
    elements.push(upper+"!")
  }
  return elements
}

function longPlaneteerCalls(words) {
  var i
  for(i=0;i < words.length; i++){
    
    if(words[i].length>4){
      return true
    }
  }
  return false
}

    

function findTheCheese (foods) {
  var i 
  for(i=0;i<foods.length;i++){
    if (foods[i]==='gouda'||foods[i]==='cheddar'||foods[i]==='camembert'){
      return foods[i]
    }
  }
  return 'no cheese!'
}
