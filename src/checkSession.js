'use strict';

const IN = 0
const OUT = 1;
const CHECK = 2;


export function checkSession(token) {

  if (token === '' && localStorage.getItem('token') === null) {
    return OUT;
  } else if (token === '' && localStorage.getItem('token') !== null) {
    return CHECK;
  } else if (token !== '' && localStorage.getItem('token') !== null) {
    return IN;
  }
}