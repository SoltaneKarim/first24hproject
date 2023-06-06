// function for div with class movies1
var createMovie = function(src,name,trailer){
    return {
            src: src,
            name: name,
            trailer: trailer
    }
}

var mo1  = createMovie('films/blow.webp','Blow','https://hdtoday.tv/watch-movie/watch-spider-man-into-the-spider-verse-sequel-hd-66674.9640057')
var mo2  = createMovie('films/castaway.jpg','Cast Away','https://hdtoday.tv/watch-movie/watch-cast-away-hd-19128.5298364')
var mo3  = createMovie('films/oceanseleven.jpg','Oceans Eleven','https://hdtoday.tv/watch-movie/watch-oceans-eleven-hd-19162.5349481')
var mo4  = createMovie('films/Intouchables.jpg','Intouchables','https://hdtoday.tv/watch-movie/watch-the-intouchables-hd-19408.5297920')
var mo5  = createMovie('films/joker.jpg','Joker','https://hdtoday.tv/watch-movie/watch-joker-hd-9766.5392645')
var mo6  = createMovie('films/le_parrain.jpg','Le Parrain','https://hdtoday.tv/watch-movie/watch-the-godfather-hd-19629.5297527')
var mo7  = createMovie('films/leon.jpg','Leon','https://hdtoday.tv/watch-movie/watch-leon-the-professional-hd-19460.5297818')
var mo8  = createMovie('films/metro123.jpg','Metro 123','https://hdtoday.tv/movie/watch-metro-hd-7250')
var mo9  = createMovie('films/papillon.jpg','Papillon','https://hdtoday.tv/watch-movie/watch-papillon-hd-17945.5300548')
var mo10 = createMovie('films/pulpfiction.jpg','Pulp Fiction','https://hdtoday.tv/watch-movie/watch-pulp-fiction-hd-19700.5349121')
var mo11 = createMovie('films/titanic.jpg','Titanic','https://hdtoday.tv/watch-movie/watch-titanic-hd-19586.5297602')

var movies1 = [mo1,mo2,mo3,mo4,mo5,mo6,mo7,mo8,mo9,mo10,mo11]

var show = function(){
    movies1.map(function(e,i){
        var div = $('<div></div>')
        var img = $('<img src="' + e.src + '">')
        var title=$(`<h3><a href=${e.trailer} >${e.name}</a></h3>`)
        $(div).append(img,title)
        $('.movies1').append(div)
    })
}

show()

// funtions for div with class movies2
var createMovie2 = function(src,name,trailer){
    return {
            src: src,
            name: name,
            trailer: trailer
    }
}

var m1  = createMovie2('films/catchmeifyoucan.jpg','Catch Me If Y..','https://hdtoday.tv/watch-movie/watch-catch-me-if-you-can-hd-19193.5349421')
var m2  = createMovie2('films/harrypotter.jpg','Harry Potter','https://hdtoday.tv/watch-movie/watch-harry-potter-and-the-goblet-of-fire-hd-19637.5349067')
var m3  = createMovie2('films/howhigh.jpg','How High','https://hdtoday.tv/watch-movie/watch-how-high-hd-13870.5355559')
var m4  = createMovie2('films/lucy.jpg','Lucy','https://hdtoday.tv/watch-movie/watch-lucy-hd-19155.5349478')
var m5  = createMovie2('films/thewolfofwallstreet.jpg','The Wolf Of..','https://hdtoday.tv/watch-movie/watch-the-wolf-of-wall-street-hd-19543.5349085')
var m6  = createMovie2('films/planetedessinges.jpg','La Planéte Des..','https://hdtoday.tv/watch-movie/watch-rise-of-the-planet-of-the-apes-hd-19216.5298280')
var m7  = createMovie2('films/frshprince.jpg','Fresh Prince','https://hdtoday.tv/watch-tv/watch-the-fresh-prince-of-belair-hd-38438.5034094')
var m8  = createMovie2('films/johnwick3.jpg','John Wick 3','https://hdtoday.tv/watch-movie/watch-john-wick-hd-19789.5297287')
var m9  = createMovie2('films/themechanic.jpg','The Mechanic','https://hdtoday.tv/watch-movie/watch-the-mechanic-hd-18213.5300065')
var m10 = createMovie2('films/transpoter3.jpg','The Transporter','https://hdtoday.tv/movie/watch-the-transporter-hd-17799')
var m11 = createMovie2('films/jasonbourne.jpg','Jason Bourne','https://hdtoday.tv/watch-movie/watch-jason-bourne-hd-19558.5297656')

var movies2 = [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11]

var show2 = function(){
    movies2.map(function(e,i){
        var div = $('<div></div>')
        var img = $('<img src="' + e.src + '">')
        var title=$(`<h3><a href=${e.trailer} >${e.name}</a></h3>`)
        $(div).append(img,title)
        $('.movies2').append(div)
    })
}

show2()

// function for search button 
var movies = movies1.concat(movies2)

function searchMovies() {
  var input = $('#MyInput').val().toLowerCase()
  $('.movies1, .movies2').empty()

  var filteredMovies = movies.filter(function (movie) {
    return movie.name.toLowerCase().includes(input)
  })

  filteredMovies.forEach(function (movie) {
    var div = $('<div></div>')
    var img = $('<img src="' + movie.src + '">')
    var title = $('<h3>' + movie.name + '</h3>')
    $(div).append(img, title)
    if (movies1.includes(movie)) {
      $('.movies1').append(div)
    } else {
      $('.movies2').append(div)
    }
  })
}

$('#MyInput').on('keyup', searchMovies)
