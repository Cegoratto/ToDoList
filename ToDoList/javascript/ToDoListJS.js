// JavaScript source code 

 const goalsArray = [];
 //document.querySelector('.changeGoals').addEventListener ("click", changeValue);  
 
 document.querySelector('.acceptButton').onclick = function buttonAccept () {
      context = document.querySelector('.goals').value;
      goalsArray.push(context);
      let lastGoals = goalsArray[goalsArray.length - 1];
      document.querySelector('.listGoals').innerHTML += '<div class="selectedGoals">' + '<label><input type ="checkbox" class = "chooseGoals" checked = "checked" onclick = "changeColor()"><span></span></label>' + lastGoals + '<label><input type ="button" class = "changeGoals" onclick = "changeValue()"><span></span></label>' + '<label><input type ="checkbox" class = "deleteGoals" onclick = "deleteDone()"><span></span></label>'  + "</div>";
      document.querySelector('.goals').value = "";    
      };

function changeColor() {
      for (let j = 0; j < goalsArray.length; j ++) {
       if ((document.querySelectorAll('.chooseGoals')[j].checked) == false) {
          document.querySelectorAll('.selectedGoals')[j].style.backgroundColor = "green";
          document.querySelectorAll('.selectedGoals')[j].style.textDecoration  = "line-through";
       } else {
         document.querySelectorAll('.selectedGoals')[j].style.backgroundColor = "red";
         document.querySelectorAll('.selectedGoals')[j].style.textDecoration  = "none";
       }
      }
     }
   
   function deleteDone () {
    for (let i = 0; i < goalsArray.length; i++) {
     if ((document.querySelectorAll(".deleteGoals")[i].checked) == true) {
         document.querySelectorAll('.selectedGoals')[i].remove();
         i --;
         delete goalsArray[i];
       }
      }
     }

   function changeValue(event) {
           // this.parentNode.querySelector('.selectedGoals').innerHTML = '<input class = "renameGoals" type="text" size="30">';
            event.Target.innerHTML = '<input class = "renameGoals" type="text" size="30">';          
           //this.parentnode.innerHTML = '<input class = "renameGoals" type="text" size="30">';
            //document.querySelector('.renameGoals')[index].value = goalsArray[index];   
         
     }