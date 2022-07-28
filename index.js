// Your cod// Your code here//

function greet() {

    var UserName = prompt("What is your name?")
        alert('Hello '  +  UserName)

    var UserAge = prompt("How old are you?")
        UserAge = parseInt(UserAge)
        //alert('You Are '  +  UserAge + ' Years Old.')

    var Answer = confirm("Have you had a birthday yet this year?")
        console.log(Answer)

    // Use new Date().getFullYear() to get the current year.
    var currentYear = new Date().getFullYear()
    var birthYear // defining a variable that we are going to use below

    // If the user has had a birthday this year, 
    // subtract their age from the current year.
    if (Answer) { // had a birthday this year
        birthYear = currentYear - UserAge
    }

    // If the user has not yet had a birthday this year, 
    // subtract their age plus one from the current year.
    else {
        birthYear = currentYear - (UserAge + 1)
    }
    
    //console.log(typeof(birthYear))

    // Use an alert to tell the user what year she was born in.
    alert(birthYear.toString())
    
}
