export default {
  data() {
    return {
      greet: "Hello there, Let's fire up a focused learning session 🔥",
      newSessionName: "",
      timers: [
        { id: uuid.v4(), title: "Timer 1" },
        { id: uuid.v4(), title: "Timer 2" }
      ]
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
      const newTimer = {
        id: uuid.v4(),
        title: this.newSessionName
      };
      this.timers.push(newTimer);
      this.newSessionName = "";
    }
  }
};
