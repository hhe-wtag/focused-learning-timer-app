export default {
  template: `
    <div class="p-4 bg-blue-200 rounded w-40 h-40 flex flex-col text-center">
      <h2>{{ title }}</h2>
      <p>{{ formattedTime }}</p>
      <button v-if="!running" @click="startTimer">Start</button>
      <button v-if="running" @click="pauseTimer">Pause</button>
      <button @click="resetTimer">Reset</button>
    </div>
  `,
  props: {
    title: String,
    seconds: Number,
    running: Boolean
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.seconds / 60);
      const remainingSeconds = this.seconds % 60;
      return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;
    }
  },
  methods: {
    startTimer() {
      this.$emit("startTimer");
    },
    pauseTimer() {
      this.$emit("pauseTimer");
    },
    resetTimer() {
      this.$emit("resetTimer");
    }
  }
};
