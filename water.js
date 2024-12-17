function add(){
      
         let element = document.getElementById('leaveCode');
          let ele = document.getElementById('leave');
      if ( ele.value =='1'){
  if ( element.value =='1'){
       var a =Number( document.getElementById('input1').value);
          
   document.getElementById('input2').value=  a*(1.2/30)  ;
        
  }
  if ( element.value =='2'){
       var a =Number( document.getElementById('input1').value);
          
   document.getElementById('input2').value= a*(1.2/30) +0.2 ;
        
  }
  if ( element.value =='3'){
       var a =Number( document.getElementById('input1').value);
          
   document.getElementById('input2').value=  a*(1.2/30) +0.4 ;
        
  }
  if ( element.value =='4'){
       var a =Number( document.getElementById('input1').value);
          
   document.getElementById('input2').value=  a*(1.2/30)+0.6 ;
        
  }
  if ( element.value =='5'){
       var a =Number( document.getElementById('input1').value);
          
   document.getElementById('input2').value=  a*(1.2/30)+0.8 ;
        
  }}
   if ( ele.value =='2'){
  if ( element.value =='1'){
       var a =Number( document.getElementById('input1').value);
          
   document.getElementById('input2').value=  a*(1.2/30) +0.2 ;
        
  }
  if ( element.value =='2'){
       var a =Number( document.getElementById('input1').value);
          
   document.getElementById('input2').value= a*(1.2/30) +0.4 ;
        
  }
  if ( element.value =='3'){
       var a =Number( document.getElementById('input1').value);
          
   document.getElementById('input2').value=  a*(1.2/30) +0.6 ;
        
  }
  if ( element.value =='4'){
       var a =Number( document.getElementById('input1').value);
          
   document.getElementById('input2').value=  a*(1.2/30)+0.8 ;
        
  }
  if ( element.value =='5'){
       var a =Number( document.getElementById('input1').value);
          
   document.getElementById('input2').value=  a*(1.2/30)+1 ;
        
  }}
   if ( ele.value =='3'){
  if ( element.value =='1'){
       var a =Number( document.getElementById('input1').value);
          
   document.getElementById('input2').value=  a*(1.2/30) +0.3 ;
        
  }
  if ( element.value =='2'){
       var a =Number( document.getElementById('input1').value);
          
   document.getElementById('input2').value= a*(1.2/30) +0.5 ;
        
  }
  if ( element.value =='3'){
       var a =Number( document.getElementById('input1').value);
          
   document.getElementById('input2').value=  a*(1.2/30) +0.7 ;
        
  }
  if ( element.value =='4'){
       var a =Number( document.getElementById('input1').value);
          
   document.getElementById('input2').value=  a*(1.2/30)+0.9 ;
        
  }
  if ( element.value =='5'){
       var a =Number( document.getElementById('input1').value);
          
   document.getElementById('input2').value=  a*(1.2/30)+0.11 ;
        
  }}
       
       
       
   }
 
const listers = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const smallCups = document.querySelectorAll('.cup-small');
const cups = document.getElementById("cups");
//converting NodeList from querySelectorAll() to an array
let smallCupsArr = Array.from(smallCups);
let goal = 2;

minus.addEventListener("click", () => updateGoal("-"));
plus.addEventListener("click", () => updateGoal("+"));

function updateGoal(sign) {
    //take plus or minus string sign
    if (sign == "+" && goal < 3.75) {
        goal += 0.25;
        addCup();
    }
    else if (sign == "-" && goal > 2){ 
        goal -= 0.25;
        deleteCup();
    }
    document.getElementById("goal").innerText = goal;
    listers.innerText = `${goal}L`;
    updateBigCup();
    console.log(smallCupsArr);

}

const addCup = () => {
    const newCup = document.createElement('div');
    newCup.classList.add("cup", "cup-small");
    const newContent = document.createTextNode("250 ml");
    newCup.appendChild(newContent);
    const INDEX = smallCupsArr.length;
    newCup.addEventListener('click', () => highlightCups(INDEX))
    cups.appendChild(newCup);
    smallCupsArr.push(newCup);
}

const deleteCup = () => {
    cups.removeChild(cups.lastChild);
    smallCupsArr.pop();
}


smallCupsArr.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if (idx === smallCupsArr.length - 1 && smallCupsArr[idx].classList.contains("full")) idx--;
    else if(smallCupsArr[idx].classList.contains('full') && !smallCupsArr[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCupsArr.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCupsArr.length;

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${Math.round(fullCups / totalCups * 100)}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        listers.innerText = `${goal - (250 * fullCups / 1000)}L`
    }
}
