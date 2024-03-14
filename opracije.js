function HZ_timer(times, currentTime) {
    // Extract hours, minutes, and seconds from current time
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();
    var currentSecond = currentTime.getSeconds();
    
    // Loop through the array of times
    for (var i = 0; i < times.length; i++) {
        var time = times[i];
        var hour = time[0];
        var minute = time[1];
        var second = time[2];
        
        // Compare the times
        if (currentHour === hour && currentMinute === minute && currentSecond === second) {
            return {found: true, index: i}; // Current time matches one of the provided times
        }
    }
    
    return {found: false, index: -1}; // Current time does not match any of the provided times
}

function HZ_index(times, currentTime){

    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();
    var IN_min_current = currentHour*60+currentMinute;
 

    for (var i = 0; i < times.length; i++) {
        var time1 = times[i+1];
        var hour1 = time1[0];
        var minute1 = time1[1];
        var IN_min1 = hour1*60+minute1;

        var time = times[i];
        var hour = time[0];
        var minute = time[1];
        var IN_min = hour*60+minute;
  
        
        // Compare the times
        if ((IN_min <= IN_min_current) && (IN_min_current <= IN_min1)) {
                return {index: i}; // Current time matches one of the provided times
            
        }
    }
    return {index: -1}
}

function HZ_index_BREAK(times,times1, currentTime){

    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();
    var currentSecond = currentTime.getSeconds();
    var IN_min_current = currentHour*60+currentMinute*60 + currentSecond;
 

    for (var i = 0; i < times.length; i++) {
        var time1 = times1[i+1];
        var hour1 = time1[0];
        var minute1 = time1[1];
        var second1 = time1[2];
        var  IN_min1 = hour1*60+minute1*60+second1;

        var time = times[i];
        var hour = time[0];
        var minute = time[1];
        var second = time[2];
        var IN_min = hour*60+minute*60+second;
  
        // Compare the times
        if ((IN_min <= IN_min_current) && (IN_min_current <= IN_min1)){
                return {HZ_break:true}; // Current time matches one of the provided times
            
        }
    }
    return {HZ_break:false};
}


function countdown(inputTime, currentTime) {


    // Extract hours, minutes, and seconds from current time
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();
    var currentSecond = currentTime.getSeconds();

    // Calculate total seconds of current time and input time
    var currentTimeInSeconds = currentHour * 3600 + currentMinute * 60 + currentSecond;
    var inputTimeInSeconds = inputTime[0] * 3600 + inputTime[1] * 60 + inputTime[2];

    // Calculate difference in seconds
    var differenceInSeconds = inputTimeInSeconds- currentTimeInSeconds;

    // Handle negative difference (input time is in the past)
    

    // Convert difference to hours, minutes, and seconds
    var hours = Math.floor(differenceInSeconds / 3600);
    var minutes = Math.floor((differenceInSeconds % 3600) / 60);
    var seconds = differenceInSeconds % 60;

    // Format the countdown string
    var countdownString = minutes.toString().padStart(2, '0') + ":" +
        seconds.toString().padStart(2, '0');

    return countdownString;
}




//TEST
var HZ_start = [
    [1,1,0],
    [15, 30, 0],
    [15, 38, 0],
    [15, 46, 0],
    [15, 54, 0],
    [16, 2, 0],
    [16, 10, 0],
    [16, 18, 0],
    [16, 26, 0],
    [16, 34, 0],
    [16, 42, 0],
    [16, 50, 0],
    [16, 58, 0],
    [17, 6, 0],
    [17, 14, 0],
    [17, 22, 0],
    [17, 30, 0],
    [17, 38, 0],
    [17, 46, 0],
    [17, 54, 0],
    [18, 2, 0],
    [18, 10, 0],
    [18, 18, 0],
    [18, 26, 0],
    [18, 34, 0],
    [18, 42, 0],
    [18, 50, 0],
    [18, 58, 0],
    [19, 6, 0],
    [23,59,59]
    // And so on, until reaching [18, 0, 0]
];

var HZ_stop = [
    [1,0,0],
    [15, 36, 0],
    [15, 44, 0],
    [15, 52, 0],
    [16, 0, 0],
    [16, 8, 0],
    [16, 16, 0],
    [16, 24, 0],
    [16, 32, 0],
    [16, 40, 0],
    [16, 48, 0],
    [16, 56, 0],
    [17, 4, 0],
    [17, 12, 0],
    [17, 20, 0],
    [17, 28, 0],
    [17, 36, 0],
    [17, 44, 0],
    [17, 52, 0],
    [18, 0, 0],
    [18, 8, 0],
    [18, 16, 0],
    [18, 24, 0],
    [18, 32, 0],
    [18, 40, 0],
    [18, 48, 0],
    [18, 56, 0],
    [19, 4, 0]
    // And so on, until reaching [18, 0, 0]
];

var HZ_30SecLeft = [
    [15, 35, 30],
    [15, 43, 30],
    [15, 51, 30],
    [15, 59, 30],
    [16, 7, 30],
    [16, 15, 30],
    [16, 23, 30],
    [16, 31, 30],
    [16, 39, 30],
    [16, 47, 30],
    [16, 55, 30],
    [17, 3, 30],
    [17, 11, 30],
    [17, 19, 30],
    [17, 27, 30],
    [17, 35, 30],
    [17, 43, 30],
    [17, 51, 30],
    [17, 59, 30],
    [18, 7, 30],
    [18, 15, 30],
    [18, 23, 30],
    [18, 31, 30],
    [18, 39, 30],
    [18, 47, 30],
    [18, 55, 30],
    [19, 3, 30]
    // And so on, until reaching [18, 0, 30]
];

//spremeni da bo index pravilni čas



var sound = new Audio("sound.mp3");
var sound1 = new Audio("sound1.mp3");
var sound2 = new Audio("sound2.mp3");


// Function to check time at regular intervals
function checkTime() {

    //TIME
    var currentTime = new Date();
    var HZ_index_S = HZ_index(HZ_start, currentTime);
    var HZ_break_stanje = HZ_index_BREAK(HZ_stop,HZ_start,currentTime);

    if (HZ_break_stanje.HZ_break){
        var HZ_countdown = countdown(HZ_start[HZ_index_S.index+1],currentTime);
        var sintaksa = "Menjava študenov: ";
        
    }else{
        var HZ_countdown = countdown(HZ_stop[HZ_index_S.index+1],currentTime);
        var sintaksa = "Hitri zmenek: ";
    }

    console.log(document.getElementById("countdown"));
    document.getElementById("countdown").textContent = sintaksa + HZ_countdown;
    //index checker for counter
    console.log(HZ_break_stanje);
    console.log(HZ_index_S.index);
    console.log(HZ_countdown);
    
    
    //AUDIO SIGNAL

    var HZ_start_S = HZ_timer(HZ_start,currentTime);
    var HZ_stop_S = HZ_timer(HZ_stop,currentTime);
    var HZ_30SecLeft_S = HZ_timer(HZ_30SecLeft,currentTime);

    if (HZ_start_S.found) {
        console.log("start")
        sound.play();
    }
    else if (HZ_stop_S.found) {
        console.log("stop")
        sound2.play();
    } 
    else if (HZ_30SecLeft_S.found){
        console.log("30s")
        sound1.play();
    }else {
        console.log("help")
    }
    
    
}

// Check time every second (adjust interval as needed)
setInterval(checkTime, 1000); // 1000 milliseconds = 1 second