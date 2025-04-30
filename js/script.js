// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: April 30, 2025
// This file contains the JS functions for index.html

"use strict"

function checkNumber() {
  // input
  const ageNumber = parseInt(document.getElementById("age-number").value)

  // process
  if (ageNumber >= 17) {
    //output
    document.getElementById("result").innerHTML =
      "<p>You can see an R movie alone.</p>"
  }
  // process
  else if (ageNumber >= 13) {
    //output
    document.getElementById("result").innerHTML =
      "<p>You can see a PG-13 movie alone.</p>"
  }
    // process
  else if (ageNumber >= 5) {
    //output
    document.getElementById("result").innerHTML =
      "<p>You can see a G or PG movie alone.</p>"
  }
    // process
  else  {
    //output
    document.getElementById("result").innerHTML =
      "<p>I think you may be to young to watch a movie by yourself. :(</p>"
  }
}
