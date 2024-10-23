# Focused Learning Timer

## Overview

The **Focused Learning Timer** project is designed to help users create and manage multiple session timers for focused learning. The app allows users to customize timers with session names and provides basic controls like start, pause, reset, and delete. It adapts its layout based on the number of timers, ensuring a responsive and intuitive user experience.

As the project grows, key Vue.js lifecycle hooks will be strategically implemented to manage data fetching, state updates, and resource cleanup, ensuring smooth and efficient timer operations. The project aims to incorporate advanced features such as data persistence, error handling, and notifications for completed timers in future iterations.

---

## Features

1. **Multiple Timers**
   - Ability to create multiple learning session timers.
   - Each timer is individually customizable with a session name.

2. **Timer Controls**
   - **Start/Pause**: Users can start or pause any timer.
   - **Reset**: Timers can be reset to their initial values.
   - **Delete**: Ability to delete a specific timer.

3. **Responsive Layout**
   - The layout dynamically adjusts based on the number of active timers:
     - 1 timer: Single-column layout.
     - 2 timers: Two-column layout.
     - 3 or more timers: Three-column grid layout.

4. **Session Name Input**
   - Users can input custom session names for each timer before creating them.

5. **Data Persistence** (Future Feature)
   - Storing and fetching previous timer sessions from local storage or a database.

6. **Error Handling**
   - Implement error handling for session management and user interactions.

7. **Notification on Timer Completion** (Future Feature)
   - Notify the user when a timer completes its session.

---

## Potential Hooks Usage Based on Features

### 1. Focus on Input Field on Initial Mount 
- **Feature**: Creating new timers and rendering them on the UI.
- **Hook**: `mounted`
  - **Goal**: focus on the session name input field to improve accessibility and user experience after the component is fully mounted.

### 2. Start, Pause, and Reset Timers
- **Feature**: Handling the start, pause, and reset functionality for each timer.
- **Hook**: `updated`
  - **Goal**: Keep the UI updated in sync with the timer's state changes (e.g., when paused or reset).

### 3. Dynamic Layout Adjustment
- **Feature**: Adjusting the grid layout dynamically based on the number of timers.
- **Hook**: `watch`
  - **Goal**: Monitor the number of timers and dynamically update the layout (one, two, or three-column).

### 4. Data Persistence & Fetching
- **Feature**: Fetching saved timers from local storage or a database.
- **Hook**: `beforeMount`
  - **Goal**: Fetch any stored timer sessions before rendering the UI.

### 5. Cleanup on Timer Deletion
- **Feature**: Handling cleanup when a timer is deleted (e.g., clearing intervals).
- **Hook**: `beforeUnmount`
  - **Goal**: Clean up active intervals or listeners before a timer component is removed from the DOM.

### 6. Notifications or Alerts
- **Feature**: Notify the user when a timer completes.
- **Hook**: `watch`
  - **Goal**: Watch for timer completion and trigger notifications when the countdown reaches zero.

---

## Future Development

- Implement **local storage** or database integration to persist timers between sessions.
- Add **notifications** when timers complete.
- Expand error handling using `errorCaptured` for better user experience.
- Improve accessibility and keyboard navigation for a more inclusive design.

---
