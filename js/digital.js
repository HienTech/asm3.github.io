"use strict";

const title = document.querySelector("title");
console.log(window.location.href.includes("project-cv"));

if (window.location.href.includes("project-cv")) {
  console.log("11111111111");
  title.innerHTML = "Project-cv";
  document.querySelector(".digital-CV").style.display = "block";
  document.querySelector(".digital-Pet").style.display = "none";
  document.querySelector(".digital-Search").style.display = "none";
} else if (window.location.href.includes("project-pets")) {
  console.log("2222222222222");
  title.innerHTML = "Project-pets";
  document.querySelector(".digital-CV").style.display = "none";
  document.querySelector(".digital-Pet").style.display = "block";
  document.querySelector(".digital-Search").style.display = "none";
} else {
  console.log("23333333333333");
  title.innerHTML = "Project-Search";
  document.querySelector(".digital-CV").style.display = "none";
  document.querySelector(".digital-Pet").style.display = "none";
  document.querySelector(".digital-Search").style.display = "block";
}
