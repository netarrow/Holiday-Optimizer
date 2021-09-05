import moment from 'moment'

function hashCode(s) {
    for(var i = 0, h = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
}

function generateCurrentYear(holidays, noworking) {
    var now, end
    now = new Date(2020, 8, 1, 0, 0, 0, 0)

    now.setHours(0, 0, 0, 0)
    end = new Date(2021, 7, 31, 0, 0, 0, 0)

    var daysOfYear = [];

    var holidayHashtable = {}
    holidays.forEach(_ => holidayHashtable[hashCode(_.date.slice(5))] = _)

    for (var d = now; d <= end; d.setDate(d.getDate() + 1)) {
        let day = new Date(d)
        let id = hashCode(moment(day).format('MM-DD'))
        daysOfYear.push({ 
            date: day,
            id: id,
            isHoliday: holidayHashtable[id],
            holidayName: holidayHashtable[id] ? holidayHashtable[id].localName : '',
            isWeekend: noworking.includes(day.getDay()) });
    }

    return daysOfYear
}

export { generateCurrentYear, hashCode }