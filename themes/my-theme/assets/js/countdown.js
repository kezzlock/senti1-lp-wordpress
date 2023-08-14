// format number adding '0' if number is less than 10
const formatNumber = (num) => {
    return num < 10 ? '0' + num : num;
};
// main function
const countdown = () => {
    const countDate = new Date("2023-08-25 00:00:00");
    const now = new Date();

    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = formatNumber(Math.floor(gap / day));
    const textHour = formatNumber(Math.floor((gap % day) / hour));
    const textMinute = formatNumber(Math.floor((gap % hour) / minute));
    const textSecond = formatNumber(Math.floor((gap % minute) / second));

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
};

// live counter 
setInterval(countdown, 1000);