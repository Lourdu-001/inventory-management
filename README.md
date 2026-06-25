# Inventory Management Landing Page

A modern, responsive landing page built with Next.js, Tailwind CSS, and Framer Motion based on the provided Figma design.

## Features

* Responsive design for Desktop, Tablet, and Mobile
* Component-based architecture
* SEO-friendly structure
* Smooth animations and transitions using Framer Motion
* Accessible and scalable UI components
* Optimized image handling with Next.js
* Clean and maintainable codebase

## Tech Stack

* Next.js 15
* React 19
* Tailwind CSS
* Framer Motion
* React Icons

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

## Running the Project

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Project Structure

```text
app/
│
├── page.tsx
├── layout.tsx
├── globals.css
│
components/
│
├── layout/
│   ├── Header.tsx
│   └── Footer.tsx
│
├── sections/
│   ├── Hero.tsx
│   ├── Clients.tsx
│   ├── Problems.tsx
│   ├── Workflow.tsx
│   ├── UomSetup.tsx
│   ├── RealLife.tsx
│   ├── ProcessFlow.tsx
│   └── Benefits.tsx
│
└── ui/
    ├── Button.tsx
    ├── Card.tsx
    ├── Container.tsx
    └── SectionHeading.tsx
```

## Animations

The project uses Framer Motion to provide:

* Fade-in effects
* Slide-up animations
* Hover interactions
* Button transitions
* Scroll-triggered section reveals

## Responsive Design

The page is optimized for:

* Desktop
* Tablet
* Mobile

Layouts adapt using Tailwind CSS responsive utilities to ensure consistent spacing and usability across devices.

## Accessibility

* Semantic HTML structure
* Descriptive image alt attributes
* Keyboard-accessible navigation
* Proper color contrast and readable typography

## Deployment

The project can be deployed on Vercel:

```bash
npm run build
```

Deploy using the Vercel dashboard or CLI.

## Author

Lourdushelton

Frontend / Web Developer
