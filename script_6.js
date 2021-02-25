console.log("Bip...boop,bip......... Traitement de l'ARN en cours");

function ribosom(chaintocut){
  let adn = "";
  let cut =0;
  let codon = "";
  let chain = chaintocut;
  let temp ="";
  while (cut <= chain.length) {
    arn = chain
    codon = arn.slice(cut, cut+3);
    cut= cut +3;
    temp = "";
    if (codon === "UCU" || codon === "UCC" || codon === "UCA" || codon === "UCG" || codon === "AGU" || codon === "AGC") {
      temp = "Sérine-";
    } else if(codon === "CCU" || codon === "CCC" || codon === "CCA" || codon === "CCG") {
      temp = "Proline-";
    } else if(codon === "UUA" || codon === "UUG") {
      temp = "Leucine-";
    } else if(codon === "UUU" || codon === "UUC") {
      temp = "Phényalanine-";
    } else if(codon === "CGU" || codon === "CGC" || codon === "CGA" || codon === "CGG" || codon === "AGA" || codon === "AGG") {
      temp = "Arginine-";
    } else if(codon === "UAU" || codon === "UAC"){
      temp = "Tyrosine-";
    };
    adn = adn + temp;
  }
  console.log(adn.slice(0, adn.length-1));
};


console.log(ribosom("UUACGCAGUAGA"));
