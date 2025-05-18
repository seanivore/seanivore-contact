# Projects Overview 
Project Directory: `/Users/seanivore/Development/seanivore-contact`

## Concept 

- Single-page website 
- Living portfolio 
- Select projects 
- Overview of project points
- Links to repo/websites 
- Brief commentary adds personality 
- Contact information 
- Simple and direct 

This casual, conversational style is meant to compliment the more formal and professional style of the 'Digital Asset Showcase' website recently completed, where we illustrated web development, design, and user experience capabilities by turning old projects of mine into high-demand digital products; polished and in a walled garden. 

- [https://design.august.style](https://design.august.style)

This new site will be posted on `https://projects.august.style`.

## Content 

Five main project categories with multiple sub-projects, all prepared on the single INDEX.html file. You can find the drafted copy on [./INDEX.md](../.claude/INDEX.md). 

- 1. Agentic Workflow Case Studies
  - 1.1 'AI Voice Marketing Research Strategy & Implementation Guides'
  - 1.2 'An Agentic Marketing Department' 
- 2. Model Context Protocol Servers Builds
  - 2.1 'The Pensieve MCP'
  - 2.2 'Markdown to PDF MCP'
  - 2.3 'Code Analysis MCP'
  - 2.4 'Agent Design Preview MCP'
- 3. Tool & Website Development 
  - 3.1 'File-Drop Triggered Audio Transcription'
  - 3.2 'AI Philosophy by AI Blog Site' 
  - 3.3 'Modular Portfolio Build' 
- 4. Resurrected Webflow and Framer Websites
  - 4.1 'Robust, Automated, E-Commerce Site'
  - 4.2 '200+ AI Generated Weekly Self-Help Blogs'
  - 4.3 'Fashion Lookbook & 500+ Print Store'
  - 4.4 'Custom Art & Site for Training & Yoga Client'
  - 4.5 'WEB3, NFT & Motion Design Portfolio'
- 5. Art Gallery Websites 
  - 5.1 'Thousands of Art Movement-Accurate Prints'
  - 5.2 'Illustration & Animation Projects' 

## Design 

### Favicon

```html
<link rel="icon" type="image/png" href="/assets/favicon/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/assets/favicon/favicon.svg" />
<link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="seanivore" />
<link rel="manifest" href="/assets/favicon/site.webmanifest" />
```

### Typography 

All off-white text. 

- H1: [Bitcount-Mono-Double-Book-Square.otf](/assets/fonts/Bitcount-Mono-Double-Book-Square.otf)
- H2: [FreightNeo Pro Bold Italic.otf](/assets/fonts/FreightNeo%20Pro%20Bold%20Italic.otf)
- H3: [FreightNeoCndProBlack-Regular.otf](/assets/fonts/FreightNeoCndProBlack-Regular.otf)
- Blockquote: [FreightNeoCndProLight-Italic.otf](/assets/fonts/FreightNeoCndProLight-Italic.otf)
- Paragraph: [FreightNeoCndProBook-Regular.otf](/assets/fonts/FreightNeoCndProBook-Regular.otf)

### Color Palette 

Here is the palette though I mentioned that the background circles could probably have some shade variance either from a stroke or gradient, but centered around the main color. 

```CSS 
  --h1-rectangle: #E3B547;
  --h2-icons: #B167B2;
  --bg-circle-1: #D8523A;
  --bg-circle-2: #23A2C7;
  --bg-circle-3: #4ABF5D;
```

### Background CSS Animation 

Between the background animations and the text is a 100 vw x 100 vh very dark transparent black layer with blurring. The transparent black is a 3 part gradient using a highlight and a shadow to create a "glare" effect down the middle of the screen but angled slightly. 

Behind that layer are three circles, mentioned in the color palette section above. They move slowly, about 6 to 9 seconds to get all the way across the screen. They are each growing and shrinking, also slowly, though all at slightly different speeds, and each grows and shrinks around a specifically different center point size so that they generally maintain a nature of being 3 different sizes. 

They should cross each other, bounce off the edges of the screen, and very randomly though with decent viewport coverage of around 40 to 80% the entire time. 

Because the transparent layer is so dark and blurred, this creates a very subtle effect that is not distracting but rather calming. 

### Header Detailing 

There are 5 project types, each a H1 heading. The yellow color in the pallet is used for a rectangle sitting behind the H1 heading, slightly skewed from the text. 

The actual project names that you'll find prepared on the INDEX.md file are the H2 headings. Each H2 heading is paired with a purple SVG icon. 

## Technical Plan

The implementation will be clean HTML/CSS/JS with no framework dependencies:

- Single-page design with section navigation
- Custom font loading using your .otf files
- CSS animations for the background elements
- Responsive design for all devices
- Well-organized, maintainable code structure

The repository is ready with the basic folder structure, and we'll be building from scratch with the goal of hosting on GitHub Pages.

## Development Overview

- Creating the HTML structure and organizing your content
- Implementing the animated background effect with the colored circles
- Setting up the typography system with your font files
- Building the section layouts with the special heading treatments
- Adding responsive design and refinements

### Implementation Plan

The most efficient way to tackle this project is with a progressive foundation-to-details approach:

#### First Step: HTML Structure & Typography

- Create index.html with properly structured content from INDEX.md
- Set up font-face declarations and typography CSS
- This gives us the core content with proper styling immediately


#### Second Step: Background Animation System

- Implement the three colored circles with varying sizes and movements
- Create the dark glassmorphic overlay with gradient "glare" effect
- This establishes the visual foundation


#### Third Step: Special Design Elements

- Add the yellow rectangles behind H1 headings
- Implement purple SVG icons for H2 headings
- Style blockquotes and other special elements


#### Final Step: Responsiveness & Polish

- Ensure proper display across all device sizes
- Add any necessary scroll behavior or navigation
- Final testing and optimization

This approach is efficient because it builds the site in logical layers - content first, then atmosphere, then special details, and finally polish. Each step produces a working result that we can refine in the next phase.
