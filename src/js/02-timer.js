import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const featureDateValue = document.querySelector('#datetime-picker');
const dateValue = document.querySelectorAll('.value');

let date = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  dateFormat: 'H:i d.m.Y',
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    date = selectedDates[0].getTime();
    if (date <= options.defaultDate.getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    date = selectedDates[0];
    startBtn.disabled = false;
    Notiflix.Notify.success('Date is correct');
  },
};

flatpickr("input[type = 'text']", options);

startBtn.disabled = true;
startBtn.addEventListener('click', () => {
  timer.end();
});

const timer = {
  isActive: false,
  intervalId: null,
  end() {
    if (this.isActive) {
      return;
    }
    const endTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const ms = date - currentTime;
      console.log(ms);
      if (ms < 0) {
        Notiflix.Notify.info('Happy New Year!!!');
        return clearInterval(this.intervalId);
      }
      const { days, hours, minutes, seconds } = convertMs(ms);
      updateTimerValue({ days, hours, minutes, seconds });
      console.log(`${days}:${hours}:${minutes}:${seconds}`);
    }, 1000);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerValue({ days, hours, minutes, seconds }) {
  dateValue[0].textContent = `${days}`;
  dateValue[1].textContent = `${hours}`;
  dateValue[2].textContent = `${minutes}`;
  dateValue[3].textContent = `${seconds}`;
}

// ===================== timer India))) =============
//

// function getTimeConponents(time) {
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, mins, secs };
// }
