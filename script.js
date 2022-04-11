const container= document.querySelector('.container');

let limit = 101;

for(let i = 1; i < limit; i++){
  const boxEl = document.createElement('div');
  boxEl.className = 'box';
  
  container.append(boxEl);
  
  if(i % 3 && i % 5){
    console.log(i);
    boxEl.append(i);
  } else if( i % 3 == 0 && i % 5 == 0 ){
    
    boxEl.append('FizzBuzz');
    boxEl.classList.add('box-fizzbuzz');
  }else if(i % 3 == 0){
   
    boxEl.append('Fizz');
    boxEl.classList.add('box-fizz');
  } else if(i % 5 == 0){
    
    boxEl.append('Buzz');
    boxEl.classList.add('box-buzz');
  }
  
}
