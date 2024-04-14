"use strict";
// Khai báo kiểu enum cho các ngày trong tuần
var WeekDays;
(function (WeekDays) {
    WeekDays["Monday"] = "Monday";
    WeekDays["Tuesday"] = "Tuesday";
    WeekDays["Wednesday"] = "Wednesday";
    WeekDays["Thursday"] = "Thursday";
    WeekDays["Friday"] = "Friday";
    WeekDays["Saturday"] = "Saturday";
    WeekDays["Sunday"] = "Sunday";
})(WeekDays || (WeekDays = {}));
// In tất cả các ngày trong tuần từ enum
console.log("Các ngày trong tuần:");
console.log(WeekDays.Monday);
console.log(WeekDays.Tuesday);
console.log(WeekDays.Wednesday);
console.log(WeekDays.Thursday);
console.log(WeekDays.Friday);
console.log(WeekDays.Saturday);
console.log(WeekDays.Sunday);
