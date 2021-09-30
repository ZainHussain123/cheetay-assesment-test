function maxMeetings(s, f, n) {
    let meetings = [];
    for (let i = 0; i < n; i++) {
        meetings.push({
            start: s[i],
            end: f[i],
            pos: i + 1,
        })
    }
    meetings = meetings.sort(function (a, b) {
        return a.end - b.end;
    })
    let timeLmit = meetings[0].end;
    let meet = [];
    meet.push(meetings[0].pos);
    for (let i = 1; i < n; i++) {
        if (meetings[i].start >= timeLmit) {
            meet.push(meetings[i].pos);
            timeLmit = meetings[i].end;
        }
    }
    return meet.length;
}


let s = [75250, 50074, 43659, 8931, 11273,
    27545, 50879, 77924];
let f = [112960, 114515, 81825, 93424, 54316,
    35533, 73383, 160252];
let n = s.length;
console.log('Meetings Count', maxMeeting(s, f, n));
