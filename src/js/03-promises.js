import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onButtonSubmit);

console.log(formRef);
let position = 0;

function onButtonSubmit(e) {
  e.preventDefault();
  let delay = Number(e.currentTarget.elements.delay.value);
  const step = Number(e.currentTarget.elements.step.value);
  const amount = Number(e.currentTarget.elements.amount.value);

  setInterval(() => {
    if (position == amount) {
      return;
    }
    position += 1;
    setTimeout(() => {
      delay += step;
    });

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }, step);
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setInterval(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
  return promise;
}

// import Notiflix from 'notiflix';

// const refs = {
//   form: document.querySelector('.form'),
//   delay: document.querySelector('input[name="delay"]'),
//   step: document.querySelector('input[name="step"]'),
//   amount: document.querySelector('input[name="amount"]'),
//   button: document.querySelector('button'),
// };

// let delay = refs.delay.value;
// let step = refs.step.value;
// let amount = refs.step.value;
// let position = 0;

// refs.form.addEventListener('submit', onButtonSubmit);

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve();
//       }

//       reject();
//     }, delay);
//   });
// }

// function onButtonSubmit(e) {
//   e.preventDefault();
//   console.log(amount);
//   if (position == amount) {
//     return;
//   }
//   createPromise(position, delay)
//     .then(result => Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
//     .catch(result => Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
// }

// ================================

// function onButtonSubmit(e) {
//   e.preventDefault();
//   let delay = refs.delay.value;
//   // Number(e.currentTarget.elements.delay.value);
//   let step = refs.step.value;
//   // Number(e.currentTarget.elements.step.value);
//   let amount = refs.amount.value;
//   // Number(e.currentTarget.elements.amount.value);
//   console.log(amount);
//   if (position == amount) {
//     return;
//   }

//   function createPromise(position, delay) {
//     const promise = new Promise((resolve, reject) => {
//       const shouldResolve = Math.random() > 0.3;
//       setInterval(() => {
//         position += 1;
//         delay += refs.step.value;

//         if (shouldResolve) {
//           resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//         }
//         reject(`❌ Rejected promise ${position} in ${delay}ms`);
//       }, delay);
//     });
//   }
// }
// createPromise(position, delay)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
// =======================было================
//   setInterval(() => {
//     if (position == amount) {
//       return;
//     }
//     position += 1;
//     setTimeout(() => {
//       delay += step;
//     });
//     createPromise(position, delay)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//   });

// function createPromise(position, delay) {
//   const promise = new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setInterval(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       }
//       reject({ position, delay });
//     }, delay);
//   });
//   return promise;
// }
