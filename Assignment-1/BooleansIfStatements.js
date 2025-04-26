//checking eligible to drive or not
function evaluateConditions(obj) {
    if (obj.age >= 18 && obj.hasLicense === true)
        return "Eligible to drive the Vechile";
    else return "Not Eligible to Ride the vechiles";
}
const object1 = {
    age: 21,
    hasLicense: true,
};
const object2 = {
    age: 15,
    hasLicense: true,
};
console.log(evaluateConditions(object1));
console.log(evaluateConditions(object2));

// checking the comfort level in the room
function checkHumidity(obj) {
    if (obj.temparature > 30 || obj.humidity > 70)
        return "High Discomfort level";
    else return "Everything is Normal";
}
const temp1 = {
    temparature: 30,
    humidity: 78,
};
console.log(checkHumidity(temp1));

// giving the access to the persons
function checkEligibility(obj) {
    if (
        (obj.role === "admin" || obj.role === "editor") &&
        obj.isActive == true
    )
        return "Access Granted";
    else return "Denied Access";
}
const person1 = {
    role: "admin",
    isActive: true,
};
console.log(checkEligibility(person1));
