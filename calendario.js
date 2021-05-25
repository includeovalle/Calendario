const ActivarCalendario = document.getElementById('btnCalendario')
ActivarCalendario.addEventListener('click',()=>{
const main = document.getElementById('mainSeccion')
let divTitle = document.createElement('div')
  let para = document.createElement('p')
  para.id= 'parrafoTitulo'
  para.className+= " parrafoTitulo"
  
  main.innerHTML= ""
  main.style.display = "flex";
  main.appendChild(divTitle);

  divTitle.id = 'main-titulo'
  divTitle.className+= ' main-titulo';
    
//creacion del div ID = CALENDARIO
const containerCalendar =document.createElement('div')
containerCalendar.id = 'calendario'
containerCalendar.className+= ' container-calendar'
  main.appendChild(containerCalendar);

  //creacion del boton de navegacion backward del calendario
let back = function(){
    backBtn = document.createElement('button')
  backBtn.innerHTML = "&#8592"
  backBtn.id = 'btnBack'
  divTitle.appendChild(backBtn);
}
    
  //creacion del boton de navegacion backward del calendario
let fwd = function(){
fwdBtn= document.createElement('button')
  fwdBtn.innerHTML = "&#8594"
  fwdBtn.id = 'btnFwd'
  divTitle.appendChild(fwdBtn);
  }

    //secrea el div de los dias de la semana y se asignan a container calendar
  //inicia la insercion de los divs que contendran los datos de la semana
    const domingo =  document.createElement('div')
    domingo.innerHTML ='Domingo' 
    domingo.className+= ' dia-semana'

    const lunes= document.createElement('div')
    lunes.innerHTML= 'Lunes'; 
    lunes.className+= ' dia-semana'
    
    const martes=document.createElement('div')
    martes.innerHTML = 'Martes';
    martes.className+= ' dia-semana'

    const miercoles=document.createElement('div')
    miercoles.innerHTML = 'Miércoles';
    miercoles.className+= ' dia-semana'

    const jueves=document.createElement('div')
    jueves.innerHTML = 'Jueves';
    jueves.className+= ' dia-semana'
    
    const viernes=document.createElement('div')
    viernes.innerHTML = 'Viernes';
    viernes.className+= ' dia-semana'

    const sabado =document.createElement('div')
    sabado.innerHTML= 'Sábado'
    sabado.className+= ' dia-semana'

let semana = document.createElement('div')
   semana.id = 'semana'
    semana.append(lunes, martes,miercoles,jueves,viernes,sabado,domingo);
  function createSemana(){
    //se agrega la propiedad container al calendario
containerCalendar.appendChild(semana);
}//fin de la funcion semana 


//se agrega el mes al calendario
let nav = 0;
let clicked = null;
//let events = localstorage.getItem('events')?JSON.parse.localstorage.getItem('events'): [];
//se crea el array con el que se va a comparar por facilidad de escritura hazlo en ingles
//ya despues le pones la mascara en español
const diasDeSemana= ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'];
cale = document.getElementById('calendario')

function load(){
  const dt = new Date();
  if (nav!==0){
    dt.setMonth(new Date().getMonth() +nav)
  }

  
  const mes= dt.getMonth();
  const anio= dt.getFullYear();

  const primerDiaDelMes = new Date(anio, mes, 1);
  const diasEnElMes = new Date(anio, mes+1, 0).getDate();

  document.getElementById('parrafoTitulo').innerText = `${dt.toLocaleDateString('es-mx',{month:'long'})} ${anio}`;

  const fechaCadena = primerDiaDelMes.toLocaleDateString('en-us',{
    weekday:'long'
    ,year: 'numeric'
    ,month: 'numeric'
    ,day: 'numeric'
  });
  const paddingDay = diasDeSemana.indexOf(fechaCadena.split(', ')[0]);
cale.innerHTML=""
  //inserto la funcion de create semana para no perder los nombres de los dias
createSemana();

//insertar divs al calendario
  for(let i = 1;i<=paddingDay+diasEnElMes; i++){
const diaAgregado = document.createElement('div')
    diaAgregado.className += ' espacio-trabajo' 
    cale.appendChild(diaAgregado);
    if(i> paddingDay){
      diaAgregado.innerHTML = i- paddingDay;
    diaAgregado.addEventListener('click',()=>{
//funcion de creacion del area de trbajo veamos si podemos llamar funciones desde aqui
console.log("clickeado")
      console.log("anio: ",anio) 
      let zonaTrabajo = document.createElement('div');
  let menu = document.getElementById('toolToggle');
  menu.style.opacity= 1;

      let tituloMes = document.querySelector('.parrafoTitulo').innerText = `${dt.toLocaleDateString('es-mx',{month:'long'})}` + " ";
      zonaTrabajo.className+= ' dia-trabajo'
      zonaTrabajo.id= 'diaTrabajo'
//a zona trabajo se le hace el append del contador - los dias de
//padding para que muestre el mismo numero que el 
//elemento dentro del html
      zonaTrabajo.append(tituloMes, i-paddingDay)
      main.appendChild(zonaTrabajo);

    }) 
    /*fin del if */}else{
      diaAgregado.className+= 'diaPad';
    }
cale.appendChild(diaAgregado);
  }
}//fin de la funcion load
function botones() {
  document.getElementById('btnFwd').addEventListener('click', ()=>{
    nav ++;
    load();
  })

  document.getElementById('btnBack').addEventListener('click', ()=>{
    nav --;
    load();
  })
}//fin funcion botones


  divTitle.appendChild(para)
back();
//divTitle ESTA declarado aqui poara que el texto del mes aparezca en medio
//si lo declaro arriba de ala fucion back() queda antes de los botones
load();
fwd();
botones();

//Estilos y tal
//
//seccion main
main.style.height = '15vh';
main.style.width= '90vw';
main.style.position = 'relative';
main.style.left= '50%';
main.style.transform= 'translateX(-50%)';
main.style.display= 'flex';
main.style.flexWrap = 'wrap';

//seccion titulo del mes
divTitle.style.position = 'relative';
divTitle.style.width = '100%';
divTitle.style.marginTop = '4vh';
divTitle.style.marginLeft = '2vw';
divTitle.style.marginRight = '2vw';
divTitle.style.backgroundColor = 'palevioletred'
divTitle.style.display= 'flex';
divTitle.style.justifyContent = 'center';
divTitle.style.alignItems = 'center';

//contenedor dias de la semana
containerCalendar.style.width = '100%';

//dias de la  semana
semana.style.width = '100%'; 
semana.style.backgroundColor = 'goldenrod';
semana.style.display= 'flex';
semana.style.justifyContent = 'space-evenly';

para.style.weight = 'bold';
para.style.fontSize = '1.3rem';
}//fin de la funcion calendario
//
//
//
)
