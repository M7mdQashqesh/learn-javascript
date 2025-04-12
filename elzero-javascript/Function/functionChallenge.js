function showDetails(a, b, c) {
  let name = typeof a === "string" ? a : typeof b === "string" ? b : c;
  let age = typeof a === "number" ? a : typeof b === "number" ? b : c;
  let status = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c;

  if (status === true) {
    console.log(
      `Hello ${name}, Your Age is ${age}, You are Available for Hire`
    );
  } else {
    console.log(
      `Hello ${name}, Your Age is ${age}, You are Not Available for Hire`
    );
  }
}

showDetails("Mohammed", 38, true);
showDetails(38, "Mohammed", true);
showDetails(true, 38, "Mohammed");
showDetails(false, "Mohammed", 38);
