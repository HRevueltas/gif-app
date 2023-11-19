const words = ['hola', 'saldo', ' harold', 'manzana'];

const wordLength = words.map((word) => `Longitud de ${word}: ${word.length}`);

console.log("-------------words length-------------")

console.log(wordLength);


const products = [{
        nombre: 'Jabon',
        precio: 2000
    },
    {
        nombre: 'cafe',
        precio: 9000
    },

    {
        nombre: 'huevos',
        precio: 12000
    },

    {
        nombre: 'gaseosa',
        precio: 5000
    },

]


const productsPrice = products.map((product) => product.precio)
console.log("-------------precio productos-------------")
console.log(`precio del producto: ${productsPrice}`);



const nombres = [{
        nombre: 'Juan',

    },
    {
        nombre: 'Andres',

    },

    {
        nombre: 'Manolo',

    },

    {
        nombre: 'huevardo',

    },

];



const saludos = nombres.map(({ nombre }) => `Hola, ${nombre}`)

console.log(saludos);
console.log('------------saludos------------');

const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 }
];


const studentDesc = students.map(({ name, age }) => `Nombre: ${name}, edad: ${age}`)

console.log(studentDesc);



console.log('-------------------------------');
console.log('Dada una lista de nombres en minúsculas, crea una nueva lista que contenga los mismos nombres pero con la primera letra en mayúscula.');
const namesMinus = ['harold', 'meliza', 'andrea', 'enrique'];

const namesUpperCase = namesMinus.map(name =>

    `${name.charAt(0).toUpperCase().concat(name.length.splice(2,1))}`

)

console.log(namesUpperCase);