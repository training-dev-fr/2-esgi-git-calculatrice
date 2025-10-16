function substract(a,b){
    return a - b;
  }
  
  document.querySelectorAll('.action').forEach(button => button.addEventListener('click',(e) => {
    let a = document.querySelector('#value1').value;
    let b = document.querySelector('#value2').value;
    switch(e.target.dataset){
        case "sum":

        break;
        case "substract":
            console.log(substract(a,b));
            break;
    }
  }))