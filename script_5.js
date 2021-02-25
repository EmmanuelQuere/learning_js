const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Tous loués au moins une fois ?");


books.forEach(book => {
  if (book.rented > 0) {
    console.log("Oui !");
  } else {
    console.log ("Non !");
  }
})

console.log("Le plus loué ?")

let famous = ""
let value = 0
books.forEach(book => {
  if (book.rented > value){
    famous = book.title;
    value = book.rented;
  }
});
console.log(famous);

console.log("Et le moins ?")
let notFamous = ""
value = 10000000000
books.forEach(book => {
  if (book.rented < value){
    notFamous = book.title;
    value = book.rented;
  }
});
console.log(notFamous);

console.log("Qui est l'ID 873495");

books.forEach(book => {
  if (book.id === 873495){
    console.log(book.title);
  }
});

let select = 0;
for(let index in books) {
  if (books[index].id === 133712){
    select = index;
    console.log(books[index].title);
  }
};
books.splice(select, 1);

let titres = []
for(let index in books){
  titres.push(books[index].title);
};

console.log(titres.sort());
