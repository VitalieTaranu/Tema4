// Credit
document.querySelector('.verify') .addEventListener('click', function () {
    const valoare1 = document.querySelector('.imprumut').value;
    const valoare2 = document.querySelector('.perioada').value;
    


let Calculator = valoare1 * 0.046 * valoare2 / 365; 


    console.log(valoare1);
    console.log(valoare2);
    

    let rezultat = `Pentru o suma de ${valoare1} lei pe o perioada de ${valoare2} zile, dobinda va fi de ${Calculator} lei`
  
    document.querySelector('.testclasa').textContent = rezultat;

    let rezultat1 = `Pentru o suma de ${valoare1} lei pe o perioada de ${valoare2} zile, in total va fi intoarsa suma de ${Calculator} lei si ${valoare1} lei`
  
    document.querySelector('.testclasa1').textContent = rezultat1;

}) 


document.querySelector('.verify1') .addEventListener('click', function () {
    const valoare1 = document.querySelector('.imprumut').value;
    const valoare2 = document.querySelector('.perioada').value;
    


let Calculator1 = valoare1 * 0.046 * 31 / 365; 
let Calculator2 = valoare1 * 0.046 * 30 / 365;
let Calculator3 = valoare1 * 0.046 * 29 / 366; 
let Calculator4 = valoare1 * 0.046 * 28 / 365; 
let Suma = valoare1 / valoare2;


    console.log(valoare1);
    console.log(Calculator1);
    console.log(Suma);
   
    let rezultat1 = `Pentru luna Octombrie - dobinda va fi de ${Calculator1} lei plus ${Suma} lei, in total ${Calculator1 + Suma} lei`
  
    document.querySelector('.octombrie').textContent = rezultat1;

    let rezultat2 = `Pentru luna Noiembrie - dobinda va fi de ${Calculator2} lei plus ${Suma} lei, in total ${Calculator2 + Suma} lei`
  
    document.querySelector('.noiembrie').textContent = rezultat2;

    let rezultat3 = `Pentru luna Decembrie - dobinda va fi de ${Calculator1} lei plus ${Suma} lei, in total ${Calculator1 + Suma} lei`
  
    document.querySelector('.decembrie').textContent = rezultat3;

    let rezultat4 = `Pentru luna Ianuarie - dobinda va fi de ${Calculator1} lei plus ${Suma} lei, in total ${Calculator1 + Suma} lei`
  
    document.querySelector('.ianuarie').textContent = rezultat4;

    let rezultat5 = `Pentru luna Februarie - dobinda va fi de ${Calculator4} lei sau ${Calculator3} lei plus ${Suma} lei, in total ${Calculator4 + Suma} lei sau  ${Calculator3 + Suma} lei`
  
    document.querySelector('.februarie').textContent = rezultat5;

    let rezultat6 = `Pentru luna Martie - dobinda va fi de ${Calculator1} lei plus ${Suma} lei, in total ${Calculator1 + Suma} lei`
  
    document.querySelector('.martie').textContent = rezultat6;

    let rezultat7 = `Pentru luna Aprilie - dobinda va fi de ${Calculator2} lei plus ${Suma} lei, in total ${Calculator2 + Suma} lei`
  
    document.querySelector('.aprilie').textContent = rezultat7;

    let rezultat8 = `Pentru luna Mai - dobinda va fi de ${Calculator1} lei plus ${Suma} lei, in total ${Calculator1 + Suma} lei`
  
    document.querySelector('.mai').textContent = rezultat8;

    let rezultat9 = `Pentru luna Iunie - dobinda va fi de ${Calculator2} lei plus ${Suma} lei, in total ${Calculator2 + Suma} lei`
  
    document.querySelector('.iunie').textContent = rezultat9;

    let rezultat10 = `Pentru luna Iulie - dobinda va fi de ${Calculator1} lei plus ${Suma} lei, in total ${Calculator1 + Suma} lei`
  
    document.querySelector('.iulie').textContent = rezultat10;

    let rezultat11 = `Pentru luna August - dobinda va fi de ${Calculator1} lei plus ${Suma} lei, in total ${Calculator1 + Suma} lei`
  
    document.querySelector('.august').textContent = rezultat11;

    let rezultat12 = `Pentru luna Septembrie - dobinda va fi de ${Calculator2} lei plus ${Suma} lei, in total ${Calculator2 + Suma} lei`
  
    document.querySelector('.septembrie').textContent = rezultat12;

}) 



