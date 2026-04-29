# Tenzies 🎲

A fun and interactive dice game built with React and Vite. Roll the dice, hold your numbers, and try to get all dice showing the same value to win!

## 🎮 Game Rules

1. **Objective**: Roll until all 10 dice show the same number
2. **How to Play**:
   - Click the "Roll Dice" button to roll all unheld dice
   - Click individual dice to **hold** them (they turn green when held)
   - Keep rolling until all dice show the same value
   - Win and celebrate with confetti animation! 🎉

## 🚀 Features

- **Interactive Dice**: Click dice to hold/unhold them between rolls
- **Win Detection**: Automatically detects when all dice match
- **Confetti Animation**: Celebratory confetti effect on winning
- **Responsive Design**: Clean and modern UI
- **Fast & Efficient**: Built with Vite for optimal performance

## 📁 Project Structure

```
Tenzies/
├── src/
│   ├── App.jsx              # Main game component with logic
│   ├── components/
│   │   └── Die.jsx          # Individual die component
│   ├── index.css            # Styling
│   └── main.jsx             # React entry point
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🔧 Tech Stack

- **React** (v19.2.5) - UI library
- **Vite** (v8) - Build tool & dev server
- **React Confetti** (v6.4.0) - Animation library
- **ESLint** - Code quality

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone or navigate to the project directory:
```bash
cd Tenzies
```

2. Install dependencies:
```bash
npm install
```

## 🎯 Available Scripts

### Development Server
Run the development server with hot-reload:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
Create an optimized production build:
```bash
npm run build
```
Output will be in the `dist/` directory.

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Lint Code
Check code quality with ESLint:
```bash
npm run lint
```

## 🎲 Game Logic Overview

### Core Components

**App.jsx**
- Main game state management using `useState`
- Handles dice rolling logic
- Implements hold/unhold functionality
- Detects win conditions
- Renders the dice grid and buttons

**Die.jsx**
- Individual die component
- Displays dice value (1-6)
- Changes color when held (white → green)
- Handles click events to toggle hold state

### Key Functions

- `generateAllNewDice()`: Creates 10 dice with random values (1-6)
- `rollDice()`: Rolls only unheld dice, or resets game if won
- `hold(id)`: Toggles the held state of a specific die

## 🎨 Styling

The game features a clean, modern design with:
- Large, clickable dice buttons
- Color-coded feedback (green for held dice)
- Centered layout
- Clear instructions
- Responsive button styling

## 🌟 Future Enhancement Ideas

- Add difficulty levels (more/fewer dice, target numbers)
- Track game statistics (rolls, wins, best time)
- Leaderboard with local storage
- Sound effects for rolls and wins
- Mobile touch optimization
- Themes and dark mode

## 📝 License

This project is open source and available for personal and educational use.

---

**Enjoy the game! 🎉**
