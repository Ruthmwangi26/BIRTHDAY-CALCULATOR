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

    var CC = date.slice(0,2);

    var YY = date.slice(2,4);

    var MM = date.slice(5,7);

    var DD = date.slice(8,10);

    const dates = [CC, YY, MM, DD]

console.log(date)

    var dayOfTheWeek = Math.floor((((CC/4)-2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD)%7);
    
    
//    days of the week

    var daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ];
 
    //   male Akan names
      var maleAkanNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
      ];

// female Akan names
      var femaleAkanNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
      ];
 

    //   male name get function

    if (gender == "male" & dayOfTheWeek==[index]) {
        alert('you were born on' + daysOfWeek[index] + 'your Akan name is ' + maleAkanNames[index])

    }


console.log(submit)





}