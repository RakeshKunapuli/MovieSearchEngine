var search1 = document.getElementById("search")

var movieWrapper = document.getElementById("product-wrapper")
var statusElement = document.getElementById("status")
var failed = document.getElementById("failed")
var error = document.getElementById("error")
//  https://dribbble.com/shots/4359853-404-Page


function searchmovies() {
        movieWrapper.innerHTML = " "
        statusElement.innerText = "Loading........"
        statusElement.style.color="white"
        statusElement.style.textAlign= "center"
        $.get(`http://omdbapi.com/?apikey=45f0782a&s=${search1.value}`, function (response) {
                statusElement.innerText = " "
                var data = response.Search
                if (response.Response == "True") {
                        for (var i = 0; i < data.length; i++) {
                                movieWrapper.innerHTML += `<div class="movies">
        <img src="${data[i].Poster}" alt="${data[i].Title}">
        <p class="title-year"><b>Title:</b>${data[i].Title} </p>
        <p class="title-year" ><b>Year:</b>${data[i].Year}</p>
    </div>`
                        }
                } else {
                        movieWrapper.innerHTML = `<div id="error"><h1>4<span><i class="fas fa-ghost"></i></span>4</h1>
                        <h2>Error: 404 page not found</h2>
                        <p>Sorry, the page you're looking for cannot be accessed</p>
                        </div>`
                }
                
        })
}

var home =document.getElementById("home")
home.addEventListener('click' ,function(){
    location.assign("http://127.0.0.1:5500/MovieSearch.html")
})