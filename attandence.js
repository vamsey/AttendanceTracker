document.addEventListener("DOMContentLoaded", function () {
    const attendedInput = document.querySelector(".inp1");
    const conductedInput = document.querySelector(".inp2");
    const requiredInput = document.querySelector(".inp3");
    const display = document.querySelector(".display");
    const calcButton = document.querySelector(".calcBtn"); 


    calcButton.addEventListener("click", calculateAttendance);

    function calculateAttendance() {
        let attended = parseInt(attendedInput.value);
        let conducted = parseInt(conductedInput.value);
        let required = parseFloat(requiredInput.value);

        // Handle invalid inputs
        if (isNaN(attended) || isNaN(conducted) || isNaN(required) || conducted === 0) {
            display.innerText = "Please enter valid values.";
            return;
        }

        let attendance = (attended / conducted) * 100;
        attendance = parseFloat(attendance.toFixed(2));
        let days = 0;

        let result = `Your current Attendance percentage is: ${attendance}%\n`;

        if (attendance >= required) {
            result += "You're already meeting the required attendance.";
        } else {
            while (attendance < required) {
                days++;
                attended += 7;
                conducted += 7;
                attendance = (attended / conducted) * 100;
            }
            result += `You need to attend the next ${days} days to reach ${required}%.`;
        }

        display.innerText = result;
    }
});
