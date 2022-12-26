const dayStart = "07:30";
const dayEnd = "17:45";

function splitStringToMinutes(formatted24HourString) {
    let currentMinutes = Math.floor(Date.now() / 60000)
    let startTimeSplit = formatted24HourString.split(":")
    let minutes = currentMinutes +  (startTimeSplit[0] * 60) + startTimeSplit[1]

    return parseInt(minutes)
}

const dayStartMinutes = splitStringToMinutes(dayStart)
console.log(dayStartMinutes)
const dayEndMinutes = splitStringToMinutes(dayEnd)
console.log(dayEndMinutes)
console.log("---------")

function scheduleMeeting(startTime, durationMinutes) {
    //should take a start time in a 24 hour format as a string 'hh:mm'
    // and a meeting (duration number of minutes)
    // should return true if the meeting falls entirely within the work day
    // (according to the times specified in dayStart and dayEnd)
    // return false if meeting violates work day bounds

    let meetingStartMinutes = splitStringToMinutes(startTime)
    console.log(meetingStartMinutes)
    let meetingEndMinutes = meetingStartMinutes + durationMinutes
    console.log(meetingEndMinutes)

    let isWithinWorkDay = false;

    if ((dayStartMinutes <= meetingStartMinutes) && (dayEndMinutes >= meetingEndMinutes )) { isWithinWorkDay = true; }

    console.log(isWithinWorkDay)
}

scheduleMeeting("7:00",15); //false
scheduleMeeting("07:15",30);
scheduleMeeting("07:30",30);
scheduleMeeting("11:30",60);
scheduleMeeting("17:00",45);
scheduleMeeting("17:30",30);
scheduleMeeting("18:00",15);