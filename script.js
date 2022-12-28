function validation() {
  uid = document.getElementById("uid").value;
  fname = document.getElementById("fname").value;
  lname = document.getElementById("lname").value;
  birthday = document.getElementById("date").value;

  if (uid.length === 0) {
    document.getElementById("invalid").innerHTML = "uid is empty";
  } 
  else if (uid.length > 8 && uid.length < 12) {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");
    if (re.test(uid)) {
      document.getElementById("invalid").innerHTML =""
    }else {
      document.getElementById("invalid").innerHTML ="Invalid user ID";
    }
  } else {
    document.getElementById("invalid").innerHTML ="enter UID in between 8 and 12 character";
  }
  if (fname.length === 0) {
    document.getElementById("invalidname").innerHTML = " Invalid First name ";
  } else {
    document.getElementById("invalidname").innerHTML = "";
  }
  if (lname.length === 0) {
    document.getElementById("invalidlname").innerHTML = " Invalid Last name";
  } else {
    document.getElementById("invalidlname").innerHTML = "";
  }
  if (birthday.length === 0) {
    document.getElementById("datediff1").innerHTML = " Invalid Date";
  } else {
    document.getElementById("datediff1").innerHTML = "";
  }
  const noOfDays = dateDiff(birthday)
  if (fname && lname && noOfDays > 0) {
    document.getElementById("datediff").innerHTML =
      fname + ' ' + lname + " You have been breathing for " + Math.ceil(noOfDays) + " days!";
  }
  if (Math.ceil(noOfDays) < 365 * 18) {
    document.getElementById("ageValid").innerHTML = 'You are probably not old enough to take the course'
  } else {
    document.getElementById("ageValid").innerHTML = ''
  }
}
const dateDiff = (date) => {
  const presentDate = new Date();
  const date1 = new Date(date);
  const diff = Math.abs(date1 - presentDate);
  const noOfDays = diff / (1000 * 3600 * 24);
  return noOfDays
}