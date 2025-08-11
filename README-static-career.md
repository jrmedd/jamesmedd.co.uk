# Static Career Page Generator and PDF Export

This project includes tools to generate a static HTML version of James Medd's career page and convert it to PDF using Puppeteer.

## Files Created

1. **static-career.html** - A standalone HTML file with embedded CSS that replicates the styled components from the React application
2. **generate-pdf.js** - Node.js script using Puppeteer to convert the HTML to PDF
3. **james-medd-career.pdf** - The generated PDF output

## Features

- **Faithful Recreation**: All styled components styles have been converted to regular CSS while maintaining the exact visual appearance
- **Print-Friendly**: Includes print media queries that convert the dark theme to a light theme for better PDF readability
- **Self-Contained**: The HTML file includes all fonts via Google Fonts CDN and has no external dependencies
- **Responsive**: Maintains responsive behavior for different viewport sizes
- **Accessible**: Preserves all accessibility features from the original React components

## Usage

### Viewing the Static Page
Simply open `static-career.html` in any modern web browser.

### Generating PDF
```bash
node generate-pdf.js
```

This will:
1. Launch a headless Chrome browser via Puppeteer
2. Load the static HTML file
3. Wait for fonts to load
4. Generate a PDF with print-friendly styling
5. Save the output as `james-medd-career.pdf`

## Styling Notes

The static HTML includes:
- All layout components (Stack, Cluster, ContentContainer)
- Typography components with proper font loading
- Timeline component with responsive alternating layout
- Skills section with SVG icons
- Wiggle decoration component
- Print media queries for PDF generation

The color scheme automatically switches from the dark theme (`#443938` background, `#F6D9CF` text) to a light theme (white background, dark text) when printing or generating PDFs.

## Dependencies

- **puppeteer**: For PDF generation
- **Google Fonts**: For web font loading (Inconsolata Variable and Edu NSW ACT Foundation Variable)

## Technical Implementation

The styled components have been converted to standard CSS using:
- CSS custom properties for theming
- Flexbox for layout (matching the styled-components implementation)
- Media queries for responsive design
- Print styles for PDF generation
- SVG icons embedded directly in the HTML

All the original React component logic has been replaced with static HTML structure while preserving the exact visual design and accessibility features.
