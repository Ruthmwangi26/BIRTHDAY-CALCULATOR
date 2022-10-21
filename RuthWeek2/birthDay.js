const submit = () => {
// retrieve elements
var dateElement = document.getElementById("date")
const genderElement = document.getElementById("gender")


// retrieving input values

var date = dateElement.value; 
// var myDate = Date("date")=> converting string to date
const gender = genderElement.value;

// day of the week function



// newDate = parseInt(date)
// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
// date = cc-yy-mm-dd

// Retrieve the date values from the date of birth for us to run the day of the week function

    const submit = [date,gender]

    var CC = date.slice(0,2)

    var YY = date.slice(2,4)

    var MM = date.slice(5,7)

    var DD = date.slice(8,10)



    var dayOfTheWeek = (((CC/4)-2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD) % 7

// day of the week object defination
var 0 == sunday;
var 1 == monday;





 console.log(dayOfTheWeek)









}