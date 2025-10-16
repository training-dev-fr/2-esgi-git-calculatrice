function sum(a,b){
    return a + b;
  }
  
  document.querySelector('#sum').addEventListener('click',(e) => {
      let a = document.querySelector('#value1').value;
      let b = document.querySelector('#value2').value;
      console.log(sum(a,b));
  })