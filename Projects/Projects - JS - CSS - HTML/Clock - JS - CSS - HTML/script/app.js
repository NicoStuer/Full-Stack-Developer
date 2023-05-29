const $time = document.querySelector('.time');
$date = document.querySelector('.date');

function digitalColck(){
    let f = new Date();
    day = f.getDate();
    month = f.getMonth() + 1;
    year = f.getFullYear();
    dayWeek = f.getDay();

    day = ('0' + day).slice(-2);
    month = ('0' + month).slice(-2); 

    
    let timeString = f.toLocaleTimeString()
    $time.innerHTML = timeString;
    
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let showWeek = (week[dayWeek]);

    $date.innerHTML = `${day}-${month}-${year} ${showWeek}`
}

setInterval(() => {
    digitalColck()
}, 1000);