export default function generateCurrentYear() {
    var now = new Date();
    var end = now.setFullYear(now.getFullYear(), 13, 31)
    var daysOfYear = [];
    for (var d = now; d <= end; d.setDate(d.getDate() + 1)) {
        daysOfYear.push({ date: d, isWeekend: d.getDay() === 0 || d.getDay() === 6 });
    }

    return daysOfYear
}