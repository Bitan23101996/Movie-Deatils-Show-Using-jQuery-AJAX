let allRating;
let search;
let a;

$(document).ready(() => {
  $("#search-btn").click(function () {
    search = document.getElementById("search").value;
    year = document.getElementById("year").value;
    if (search == null || search == "") {
      $("#upper-div").css("display", "block");
      //Result will show only 3 sec
      setTimeout(function () {
        $("#upper-div").css("display", "none");
      }, 3000);
    } else {
      getDetailsByID();
      document.getElementById("search").value = "";
      document.getElementById("year").value = "";
    }
  });
}); // end of document.ready()

/*----------------getDetailsByTitle function begin-----------*/

let getDetailsByTitle = () => {
  $.ajax({
    type: "GET", // request type GET, POST, PUT
    dataType: "json", // requesting datatype
    async: true,
    url: "https://www.omdbapi.com/?apikey=1c03a0ec&t=" + search + "&y=" + year, // URL of getting data

    success: data => {
      // in case of success data
      search = search.toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
      });

      let title = data.Title;



      if (title != undefined) {
        a = title.includes(search);
        allRating = data.Ratings;


        if (a == true) {
          $("#upper-div-success").css("display", "block");
          //Result will show only 3 sec
          setTimeout(function () {
            $("#upper-div-success").css("display", "none");
          }, 3000);

          $("#dataSection").css("display", "block");

          if (data.Poster == "N/A") {
            $("#moviePoster").html(
              '<img src="dummy.gif" class="img-fluid profileHeight"/>'
            );
          } else {
            $("#moviePoster").html(
              '<img src="' + data.Poster + '" class="img-fluid profileHeight"/>'
            );
          }
          $("#movieTitle").text(data.Title);
          $("#movieYear").text(data.Year);
          $("#movieRated").text(data.Rated);
          $("#movieRuntime").text(data.Runtime);
          $("#movieMetascore").text(data.Metascore);
          $("#movieimdbRating").text(data.imdbRating);
          $("#movieimdbVotes").text(data.imdbVotes);
          $("#movieimdbID").text(data.imdbID);
          $("#movieType").text(data.Type);
          $("#movieDVD").text(data.DVD);

          $("#movieBoxOffice").text(data.BoxOffice);
          $("#movieProduction").text(data.Production);
          $("#movieWebsite").text(data.Website);
          $("#movieResponse").text(data.Response);
          $("#movieReleased").text(data.Released);
          $("#movieGenre").text(data.Genre);
          $("#movieDirector").text(data.Director);
          $("#movieWriter").text(data.Writer);
          $("#movieActors").text(data.Actors);
          $("#moviePlot").text(data.Plot);
          $("#movieLanguage").text(data.Language);
          $("#movieCountry").text(data.Country);
          $("#movieAwards").text(data.Awards);
          $("#movieRatings").html("");
          for (rating of allRating) {
            $.each(rating, function (index, value) {
              $("#movieRatings").append(index + ":" + value + "<br>");
            });
          }
        }
      } else {
        $("#dataSection").css("display", "none");
        $("#upper-div")
          .text("Enter the Proper Title Or IMDB ID Or Year")
          .css("display", "block");
        console.log("making request");
        //Result will show only 3 sec
        setTimeout(function () {
          $("#upper-div").css("display", "none");
        }, 3000);
      }
    },

    error: data => {
      // in case of error data
      $("#dataSection").css("display", "none");
      $("#upper-div")
        .text("Error!!! Network Not Connected")
        .css("display", "block");
      setTimeout(function () {
        $("#upper-div").css("display", "none");
      }, 3000);
    },
    timeout: 3000
  });
};
/*--------End of getDetailsByTitle function--------*/

/*----------getDeatilsByID function begin----------*/

let getDetailsByID = () => {
  $.ajax({
    type: "GET", // request type GET
    dataType: "json", // requesting datatype
    async: true,
    url: "https://www.omdbapi.com/?apikey=1c03a0ec&i=" + search, // URL of getting data

    success: data => {
      // in case of success data

      let imdbID = data.imdbID; //get imdb id
      let allRating = data.Ratings; //get ratings array


      if (imdbID == search) {



        $("#upper-div-success").css("display", "block");
        //Result will show only 3 sec
        setTimeout(function () {
          $("#upper-div-success").css("display", "none");
        }, 3000);

        $("#dataSection").css("display", "block");
        if (data.Poster == "N/A") {


          $("#moviePoster").html(
            '<img src="dummy.gif" class="img-fluid profileHeight"/>'
          );
        } else {

          $("#moviePoster").html(
            '<img src="' + data.Poster + '" class="img-fluid profileHeight"/>'
          );
        }

        $("#movieTitle").text(data.Title);
        $("#movieYear").text(data.Year);
        $("#movieRated").text(data.Rated);
        $("#movieRuntime").text(data.Runtime);
        $("#movieMetascore").text(data.Metascore);
        $("#movieimdbRating").text(data.imdbRating);
        $("#movieimdbVotes").text(data.imdbVotes);
        $("#movieimdbID").text(data.imdbID);
        $("#movieType").text(data.Type);
        $("#movieDVD").text(data.DVD);

        $("#movieBoxOffice").text(data.BoxOffice);
        $("#movieProduction").text(data.Production);
        $("#movieWebsite").text(data.Website);
        $("#movieResponse").text(data.Response);
        $("#movieReleased").text(data.Released);
        $("#movieGenre").text(data.Genre);
        $("#movieDirector").text(data.Director);
        $("#movieWriter").text(data.Writer);
        $("#movieActors").text(data.Actors);
        $("#moviePlot").text(data.Plot);
        $("#movieLanguage").text(data.Language);
        $("#movieCountry").text(data.Country);
        $("#movieAwards").text(data.Awards);
        $("#movieRatings").html("");

        for (rating of allRating) {
          $.each(rating, function (index, value) {
            $("#movieRatings").append(index + ":" + value + "<br>");
          });
        }
      } else {
        $("#dataSection").css("display", "none");
        getDetailsByTitle();
      }
    },

    error: data => {
      // in case of error data

      // in case of error data
      $("#dataSection").css("display", "none");
      $("#upper-div")
        .text("Error!!! Network Not Connected")
        .css("display", "block");
      setTimeout(function () {
        $("#upper-div").css("display", "none");
      }, 3000);
    }
  }); // end of AJAX request
};
/*------getDetailsByID function end */