import Timer from "./Timer.js";

export default {
  components: {
    timer: Timer
  },
  data() {
    return {
      greet: "Hello there, Let's fire up a focused learning session 🔥",
      newSessionName: "",
      timers: []
    };
  },
  computed: {
    gridClass() {
      return this.timers.length > 2
        ? "grid grid-cols-3 gap-4"
        : this.timers.length === 2
        ? "grid grid-cols-2 gap-4"
        : "grid grid-cols-1 gap-4";
    }
  },
  methods: {
    addTimer() {
      const newTimer = Vue.reactive({
        id: uuid.v4(),
        title: this.newSessionName,
        seconds: 0,
        running: true,
        intervalId: null
      });

      newTimer.intervalId = setInterval(() => {
        newTimer.seconds++;
      }, 1000);

      this.timers.push(newTimer);
      this.newSessionName = "";
    },
    pauseTimer(timer) {
      clearInterval(timer.intervalId);
      timer.running = false;
    },
    resetTimer(timer) {
      clearInterval(timer.intervalId);
      timer.seconds = 0;
      timer.running = false;
    },
    startTimer(timer) {
      if (!timer.running) {
        timer.running = true;
        timer.intervalId = setInterval(() => {
          timer.seconds++;
        }, 1000);
      }
    }
  }
};
