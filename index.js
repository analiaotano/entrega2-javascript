const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];





// Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

// a)  Las pizzas que tengan un id impar:


function numerosImpares(id){
  for(let i = 0; i <= 6; i++) {
  if (i % 2 === 1){
    console.log(i);
  }
}
}
numerosImpares(6);



// b) Responder: ¿Hay alguna pizza que valga menos de $600?:


function pizzaMenosSeiscientos(precio) {

  for(let i = 0; i <= 600; i++) {
    if (i <= 600){
      console.log(i);
    }
  }
}
pizzaMenosSeiscientos(1500);


// c) El nombre de cada pizza con su respectivo precio:

function tipoDePizza(nombre) {
  for (let i = 0; i <= 6; i++) {
    
    console.log(i);
}
}

tipoDePizza(6);



// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

function sabores(ingredientes) {
  for (let i = 0; i <= 6; i++) {
    
    console.log(i);
}
}

sabores(6);
