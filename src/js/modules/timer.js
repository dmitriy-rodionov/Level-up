const timer = () => {
    const minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds');
    
    function step() {
        let min = +minutes.textContent,
            sec = +seconds.textContent;
        sec--;
        if(sec < 0) {
            min--;
            sec = sec + 60;
        }
        minutes.textContent = min;
        seconds.textContent = sec;
        if(min <= 9) {
            minutes.textContent = '0' + min;
        }
        if(sec <= 9) {
            seconds.textContent = '0' + sec;
        }
        toggleDots();
        if (min == 0 && sec == 0) {
            clearInterval(interval);
        }
    }

    function toggleDots() {
        const dots = document.querySelector('.buy__timer-dots');
        dots.classList.toggle('buy__timer-dots_active');
    }

    const interval = setInterval(step, 1000);

}
export default timer;