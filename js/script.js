// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: April 30, 2025
// This file contains the JS functions for index.html

"use strict"

function classifyTriangle() {
  // input
  const sideA = parseInt(document.getElementById("side-a").value)
  const sideB = parseInt(document.getElementById("side-b").value)
  const sideC = parseInt(document.getElementById("side-c").value)

  // process for angles
  angleA = Math.acos((lengthB**2 + lengthC**2 - lengthA**2) / (2 * lengthB * lengthC)) * (180/Math.PI)
  angleB = Math.acos((lengthC**2 + lengthA**2 - lengthB**2) / (2 * lengthC * lengthA)) * (180/Math.PI)
  angleC = Math.acos((lengthA**2 + lengthB**2 - lengthC**2) / (2 * lengthA * lengthB)) * (180/Math.PI)

  //process for angle sum
  sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

  if (sumOfAngles != 180) {
    //output
    document.getElementById("result").innerHTML =
      "<p>Oops, this is NOT a triangle.</p>"
  }
  // process
  else if (sideA == sideB && sideA == sideC && sideB == sideC) {
    //output
    document.getElementById("result").innerHTML =
      "<p>This is an equilateral triangle.</p>"
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
