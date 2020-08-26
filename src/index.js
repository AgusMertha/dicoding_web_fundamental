import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import './script/component/app-bar.js';
import './script/component/movie-list.js';
import './script/component/movie-item.js';
import './script/component/tv-list.js';
import './script/component/tv-item.js';
import './script/component/detail-movie.js';
import './script/component/detail-tv.js';
import './style/main.css';


$(document).ready(function () {
    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=2faea115295a514b98cd0de33e935195&language=en-US&page=1',
        method: "GET",
        success: function (data) {
            const movieList = $('#movie-list');
            data.results.forEach(movie => {
                const movieElement = document.createElement('movie-item');
                movieElement.movie = movie;
                movieList.append(movieElement);
            });
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);
            console.log(status);
            console.log(error);
        }
    })

    $.ajax({
        url: 'https://api.themoviedb.org/3/tv/on_the_air?api_key=2faea115295a514b98cd0de33e935195&language=en-US&page=1',
        method: "GET",
        success: function (data) {
            const tvList = $('#tv-list');
            data.results.forEach(tv => {
                const tvElement = document.createElement('tv-item');
                tvElement.tvShow = tv;
                tvList.append(tvElement);
            });
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);
            console.log(status);
            console.log(error);
        }
    })

    $(document).on('click', '.movie-item', function () {
        const movId = $(this).attr('id');

        $.ajax({
            url: "https://api.themoviedb.org/3/movie/" + movId + "?api_key=2faea115295a514b98cd0de33e935195&language=en-US",
            method: 'get',
            success: function (data) {
                const movDetail = document.createElement('detail-movie');
                movDetail.MovieDetail = data;

                $('.detail').html("");
                $('.detail').append(movDetail);
                $('#movieDetail').modal('show');
            }
        })
    })

    $(document).on('click', '.tv-show', function () {
        const tvId = $(this).attr('id');

        $.ajax({
            url: "https://api.themoviedb.org/3/tv/" + tvId + "?api_key=2faea115295a514b98cd0de33e935195&language=en-US",
            method: 'get',
            success: function (data) {
                const tvDetail = document.createElement('detail-tv');
                tvDetail.TvDetail = data;

                $('.detail').html("");
                $('.detail').append(tvDetail);
                $('#tvDetail').modal('show');
            }
        })
    })

})