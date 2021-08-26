const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=1dc00de69ebe3d987b8e63695ddcdad2&language=en-US';

// const gdEl = document.getElementById('genre-dropdown');

// const genres = [
//         {
//             "id": 28,
//             "name": "Action"
//         },
//         {
//             "id": 12,
//             "name": "Adventure"
//         },
//         {
//             "id": 16,
//             "name": "Animation"
//         },
//         {
//             "id": 35,
//             "name": "Comedy"
//         },
//         {
//             "id": 80,
//             "name": "Crime"
//         },
//         {
//             "id": 99,
//             "name": "Documentary"
//         },
//         {
//             "id": 18,
//             "name": "Drama"
//         },
//         {
//             "id": 10751,
//             "name": "Family"
//         },
//         {
//             "id": 14,
//             "name": "Fantasy"
//         },
//         {
//             "id": 36,
//             "name": "History"
//         },
//         {
//             "id": 27,
//             "name": "Horror"
//         },
//         {
//             "id": 10402,
//             "name": "Music"
//         },
//         {
//             "id": 9648,
//             "name": "Mystery"
//         },
//         {
//             "id": 10749,
//             "name": "Romance"
//         },
//         {
//             "id": 878,
//             "name": "Science Fiction"
//         },
//         {
//             "id": 10770,
//             "name": "TV Movie"
//         },
//         {
//             "id": 53,
//             "name": "Thriller"
//         },
//         {
//             "id": 10752,
//             "name": "War"
//         },
//         {
//             "id": 37,
//             "name": "Western"
//         }
//     ]


// setGenre();
// function setGenre() {
//     gdEl.innerHTML = '';
//     genres.forEach(genre => {
//         const t = document.createElement('li');
//         t.
//     })
// }
// const listEl = document.getElementById('genre-dropdown');

// setGenre();
// function setGenre() {
//     listEl.innerHTML='';
//     genres.forEach(genre => {
//         const li = document.createElement('li');
//         const a = document.createElement('a');
//         document.li.appendChild(a);
//     })
// }

//tombol search
function searchMovie() {
    $.ajax({
        url:'https://api.themoviedb.org/3/search/movie?api_key=1dc00de69ebe3d987b8e63695ddcdad2&query='+$('.input-keyword').val(),
        success:result => {
            const movies = result.results;
            let cards='';
            movies.forEach(m =>{
                cards +=showCards(m);
            });
            $('.movie-container').html(cards);
            $('.input-keyword').val('');
    
            
            // ketika tombol detail di klik
            $('.modal-detail-button').on('click', function(){
              const api_key = '?api_key=1dc00de69ebe3d987b8e63695ddcdad2';
              $.ajax({
                url:'https://api.themoviedb.org/3/movie/'+$(this).data('tmdbid')+api_key,
                success:m =>{
                  
                  const movieDetail=showMovieDetail(m);
                $('.modal-body').html(movieDetail);
                },
                error: (e) => {
                  console.log(e.responseText);
              }
              });
            });
            
        },
        
        error: (e) => {
            console.log(e.responseText);
        }

        
    });
    
};

$('.search-button').on('click',function(){
  searchMovie();
});

// search menggunakan enter
$('.search-input').on('keyup', function(e){
    if(e.which === 13) {
        searchMovie();
    }
});


