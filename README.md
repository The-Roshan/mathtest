# 🧮 Math Challenge

## Overview
The Math Challenge is an interactive, web-based educational game created by Roshan Kumar Prajapati. Built with HTML, CSS, and JavaScript, it tests and improves players' math skills through timed challenges with customizable difficulty levels and timer durations. The game features a question area, input field, real-time stats, a scoreboard for high scores, and a dynamic canvas background. It is optimized for both desktop and mobile devices, offering a fun and engaging way to practice math.

## Features
- **Gameplay** 🎮:
  - Players solve math problems displayed in a question box (`question`) and submit answers via an input field (`answer`).
  - Options to submit or skip questions, with score tracking based on correct answers.
- **Difficulty Levels** 🎚️:
  - **Easy**, **Medium**, and **Hard** modes, adjustable via a dropdown (`difficulty`).
- **Timer Options** ⏱️:
  - Selectable durations of 1 minute, 2 minutes, or 5 minutes (`timer`).
- **Controls** 🕹️:
  - Start and restart buttons (`startButton`, `restartButton`) to begin or reset the game.
  - Submit and skip buttons (`submitButton`, `skipButton`) for answering or skipping questions.
- **Stats Display** 📊:
  - Real-time display of score (`score`) and time left (`timeLeft`) during gameplay.
- **Scoreboard** 🏆:
  - Tracks and displays high scores (`scoreList`) for competitive play.
- **Animated Background** ✨:
  - Canvas-based background (`backgroundCanvas`) with dynamic effects (e.g., particles or gradients, implemented in `script.js`).
- **Responsive Design** 📱:
  - Optimized for various screen sizes using CSS media queries.
- **Visual Design** 🎨:
  - Clean interface with styled buttons, input fields, and a prominent question box (`styles.css`).

## Tech Stack
- **HTML5**: Structure of the game, including header, controls, question area, stats, and scoreboard.
- **CSS3**: Styling for layout, buttons, inputs, and responsive design (`styles.css`).
- **JavaScript**: Game logic, including question generation, timer management, score tracking, and canvas animation (`script.js`).
- **Canvas API**: Used for rendering the animated background.

## Project Structure
```
math-challenge/
├── index.html         # Main HTML file
├── styles.css        # CSS styles for layout and visuals
├── script.js         # JavaScript for game logic and animations
├── LICENSE.md        # MIT License
└── README.md         # This file
```

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge) with Canvas and JavaScript support.
- A code editor (e.g., VS Code) for customization.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/The-Roshan/math-challenge.git
cd math-challenge
```

### 2. Open the Website
- Open `index.html` in a web browser:
  ```bash
  open index.html  # macOS
  start index.html  # Windows
  ```
- Alternatively, use a local development server (e.g., VS Code Live Server) for better performance.

### 3. Customize (Optional)
- Edit `styles.css` to modify colors, button styles, or canvas background effects.
- Update `script.js` to enhance gameplay (e.g., add new question types, sound effects, or high score storage).
- Modify `index.html` to add features like a pause button, category selection, or visual feedback for answers.

## Usage
1. **Select Options** 🎚️: Choose a difficulty (Easy, Medium, Hard) and timer duration (1, 2, or 5 minutes) from the dropdowns.
2. **Start Game** 🚀: Click the "Start" button to display the first math question.
3. **Answer Questions** 🧮: Enter your answer in the input field and click "Submit" or press Enter; use "Skip" to move to the next question.
4. **Track Stats** 📊: Monitor your score and time left in real-time.
5. **View Scoreboard** 🏆: Check high scores after the game ends.
6. **Restart** 🔄: Click the "Restart" button to play again.
7. **Animated Background** ✨: Enjoy the dynamic canvas background.
8. **Responsive** 📱: Play on desktop or mobile for a consistent experience.

## Deployment
- **Static Hosting**:
  1. Upload `index.html`, `styles.css`, and `script.js` to a hosting service (e.g., GitHub Pages, Netlify, Vercel).
  2. Configure the service to serve `index.html` as the entry point.
- **GitHub Pages Example**:
  1. Push the repository to GitHub.
  2. Enable GitHub Pages in the repository settings, selecting the `main` branch.
  3. Access the site at `https://the-roshan.github.io/math-challenge`.
- **Netlify Example**:
  1. Drag the project folder into Netlify’s dashboard.
  2. Deploy and use the provided URL.
- **Local Server**:
  ```bash
  python -m http.server 8000
  ```
  Visit `http://localhost:8000`.

## Notes
- **JavaScript Logic**: The `script.js` file must implement:
  - Question generation based on difficulty (e.g., arithmetic for Easy, algebra for Medium, calculus for Hard).
  - Timer management for selected durations.
  - Score calculation and high score storage (e.g., using `localStorage`).
  - Answer validation and feedback for correct/incorrect submissions.
  - Canvas animation for the background (e.g., particles or gradients).
  - Game state management (start, submit, skip, restart).
- **Styling**: The `styles.css` file should define styles for the game board, buttons, inputs, scoreboard, and responsive layout.
- **Enhancements**: Consider adding:
  - Sound effects for correct/incorrect answers or timer ticks.
  - Visual feedback (e.g., green/red highlights) for answer correctness.
  - Additional math categories (e.g., fractions, geometry).
  - A pause/resume feature or question hints.
  - Integration with an API for dynamic question generation.
- **SEO**: Add meta tags in `<head>` (e.g., `description`, `keywords`) for better visibility, e.g., "Math Challenge game by Roshan Kumar Prajapati".
- **License**: Include the MIT License in `LICENSE.md` to clarify usage terms (as provided previously).
- **Performance**: Optimize canvas animations for low-end devices to prevent lag.

## License
This project is licensed under the MIT License. See `LICENSE.md` for details.

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## Acknowledgments
- Built with HTML, CSS, and JavaScript for an engaging math learning experience.
- Inspired by educational games that make math fun and interactive.
- Created by Roshan Kumar Prajapati.

## Contact
For questions or feedback, contact Roshan Kumar Prajapati:
- 📧 Email: roshanjsr5555@gmail.com
- 📞 Phone: +91 7061126213
- 🌐 GitHub: [The-Roshan](https://github.com/The-Roshan)
