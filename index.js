console.log("----Snake Water Gun Game----\nS for Snake\nW for Water\nG for Gun")

let i=8
let c=0
let u=0
while(i>0){
 console.log(`You have ${i} chances !`)
 let user=prompt("Enter Yout Choice 'S/W/G': ")
 let cpuI=Math.floor(Math.random() * 3);
 let item={
   0:"S",
   1:"W",
   2:"G"
 }
 
   console.log("CPU :",item[cpuI])
  /* console.log(item[0])
   console.log(item[1])
   console.log(item[2])
 */
  let cpu=item[cpuI]
  if(cpu==user){
    console.log("tie! No point")
  }
  else if(cpu=="S"){
    if(user=="W"){
      console.log("CPUwon point")
      c++;
    }else if(user=="G"){
      console.log("You won point")
      u++;
    }
  }
  else if(cpu=="W"){
    if(user=="S"){
      console.log("You won point")
      u++;
    }else if(user=="G"){
      console.log("CPU won point")
      c++;
    }
  }
  else if(cpu=="G"){
    if(user=="W"){
      console.log("You won point")
      u++;
    }else if(user=="S"){
      console.log("CPU won point")
      c++;
    }
  }
  i--
}
console.log(`CPU :${c} Points`)
console.log(`Your :${u} Points`)
if(c>u){
  console.log("CPU WIN")
}
else{
  console.log("YOU WIN")
}

