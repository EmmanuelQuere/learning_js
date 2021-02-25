const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Voici les entrepreneurs né dans les années 70 !");

for(let index in entrepreneurs){
  let entrepreneur = entrepreneurs[index];
  if ((entrepreneur.year >= 1970) && (entrepreneur.year < 1979)){
    console.log(entrepreneur.first + " " + entrepreneur.last);
  }
}

console.log("Voici le nom et prénom de entrepreneurs");

for(let index in entrepreneurs){
  console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last);
}

console.log("Voici l'age qu'aurait chaques entrepreneurs aujourd'hui : ")

for(let index in entrepreneurs){
  console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last + ": " + (2021 - entrepreneurs[index].year));
}

console.log("Voici un classemement par ordre alpha des noms");

let noms = []
for(let index in entrepreneurs){
  noms.push(entrepreneurs[index].last);
};

console.log(noms.sort());