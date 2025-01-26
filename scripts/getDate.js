// Get the current year
const d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").innerHTML = year;

// The date the document was last modified
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modification: " + text;