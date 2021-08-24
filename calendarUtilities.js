import moment from 'moment'

function hashCode(s) {
    for(var i = 0, h = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
}

function generateCurrentYear(holidays) {
    var now, end
    now = new Date(2021, 0, 1, 0, 0, 0, 0)

    now.setHours(0, 0, 0, 0)
    end = new Date(2021, 11, 31, 0, 0, 0, 0)

    var daysOfYear = [];

    var holidayHashtable = {}
    holidays.forEach(_ => holidayHashtable[hashCode(_.date)] = _)

    for (var d = now; d <= end; d.setDate(d.getDate() + 1)) {
        let day = new Date(d)
        let id = hashCode(moment(day).format('YYYY-MM-DD'))
        daysOfYear.push({ 
            date: day,
            id: id,
            isHoliday: holidayHashtable[id],
            holidayName: holidayHashtable[id] ? holidayHashtable[id].localName : '',
            isWeekend: day.getDay() === 0 || day.getDay() === 6 });
    }

    return daysOfYear
}

export { generateCurrentYear, hashCode }