
document.querySelector('.verify2') .addEventListener('click', function () {
    const val1 = document.querySelector('.depozit').value;
    const val2 = document.querySelector('.perioada1').value;
    


let Calc = val1 * 0.01 * val2 / 365; 
let Suma = Calc + val1;

    console.log(val1);
    console.log(val2);

    
    

    let rez = `Pentru o suma de ${val1} lei pe o perioada de ${val2} zile, dobinda va fi de ${Calc} lei`
  
    document.querySelector('.testclasa1').textContent = rez;

    let rez1 = `Pentru o suma de ${val1} lei pe o perioada de ${val2} zile, in total va fi intoarsa suma de ${Calc} lei si ${val1} lei`
  
    document.querySelector('.testclasa2').textContent = rez1;

}) 


document.querySelector('.verify3') .addEventListener('click', function () {
    const val1 = document.querySelector('.depozit').value;
   
    


let Calc1 = val1 * 0.01 * 31 / 365; 
let Calc2 = val1 * 0.01 * 30 / 365;
let Calc3 = val1 * 0.01 * 29 / 366; 
let Calc4 = val1 * 0.01 * 28 / 365; 





    console.log(val1);
   
    let rez1 = `Pentru luna Octombrie - dobinda va fi de ${Calc1} lei`
  
    document.querySelector('.octombrie').textContent = rez1;

    let rez2 = `Pentru luna Noiembrie - dobinda va fi de ${Calc2} lei`
  
    document.querySelector('.noiembrie').textContent = rez2;

    let rez3 = `Pentru luna Decembrie - dobinda va fi de ${Calc1} lei`
  
    document.querySelector('.decembrie').textContent = rez3;

    let rez4 = `Pentru luna Ianuarie - dobinda va fi de ${Calc1} lei`
  
    document.querySelector('.ianuarie').textContent = rez4;

    let rez5 = `Pentru luna Februarie - dobinda va fi de ${Calc4} lei sau ${Calc3} lei`
  
    document.querySelector('.februarie').textContent = rez5;

    let rez6 = `Pentru luna Martie - dobinda va fi de ${Calc1} lei`
  
    document.querySelector('.martie').textContent = rez6;

    let rez7 = `Pentru luna Aprilie - dobinda va fi de ${Calc2} lei`
  
    document.querySelector('.aprilie').textContent = rez7;

    let rez8 = `Pentru luna Mai - dobinda va fi de ${Calc1} lei`
  
    document.querySelector('.mai').textContent = rez8;

    let rez9 = `Pentru luna Iunie - dobinda va fi de ${Calc2} lei`
  
    document.querySelector('.iunie').textContent = rez9;

    let rez10 = `Pentru luna Iulie - dobinda va fi de ${Calc1} lei`
  
    document.querySelector('.iulie').textContent = rez10;

    let rez11 = `Pentru luna August - dobinda va fi de ${Calc1} lei`
  
    document.querySelector('.august').textContent = rez11;

    let rez12 = `Pentru luna Septembrie - dobinda va fi de ${Calc2} lei`
  
    document.querySelector('.septembrie').textContent = rez12;
    

})