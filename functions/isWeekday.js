module.exports = function(day){
    return day.startsWith('M') || day.startsWith('T') || day.startsWith('W') || day.startsWith('T') || day.startsWith('F')
}