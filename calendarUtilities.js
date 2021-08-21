export default function generateCurrentYear() {
    var now, end
    now = new Date()
    now.setHours(0, 0, 0, 0)
    end = new Date(2021, 11, 31, 0, 0, 0, 0)
    var daysOfYear = [];
    for (var d = now; d <= end; d.setDate(d.getDate() + 1)) {
        let day = new Date(d)
        daysOfYear.push({ date: day, isWeekend: day.getDay() === 0 || day.getDay() === 6 });
    }

    return daysOfYear
}