$(document).ready(function() {
  $("form#myForm").submit(function(event) {
    event.preventDefault();
    var sideOne = parseInt($("input#firstSide").val());
    var sideTwo = parseInt($("input#secondSide").val());
    var sideThree = parseInt($("input#thirdSide").val());


    // if (sideOne === sideTwo && sideTwo === sideThree) {
    //   alert("equilateral");
    // } else if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
    //   alert("isosceles");
    // } else if ((sideOne != sideTwo) && (sideTwo != sideThree) && (sideOne != sideThree)) {
    //   alert("scalene");
    // } else {
    //   alert("NOT TRIANGLE");
    // }

    if (((sideOne + sideTwo) <= sideThree) || ((sideTwo + sideThree) <= sideOne) || ((sideThree + sideOne) <= sideTwo)) {
      alert("NOT TRIANGLE");
    } else if (sideOne === sideTwo && sideTwo === sideThree) {
      alert("equilateral");
    } else if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
      alert("isosceles");
    } else if ((sideOne != sideTwo) && (sideTwo != sideThree) && (sideOne != sideThree)) {
      alert("scalene");
    }


    // if ((sideOne + sideTwo) <= sideThree) {
    //   if ((sideOne != sideTwo) && (sideTwo != sideThree) && (sideOne != sideThree)) {
    //     alert("scalene");
    //   } else if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
    //     alert("isosceles");
    //   } else if (sideOne === sideTwo && sideTwo === sideThree) {
    //     alert("equilateral");
    //   } else {
    //     alert("NOT TRIANGLE");
    //   }
    // }
  
    
    //if all sides are equal (side1 === side2 && side2 === side3), then:
    // show output = equilateral
    //if two sides are equal (side1 === side2 || side2 === side3 || side1 === side3), then:
    // show output = isosceles

    //if side1 + side2 <= side 3, then:
        //check if no sides are equal ((side1 != side2) && (side2 != side3) && (side1 != side3)  ), then:
        // show output = scalene:
    // otherwise, show output = NOT a triangle.
  


  });
});