# paz-portfolio

Personal portfolio built with React, Vite, and Tailwind CSS.

## Requirements
- Node.js (includes npm)

## Install and Run
1. Open terminal in the project root.
2. Go to the client app:
   `cd client`
3. Install dependencies:
   `npm install`
4. Ensure Phosphor React is installed:
   `npm install phosphor-react`
5. Run the dev server:
   `npm run dev`

## Build and Preview
- Build for production:
  `npm run build`
- Preview production build:
  `npm run preview`

## Project Structure
- `client/src/main.jsx` - Entry point that mounts the app.
- `client/src/App.jsx` - Root layout and section order.
- `client/src/index.css` - Global styles and background system.
- `client/src/data/projects.js` - Project data and media links.
- `client/src/components/` - Reusable UI components.
- `client/src/sections/` - Page sections.

## Components
- `Navbar.jsx` - Sticky top navigation with anchors.
- `Footer.jsx` - Footer layout and last updated text.
- `Container.jsx` - Page width wrapper with responsive padding.
- `Sectiontitle.jsx` - Section heading block with kicker, title, subtitle.
- `Chip.jsx` - Small pill-style tag for tech and filters.
- `AsciiTerminal.jsx` - Animated terminal that displays skill snippets.
- `ChocoboBuddy.jsx` - Interactive mascot widget with animations.
- `Modal.jsx` - Portal modal used for video and screenshots.
- `ProjectMedia.jsx` - Thumbnail with modal video playback for the showcase.
- `ProjectVideo.jsx` - Alternate video modal component (legacy).
- `projects/ProjectCard.jsx` - Project card used in the grid/carousel.
- `projects/ProjectFilters.jsx` - Filter pills for project categories.
- `projects/ProjectShowcase.jsx` - Featured project display plus engineering notes.

## Sections
- `Hero.jsx` - Intro headline and main CTAs.
- `About.jsx` - Bio, skills, certifications, and terminal widget.
- `Projects.jsx` - Filters, featured showcase, and project list.
- `Contacts.jsx` - Contact info, links, and message form.

## Notes
- Icons are provided by Phosphor React.
- Tailwind CSS is used for all styling.
