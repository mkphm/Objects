document.getElementById("show").addEventListener("click", function() {
    console.log(MovieArray);
    let message = "Title\t\tRating\tYear\n";
    for (i=0; i < MovieArray.length; i++) {
        message = message + MovieArray[i].movie + "\t\t" +
        MovieArray[i].year + "\t" + MovieArray[i].rating + "\n";
    }
    document.getElementById("output").value = message;
});

let MovieArray = []; //define the movie array

function movieSubmitEvent() {
    let Movie = {
        movie: document.getElementById("name").value,
        year: document.getElementById("year").value,
        rating: document.getElementById("rating").value
        }
        MovieArray.push(Movie);
        /* Field validation that breaks the program
        if (isValid(Movie)) {
          MovieArray.push(Movie);
          document.getElementById("name").value = "";
          document.getElementById("year").value = "";
          document.getElementById("rating").value = "";
          }
          else {
            alert("ERROR: Invalid field. Please try again.")
          } */
}

/* Field validation function
function isValid(aMovie) {
  if ((Movie.name == null) || (Movie.name.length == 0)
  || (Movie.rating.length == 0) || (Movie.year.length == 0)
  || (Movie.year.length > 4)) {
    return false
  }
  else {
    return true;
  }
} */
