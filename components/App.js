export default {
    template: `
      <header class="text-center py-10 mt-10">
        <h1 class="text-xl">Focused Learning Timer ⏰</h1>
        <p class="text-gray-500">{{ greet }}</p>
      </header>
  
      <main class="flex flex-col gap-4 items-center">
        <form @submit.prevent="addTimer" class="flex flex-col gap-2">
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
          <div
            v-for="timer in timers"
            :key="timer.id"
            class="p-4 bg-blue-200 rounded w-40 h-40 flex flex-col text-center"
          >
            <h2>{{ timer.title }}</h2>
          </div>
        </section>
      </main>
    `,
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
  