// Global control variables
/*var noteStates = {
    butS: false,
    butAb: false,
    butA: false,
    butBb: false,
    butB: false,
    butC: false,
    butDb: false,
    butD: false,
    butEb: false,
    butE: false,
    butF: false,
    butGb: false,
    butG: false
  };*/
  
  // Gathering results access buttons
/*  let resetButton = document.getElementById('resetButton')
  let submitButton = document.getElementById('submitButton')
*/
  // Upon submit button mouse click
function submit(noteStates){
    noteStates.butS = true
    console.log(noteStates)
    console.log('Submit button is set to ',noteStates.butS)
    console.log('Submit button is now set to ',noteStates.butS)
    submitButton.style.backgroundColor = 'rgb(22, 50, 9)'
    submitButton.style.color = 'yellow'
    console.log(noteStates.noteStates)
  
    switch (noteStates){
      case noteStates.butAb:
        if (noteStates.butAb === true){
        boxAb.style.color = 'black'
        console.log(noteStates.butAb," is now black")
        }else{
          break
        }
      case noteStates.butA:
      if (noteStates.butA === true){
        submitButton.style.color = 'black'
      }else{
        break
      }  
      case noteStates.butBb:
        if (noteStates.butBb === true){
          submitButton.style.color = 'black'
        }else{
          break
        }  
      case noteStates.butB:
        if (noteStates.butB === true){
          submitButton.style.color = 'black'
        }else{
          break
        }  
      case noteStates.butC:
        if (noteStates.butC === true){
          submitButton.style.color = 'black'
        }else{
          break
        }  
      case noteStates.butDb:
        if (noteStates.butDb === true){
          submitButton.style.color = 'black'
        }else{
          break
        }  
      case noteStates.butD:
        if (noteStates.butD === true){
          submitButton.style.color = 'black'
        }else{
          break
        }  
      case noteStates.butEb:
        if (noteStates.butEb === true){
          submitButton.style.color = 'black'
        }else{
          break
      }
      case noteStates.butE:
        if (noteStates.butE === true){
          submitButton.style.color = 'black'
          }else{
            break
          }
      case noteStates.butF:
        if (noteStates.butF === true){
          submitButton.style.color = 'black'
          }else{
            break
          }
      case noteStates.butGb:
        if (noteStates.butGb === true){
          submitButton.style.color = 'black'
          }else{
            break
          }
      case noteStates.butG:
        if (noteStates.butG === true){
          submitButton.style.color = 'black'
          }else{
            break
          }
    return noteStates 
    }
  }

  // Upon reset button mouse click
function reset(){
    resetButton.addEventListener('mouseleave', function run(){
      submitButton.style.background = 'green'
      submitButton.style.color = 'black'
    })
  }
  