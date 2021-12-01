$(document).ready(function () {
  $("#vanishing").click(function () {
    $(this).hide();
  });
});

$(document).ready(function () {
  $("input").focus(function () {
    $(this).css("background-color", "pink");
  });
  $("input").blur(function () {
    $(this).css("background-color", "magenta");
  });
});

$(document).ready(function(){
    $("#sombrero").click(function(){
      $("#conejo").slideToggle();
    });
  });

function comenzar() {
    document.getElementById("vanishingparagraph").style.display = "block";
  }

function siguiente1() {
  document.getElementById("siguiente1").style.display = "block";
}

function siguiente2() {
  document.getElementById("siguiente2").style.display = "block";
}

function siguiente3() {
    document.getElementById("siguiente3").style.display = "block";
  }

function borrarTodo() {
    document.getElementById("todo").style.display = "none";
    document.getElementById("adios").style.display = "block";
   
   }   