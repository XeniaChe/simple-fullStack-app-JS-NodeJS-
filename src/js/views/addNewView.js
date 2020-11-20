import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { elements, clean } from '../helper.js';

export const getInput = () => {
  let name = elements.nameInput.value;
  let age = elements.ageInput.value;

  return { name, age };
};

export const showNotification = (status, newPerson) => {
  let { name, age } = newPerson;
  const markUp1 = `<li class="Notification__Item--Success">Person added</li>`;
  // const markUp2 = `<li class="Notification__Item--Error">${errorMessage}</li>`;
  const markUp3 = `<li class="Notification__Item--Error">Name or age is missing</li>`;

  if (status) {
    elements.addNewNotifList.insertAdjacentHTML('afterbegin', markUp1);
  }
  /*
  if (!status && errorMessage) {
    elements.addNewNotifList.insertAdjacentHTML('afterbegin', markUp2);
  }
  */
  if (name === '' || age === '') {
    elements.addNewNotifList.insertAdjacentHTML('afterbegin', markUp3);
  }

  setTimeout(() => {
    clean(elements.addNewNotifList);
  }, 1000);
};

export const clearInput = () => {
  elements.nameInput.value = '';
  elements.ageInput.value = '';
};