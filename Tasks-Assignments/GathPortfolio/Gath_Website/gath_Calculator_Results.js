// Global control variables
var noteStates = {
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
  };
  
  // Gathering results access buttons
  let resetButton = document.getElementById('resetButton')
  let submitButton = document.getElementById('submitButton')

  // Upon submit button mouse click
function submit(noteStates){
    noteStates.butS = true
    console.log(noteStates)
    console.log('Submit button is set to ',noteStates.butS)
    noteStates.butS = true
    console.log('Submit button is now set to ',noteStates.butS)
    submitButton.style.backgroundColor = 'rgb(22, 50, 9)'
    submitButton.style.color = 'yellow'
    console.log(noteStates.noteStates)
  
    switch (noteStates){
      case noteStates.butAb:
        if (noteStates.butAb == true){
        boxAb.style.color = 'black'
        console.log(noteStates.butAb," is now black")
        }else{
          break
        }
      case noteStates[2]:
      if (noteStates[2] == true){
        submitButton.style.color = 'black'
      }else{
        break
      }  
      case noteStates[3]:
        if (noteStates[3] == true){
          submitButton.style.color = 'black'
        }else{
          break
        }  
      case noteStates[4]:
        if (noteStates[4] == true){
          submitButton.style.color = 'black'
        }else{
          break
        }  
      case noteStates[5]:
        if (noteStates[5] == true){
          submitButton.style.color = 'black'
        }else{
          break
        }  
      case noteStates[6]:
        if (noteStates[6] == true){
          submitButton.style.color = 'black'
        }else{
          break
        }  
      case noteStates[7]:
        if (noteStates[7] == true){
          submitButton.style.color = 'black'
        }else{
          break
        }  
      case noteStates[8]:
        if (noteStates[8] == true){
          submitButton.style.color = 'black'
        }else{
          break
      }
      case noteStates[9]:
        if (noteStates[9] == true){
          submitButton.style.color = 'black'
          }else{
            break
          }
      case noteStates[10]:
        if (noteStates[10] == true){
          submitButton.style.color = 'black'
          }else{
            break
          }
      case noteStates[11]:
        if (noteStates[11] == true){
          submitButton.style.color = 'black'
          }else{
            break
          }
      case noteStates[12]:
        if (noteStates[12] == true){
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
  