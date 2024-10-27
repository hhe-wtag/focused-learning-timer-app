import Timer from "./Timer.js";

export default {
  template: `
    <header class="text-center py-10 mt-10">
      <h1 class="text-xl">Focused Learning Timer ⏰</h1>
      <p class="text-gray-500">{{ greet }}</p>
    </header>

    <main class="flex flex-col gap-4 items-center">
      <form @submit.prevent="handleAddTimer" class="flex flex-col gap-2">
        <label for="session_name" class="italic text-sm">Session Name</label>
        <div class="flex gap-2">
          <input
            type="text"
            id="session_name"
            class="border rounded border-blue-400 p-2"
            v-model="newSessionName"
            placeholder="Enter session name"
          />
          <button class="bg-blue-300 py-2 px-4 rounded">Create</button>
        </div>
      </form>

      <section :class="gridClass">
        <div v-for="timer in timers" :key="timer.id">
          <Timer
            :title="timer.title"
            :seconds="timer.seconds"
            :running="timer.running"
            @startTimer="handleStartTimer(timer)"
            @pauseTimer="handlePauseTimer(timer)"
            @resetTimer="handleResetTimer(timer)"
          />
        </div>
      </section>
    </main>
  `,
  components: {
    Timer
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
    handleAddTimer() {
      const newTimer = Vue.reactive({
        id: uuid.v4(),
        title: this.newSessionName,
        seconds: 0,
        running: false,
        intervalId: null
      });

      this.timers.push(newTimer);
      this.newSessionName = "";
    },
    handlePauseTimer(timer) {
      clearInterval(timer.intervalId);
      timer.running = false;
    },
    handleResetTimer(timer) {
      clearInterval(timer.intervalId);
      timer.seconds = 0;
      timer.running = false;
    },
    handleStartTimer(timer) {
      if (!timer.running) {
        timer.running = true;
        timer.intervalId = setInterval(() => {
          timer.seconds++;
        }, 1000);
      }
    }
  }
};
