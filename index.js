// //pick up point distance using ternary
// let distanceFromHqInBlocks = (block)=>block>42?block-42:42-block;

//pick up point distance using if else
function distanceFromHqInBlocks(block){
  if(block > 42){
    return block-42
  }
  else{
    return 42-block
  }  
}

let blocks = distanceFromHqInBlocks(43);
console.log(blocks)


// Convert the blocks to feet 
function distanceFromHqInFeet(block){
  if(block > 42){
    return (block-42) * 264
  }
  else{
    return (42-block) * 264
  } 
}
console.log(distanceFromHqInFeet(34))

// distanceTravelledInFeet
function distanceTravelledInFeet(block1,block2){
  if(block1 > block2){
    return (block1-block2) * 264
  }
  else{
    return (block2-block1) * 264
  } 
}

console.log(distanceTravelledInFeet(43,48))
