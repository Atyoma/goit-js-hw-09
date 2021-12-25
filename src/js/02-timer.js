// input[(type = 'text')];

// Описан в документации
import flatpickr from 'flatpickr';
// // Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
const startBtn = document.querySelector('button[data-start]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= options.defaultDate.getTime()) {
      window.alert('Please choose a date in the future');
      return;
    }
    startBtn.disabled = false;
    console.log(selectedDates[0].getTime());
    console.log(options.defaultDate.getTime());
  },
};

flatpickr("input[type = 'text']", options);

// flatpickr('#myID', {});
