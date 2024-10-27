export default {
  template: `
    <div class="p-4 bg-slate-200 rounded w-60 h-60 flex flex-col text-center">
      <h2 class="text-3xl">{{ title }}</h2>
      <p class="text-xl py-2">{{ formattedTime }}</p>
      <button v-if="!running" @click="startTimer" class="mt-2 bg-green-300 py-1 px-2 rounded">Start</button>
      <button v-if="running" @click="pauseTimer" class="mt-2 bg-orange-300 py-1 px-2 rounded">Pause</button>
      <button @click="resetTimer" class="mt-2 bg-blue-300 py-1 px-2 rounded">Reset</button>
      <button @click="deleteTimer" class="mt-2 bg-red-300 py-1 px-2 rounded">Delete</button>
    </div>
  `,
  props: {
    id: String,
    intervalId: Number,
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
    },
    deleteTimer() {
      this.$emit("deleteTimer", this.id);
    }
  },
  beforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
};