// tampil populer
moviePopular();
function moviePopular() {
    $.ajax({
        url:'https://api.themoviedb.org/3/movie/popular?api_key=1dc00de69ebe3d987b8e63695ddcdad2',
        success:result => {
            const movies = result.results;
            let cards='';
            movies.forEach(m =>{
                cards  += showCards(m);
            });
            
            $('.movie-container').html(cards);
            
            // ketika tombol detail di klik
            $('.modal-detail-button').on('click', function(){
              const api_key = '?api_key=1dc00de69ebe3d987b8e63695ddcdad2';
              $.ajax({
                url:'https://api.themoviedb.org/3/movie/'+$(this).data('tmdbid')+api_key,
                
                success:m=>{
                  const movieDetail=showMovieDetail(m);
                $('.modal-body').html(movieDetail);
                },
                error: (e) => {
                  console.log(e.responseText);
              }
              
              });
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });
};

$('#popular').on('click',function(){
    moviePopular();
  });

$('#home').on('click',function(){
    moviePopular();
  });

// tampil movie upcoming
function movieUpcoming() {
    $.ajax({
        url:'https://api.themoviedb.org/3/movie/upcoming?api_key=1dc00de69ebe3d987b8e63695ddcdad2&language=en-US&page=1',
        success:result => {
            const movies = result.results;
            let cards='';
            movies.forEach(m =>{
                cards += showCards(m);
            });
            
            $('.movie-container').html(cards);
            
            // ketika tombol detail di klik
            $('.modal-detail-button').on('click', function(){
              const api_key = '?api_key=1dc00de69ebe3d987b8e63695ddcdad2';
              $.ajax({
                url:'https://api.themoviedb.org/3/movie/'+$(this).data('tmdbid')+api_key,
                
                success:m=>{
                  const movieDetail=showMovieDetail(m);
                $('.modal-body').html(movieDetail);
                },
                error: (e) => {
                  console.log(e.responseText);
              }
              
              });
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });
};

$('#upcoming').on('click',function(){
    movieUpcoming();
  });

// tampil movie top rated
function movieToprated () {
    $.ajax({
        url:'https://api.themoviedb.org/3/movie/top_rated?api_key=1dc00de69ebe3d987b8e63695ddcdad2&language=en-US&page=1',
        success:result => {
            const movies = result.results;
            let cards='';
            
            movies.forEach(m =>{
                cards += showCards(m);
            });
            
            $('.movie-container').html(cards);
            
            // ketika tombol detail di klik
            $('.modal-detail-button').on('click', function(){
              const api_key = '?api_key=1dc00de69ebe3d987b8e63695ddcdad2';
              $.ajax({
                url:'https://api.themoviedb.org/3/movie/'+$(this).data('tmdbid')+api_key,
                
                success:m=>{
                  const movieDetail=showMovieDetail(m);
                $('.modal-body').html(movieDetail);
                },
                error: (e) => {
                  console.log(e.responseText);
              }
              
              });
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });
};

document.querySelector('li');

$('#toprated').on('click',function(){
    movieToprated();
  });



// genre
movieGenre ();
function movieGenre () {
$.ajax({
  url:'https://api.themoviedb.org/3/genre/movie/list?api_key=1dc00de69ebe3d987b8e63695ddcdad2&language=en-US',
  
  success:results =>{
    const genreDetail=results.genres;
    let genre='';
    genreDetail.forEach(g =>{
      genre += `
      <li class="genres"><a class="dropdown-item" href="#" data-id="${g.id}">${g.name}</a></li>
      `;
    });
    $('#genre-dropdown').html(genre);

    // ketika genre di klik
    $('.dropdown-item').on('click', function() {
              $.ajax({
                  url:'https://api.themoviedb.org/3/discover/movie?api_key=1dc00de69ebe3d987b8e63695ddcdad2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='+$(this).data('id'),
                // url:'https://api.themoviedb.org/3/movie/'+$(this).data('tmdbid')+api_key,
                success:result => {
                    const movies = result.results;
                    let cards='';
                    movies.forEach(m =>{
                        cards +=showCards(m);
                    });
                    $('.movie-container').html(cards);

                    $('.modal-detail-button').on('click', function(){
                        const api_key = '?api_key=1dc00de69ebe3d987b8e63695ddcdad2';
                        $.ajax({
                          url:'https://api.themoviedb.org/3/movie/'+$(this).data('tmdbid')+api_key,
                          success:m =>{
                            
                            const movieDetail=showMovieDetail(m);
                          $('.modal-body').html(movieDetail);
                          },
                          error: (e) => {
                            console.log(e.responseText);
                        }
                        });
                      });
              
              }
            });
    });
    
  },
  error: (e) => {
    console.log(e.responseText);
}

});
}

// tampil movie by genre
// function movieGenre () {
//     $.ajax({
//         url:'https://api.themoviedb.org/3/discover/movie?api_key=1dc00de69ebe3d987b8e63695ddcdad2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752&with_watch_monetization_types=flatrate'+$('#id').val(),
//         success:result => {
//             const movies = result.results;
//             let cards='';
//             movies.forEach(m =>{
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards);
//             $('.input-keyword').val('');
    
            
//             // ketika tombol detail di klik
//             $('.modal-detail-button').on('click', function(){
//               const api_key = '?api_key=1dc00de69ebe3d987b8e63695ddcdad2';
//               $.ajax({
//                 url:'https://api.themoviedb.org/3/movie/'+$(this).data('tmdbid')+api_key,
//                 success:m =>{
                  
//                   const movieDetail=showMovieDetail(m);
//                 $('.modal-body').html(movieDetail);
//                 },
//                 error: (e) => {
//                   console.log(e.responseText);
//               }
//               });
//             });
            
//         },
        
//         error: (e) => {
//             console.log(e.responseText);
//         }

        
//     });
// };


function showCards(m){
  return `
  <div class="col-md-3 my-3">
  <div class="card mb-3 border-0 shadow"> 
    <img src="${IMG_URL+m.poster_path}" class="card-img-top">
    <div class="card-body" style="background-color:#30475E;">
    
      <h5 class="card-title fw-bold" style="color:#DDDDDD">${m.title}</h5>
      <span class="position-absolute top-0 end-0 fw-bold p-2" style="background-color:#DDDDDD; font-size:24px; color:#222831">${m.vote_average}</span>
      
      <h6 class="card-subtitle mb-2 text-muted" style="color:#DDDDDD">${m.release_date}</h6>
      <a href="#" class="btn  modal-detail-button" style="background-color:#F05454; color:#fff" data-toggle="modal" data-target="#movieDetailModal" data-tmdbid="${m.id}">Detail</a>
   </div>
  </div>
</div>`;
}

function showMovieDetail(m){
  return `<div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
      <img src="${IMG_URL+m.poster_path}" class="img-fluid">
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item"><h4>${m.title}</h4></li>
          <li class="list-group-item"><strong>Rate : </strong>${m.vote_average}</li>
          <li class="list-group-item"><strong>Release : </strong>${m.release_date}</li>
          <li class="list-group-item"><strong>Overview : </strong> <br>${m.overview}</li>
        </ul>
      </div>
    </div>
  </div>`;
};

// function changeGenre() {
// const selectElement = document.querySelector('.dropdown-menu');
// selectElement.addEventListener('change', (event) => {

//     const result = document.querySelector('.teksgenre');
//     result.textContent = `You like ${event.target.value}`;
//     console.log(result);
// });
// }
