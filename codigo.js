//Cuantos perfiles hay en total en la pagina
let cant_perfil=3;

//Los datos de las personas. 
/*
    -Foto(direccion de la foto);
    -Nombre completo
    -Profesion
    -Descripcion
*/
const perfil1=
[
    "fotos_perfiles/foto1.jpg",
    "Gregor Eisenhorn",
    "Inquisidor",
    `Gregor Eisenhorn es o era un Inquisidor del Emperador de la Humanidad, formando parte del 
    Ordo Xenos. Al principio, como devoto miembro de la Inquisición de su alta majestad el Dios-Emperador, 
    su filosofía estaba más próxima a la de los Puritanos, por vocación y de la facción Amalatiana,
    por elección. Posteriormente la ideología de Eisenhorn cambiaría durante el curso de su carrera 
    tan acusadamente hacia el xanthismo Radical que otros miembros de la Inquisición lo consideran 
    posiblemente hereje.`
];

const perfil2=
[
    "fotos_perfiles/foto2.jpg",
    "Sanguinius",
    "Primarca de los Angeles Sangrientos",
    `Sanguinius, también llamado en ocasiones El Ángel, fue el Primarca de la Legión de Marines 
    Espaciales de los Ángeles Sangrientos. Fue asesinado durante el clímax de la Herejía de Horus, 
    la Batalla de Terra, defendiendo al Emperador de la Humanidad del Señor de la Guerra Horus a bordo
    de la nave insignia de este, la Barcaza de Batalla Espíritu Vengativo. Aunque el Señor de la Guerra 
    mató a Sanguinius, la leyenda sostiene que fue el agujero hecho en la armadura de Horus por Sanguinius 
    lo que permitió al Emperador matar al Architraidor y así evitar que la Humanidad cayese en manos de 
    los Poderes Ruinosos del Caos.`
];

const perfil3=
[
    "fotos_perfiles/foto3.jpg",
    "Roboute Guilliman",
    "Primarca de los Ultramarines",
    `Roboute Guilliman es el Primarca de los Ultramarines.
    Además de las hazañas de su Legión durante la Gran Cruzada, Guilliman obtuvo mayor renombre tras 
    la Herejía de Horus por sus esfuerzos para preservar el Imperio. Entre sus logros más destacables 
    está la creación del Codex Astartes. El Primarca es uno de los héroes y guerreros más poderosos de 
    la época de la Gran Cruzada. Sus facciones indicaban un gran valor y una gran fortaleza.
    La vida de Guilliman había sido sesgada antes de tiempo por la hoja envenenada del Primarca de los 
    Hijos del Emperador, el traidor Fulgrim, y fue preservado en un campo de estasis en el momento de su 
    fallecimiento, donde se podía ver la herida reluciente y escarlata que tenía. Su tarea había quedado 
    inacabada, su legado incumplido.
`
];

//Crea el formulario con los datos de la persona
function Crear_perfil(foto,nombre,profesion,descripcion)
{
    foto=`<img class="foto_perfil" src=${foto} alt="foto de perfil">`;
    nombre=`<h2 id="nombre">${nombre}</h2>`;
    profesion=`<h3 id="profesion">${profesion}</h3>`;
    descripcion=`<p id="descripcion">${descripcion}</p>`;

    return [foto,nombre,profesion,descripcion];
}


let persona1;
let persona2;
let persona3;
//Creen un proceso que cree los formularios de los perfiles
const añadir_perfil=()=>
{
    //Almacena el formulario en cada variable para que sea mas facil llamarla
    persona1=Crear_perfil(perfil1[0],perfil1[1],perfil1[2],perfil1[3]);
    persona2=Crear_perfil(perfil2[0],perfil2[1],perfil2[2],perfil2[3]);
    persona3=Crear_perfil(perfil3[0],perfil3[1],perfil3[2],perfil3[3]);
}


//Cuando son llamadas, cargan las imagenes mas sus eventos.
const cargar_eventos_flechas=(num)=>
{
    //flecha atras
    let flecha_atras=document.querySelector("#atras");
    flecha_atras.addEventListener("click",()=>
    {
        num=num-1;
        if (num<1)
        {
            num=3;
            mostrar_perfil(num);
        }
        else
        {
            mostrar_perfil(num);
        }

        cargar_flechas();
        cargar_eventos_flechas(num);
    })

    //flecha adelante}
    let flecha_adelante=document.querySelector("#adelante");
    flecha_adelante.addEventListener("click",()=>
    {
        num=num+1;
        if (num>cant_perfil)
        {
            num=1;
            mostrar_perfil(num);
        }
        else
        {
            mostrar_perfil(num);
        }
        cargar_flechas();
        cargar_eventos_flechas(num);
    })
}


const cargar_flechas=()=>
{
    perfiles.innerHTML +=`<img id="atras" class="flechas" alt="flecha_atras" src="img_eventos/flecha_atras.png">
    <img id="adelante" class="flechas" alt="flecha_adelante" src="img_eventos/flecha_adelante.png">`;
}


//Selecciona la etiqueta que tiene el id "perfiles"
let perfiles=document.querySelector("#perfiles");
//Muestra el perfil de x persona en la pagina web
const mostrar_perfil=(num)=>
{
    if (num==1)
    {
        perfiles.innerHTML=persona1;
    }
    if (num==2)
    {
        perfiles.innerHTML=persona2;
    }
    if (num==3)
    {
        perfiles.innerHTML=persona3;
    }
}

//Por que perfil va a empezar
let num;
const inicar_pagina=(num)=>
{
    //Se cargar los formularios de los perfiles
    añadir_perfil();
    //Se muestran los formularios de los perfiles
    mostrar_perfil(num);
    //Carga las imagenes de las flechas
    cargar_flechas();
    //Carga los eventos de cambiar perfil.
    cargar_eventos_flechas(num);
}
inicar_pagina(1);



//------------------------------------------------------------------------





