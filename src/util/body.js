export function myFunction() {
    document.getElementById("uname").innerHTML = document.getElementById("name").value;
	document.getElementById("uage").innerHTML = document.getElementById("age").value;
	if(document.getElementById("male").checked){
        var gender = document.getElementById("male").value;
	}
	else if(document.getElementById("female").checked){
		gender = document.getElementById("female").value;
    }
    document.getElementById("gender").innerHTML = gender;
}
