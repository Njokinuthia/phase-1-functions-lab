
//pick up point distance using if else

function distanceFromHqInBlocks(block){
  if(block > 42){
    return block-42
  }
  else{
    return 42-block
  }  
}

// //pick up point distance using ternary
// let distanceFromHqInBlocks = (block)=>block>42?block-42:42-block;

console.log(distanceFromHqInBlocks(6))