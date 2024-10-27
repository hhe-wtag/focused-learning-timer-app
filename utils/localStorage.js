export function saveTimersToLocalStorage(timers) {
  localStorage.setItem("timers", JSON.stringify(timers));
}

export function loadTimersFromLocalStorage() {
  const timers = JSON.parse(localStorage.getItem("timers"));
  return timers ? timers : [];
}
