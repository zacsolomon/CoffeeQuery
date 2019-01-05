// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery

const mapsUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.7983756,-117.2520946&radius=1000&sensor=true&keyword=coffee&key=AIzaSyD4bshGeCYedHa2AnIzfh0ZKWYhyBPOwHs"

$( document ).ready(function() {
  $(".coffee-button").click(function(){
    $.ajax({
      url: mapsUrl,
      success: function(result){
        const results = result.results;

        let places = "";
        for( let index in results) {
          const place = results[index];
          const html = "<div>" + place.name + "</div>"
          places += html;
        }

        $("#results").html(places);
      }
    });
  });
});
