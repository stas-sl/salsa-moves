https://stas-sl.github.io/salsa-moves

[![Site deploy](https://github.com/stas-sl/salsa-moves/actions/workflows/nuxtjs.yml/badge.svg)](https://github.com/stas-sl/salsa-moves/actions/workflows/nuxtjs.yml)

## Overview

<img width="1221" alt="image" src="https://github.com/user-attachments/assets/83a51ff6-4f11-42ac-96ee-5720a0528184" />

This app was primarily developed for my own use to catalog, remember, and practice salsa moves (linear On2/On1). It was inspired by Anki flashcards, which are primarily used for language learning but can be applied to any subject, from medical exams to music theory.

One challenge with salsa moves is that beyond basic steps like the cross-body lead or left/right turn, most intermediate and advanced moves don’t have standardized names. To address this, I decided to use sequential numbering. While memorizing moves by number isn’t ideal, I believe that, just as we learn the multiplication table, our brains can absorb any information through regular practice.

Another advantage of using numbers is that it allows us to track how many moves exist. Learning to dance is often compared to learning a language. In English, there are over 100,000 words, but an average person actively uses only 20,000–30,000. Some words appear more frequently than others, following Zipf’s law distribution. The same principle applies to dance moves, but there is no clear answer to how many moves exist, what qualifies as a distinct move, or whether the total number is finite.

### Moves selection
I aim to keep each move as short as possible—typically 8 or 16 counts, occasionally slightly longer. Each move should be concise but still convey the core idea. I also include a few counts before and after the move to clarify how to transition into and out of it.

If I find variations of a move—whether due to differences in execution, timing, or entry/exit—I label them with letters (e.g., A/B/C). Viewing the same move from different angles can provide a deeper understanding and offer multiple ways to transition into it.

Another way moves are connected is through related moves. These aren’t necessarily identical but share a key detail, whether large or small. Such moves are listed under the "Related" section.

The catalog primarily contains intermediate-level moves. It does not include very basic moves, as these are best learned in real classes rather than from short videos. At the same time, I avoid including overly complex moves that are impractical for social dancing—though there may be some exceptions.

In the future, I plan to add better tagging and categorization features, such as move complexity (beginner/intermediate/advanced) and thematic tags (e.g., hand tosses, arm work, turns, redirections, specific variations, etc.).

## How to Use the App
### Main Page
The main page displays a list of all moves, allowing you to scroll through them for an overview.

Each move can be assigned one of three states:

- New – The default state when a move is first added.
- Learning – Assigned when you decide to actively practice a move.
- Review – For moves you have already learned and want to reinforce.

You can manually change a move's state as you progress.

### Practice Mode
Practice mode is inspired by Anki. Initially, you are shown a move's number and must recall the move from memory. You then rate how difficult it was to remember.

If a move is easy to recall, it will be shown less frequently.
If a move is difficult to remember, it will appear more often.
Instead of using Anki’s spaced repetition algorithm, I implemented a system based on multi-armed bandits and Thompson sampling. This method analyzes how often you press "Good" or "Hard" for each move and stochastically selects moves that have a higher ratio of "Hard" answers in recent practice sessions.

A key parameter in this system is temperature, which ranges from 0 to 1:

- At 1, selection is nearly random, mixing hard and easy moves equally.
- At 0, it focuses almost exclusively on the hardest moves.
- A practical setting is 0.8, which ensures a balanced mix—favoring harder moves but occasionally including easier ones for reinforcement.

When starting a practice session, you can filter moves by state (e.g., "Learning" or "Review").

#### Ways to Practice
- **With a partner** – The best option, especially when learning new moves.
- **Shadow dancing** – Practicing your own steps while imagining a partner.
- **Visualization** – Mentally rehearsing the move, which is useful for reviewing or reinforcing basic moves.
  
### Personal State Management
Currently, the app does not require registration or authentication. Instead, when you first open the app in a browser, a unique user ID is assigned and stored in local storage. Your progress is then tracked on the server using this ID.

If you know how to access and modify local storage via the browser console, you can manually transfer your user ID to another device. While not the most user-friendly approach, it allows for basic state management without requiring an account. In the future, I may implement a more standard authentication system.

## Similar projects

There were similar projects I was inspired by.

- https://bachatasteps.com/?topic=salsa&options=newest This site includes a mix of Cuban and linear salsa moves, all identified by numbers. It also allows users to upload their own moves, though I haven’t seen any new additions in the past 2–3 months. Most of the content consists of tutorial videos rather than social dancing clips.
- https://www.salsaenmovimientos.com
  This site has a cool feature that classifies each move based on its starting and ending position. There are over 200 positions in total, though most moves fall into one of the 10 most common positions, with a long tail of more exotic positions and handholds. The site contains over 3,000 moves from social dances, but many are not unique—often featuring the same basic moves performed by different dancers. This makes it difficult to determine the exact number of unique moves. Navigating through the moves can also be challenging. You can't view all moves on a single page; instead, you have to click multiple times just to see each move individually.

The main distinction of this project from mentioned sites is practice mode + being open source.

## Contributing
The app is currently in its MVP (Minimum Viable Product) stage—meaning it has only the essential features needed to be useful. There is still a lot of room for improvement.

### Development

### Setup

Make sure to install dependencies:

```bash
npm install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

### Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```
