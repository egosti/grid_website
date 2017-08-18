$(document).ready(function() {

  $("#one-one-d, #one-two-d, #one-three-d, #two-one-d, #two-two-d, #two-three-d, #three-one-d, #three-two-d, #three-three-d").hide();

  $("#one-one").hover(function() {
    $("#one-one-d").fadeIn();
    $(this).find(".darken").fadeIn();
    $(this).find(".grid-icon").fadeOut();
  }, function() {
    $("#one-one-d").fadeOut();
    $(this).find(".darken").fadeOut();
    $(this).find(".grid-icon").fadeIn();
  });

  $("#one-two").hover(function() {
    $("#one-two-d").fadeIn();
    $(this).find(".darken").fadeIn();
  }, function() {
    $("#one-two-d").fadeOut();
    $(this).find(".darken").fadeOut();
  });

  $("#one-three").hover(function() {
    $("#one-three-d").fadeIn();
    $(this).find(".darken").fadeIn();
    $(this).find(".grid-icon").fadeOut();
  }, function() {
    $("#one-three-d").fadeOut();
    $(this).find(".darken").fadeOut();
    $(this).find(".grid-icon").fadeIn();
  });

  $("#two-one").hover(function() {
    $("#two-one-d").fadeIn();
    $(this).find(".darken").fadeIn();
  }, function() {
    $("#two-one-d").fadeOut();
    $(this).find(".darken").fadeOut();
  });

  $("#two-two").hover(function() {
    $("#two-two-d").fadeIn();
    $(this).find(".darken").fadeIn();
    $(this).find(".grid-icon").fadeOut();
  }, function() {
    $("#two-two-d").fadeOut();
    $(this).find(".darken").fadeOut();
    $(this).find(".grid-icon").fadeIn();
  });

  $("#two-three").hover(function() {
    $("#two-three-d").fadeIn();
    $(this).find(".darken").fadeIn();
  }, function() {
    $("#two-three-d").fadeOut();
    $(this).find(".darken").fadeOut();
  });

  $("#three-one").hover(function() {
    $("#three-one-d").fadeIn();
    $(this).find(".darken").fadeIn();
    $(this).find(".grid-icon").fadeOut();
  }, function() {
    $("#three-one-d").fadeOut();
    $(this).find(".darken").fadeOut();
    $(this).find(".grid-icon").fadeIn();
  });

  $("#three-two").hover(function() {
    $("#three-two-d").fadeIn();
    $(this).find(".darken").fadeIn();
  }, function() {
    $("#three-two-d").fadeOut();
    $(this).find(".darken").fadeOut();
  });

  $("#three-three").hover(function() {
    $("#three-three-d").fadeIn();
    $(this).find(".darken").fadeIn();
    $(this).find(".grid-icon").fadeOut();
  }, function() {
    $("#three-three-d").fadeOut();
    $(this).find(".darken").fadeOut();
    $(this).find(".grid-icon").fadeIn();
  });

})
