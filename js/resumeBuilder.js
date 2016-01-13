/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append("Rafael Gomez");


 var name = "Rafael Gomez";
 var role = "System Engineer";


var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);


//$("#header").append(formattedName);
//$("#header").append(formattedRole);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// ************Esto es una prueba especial****************
var s="audacity"

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    
    s = s[1].toUpperCase()+s.slice(2);
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s)); 

// *****************************************