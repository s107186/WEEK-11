// hier komt je code
// console.log("Hallo wereld!");

//functie aanmaken
let mijnHoofd = function() {
  let mijnAfbeeldingen = document.querySelectorAll('img');
  let mijnArray = [];

  //loop schrijven
  let i = 0;
  while (i < mijnAfbeeldingen.length) {
    mijnArray[i] = mijnAfbeeldingen[i].getAttribute('src');
    i = i + 1
  }
  console.log(mijnArray);

  let i2 = 0;

  //loop schrijven
  while (i2 < mijnAfbeeldingen.length) {
    if (i2 === 3) {
      mijnAfbeeldingen[i2].setAttribute("src", mijnArray[0]);
    } else {
      mijnAfbeeldingen[i2].setAttribute("src", mijnArray[i2+1]);
    }
    i2 = i2+1;
  }
}

setInterval(mijnHoofd,2500);
