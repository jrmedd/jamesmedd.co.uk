import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePDF() {
  console.log('Starting PDF generation...');
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport for consistent rendering
    await page.setViewport({ width: 1200, height: 800 });
    
    // Load the static HTML file
    const htmlPath = `file://${join(__dirname, 'static-career.html')}`;
    console.log(`Loading HTML from: ${htmlPath}`);
    
    await page.goto(htmlPath, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');
    
    // Disable print media queries to preserve original colors
    await page.emulateMediaType('screen');
    
    // Generate PDF with print-friendly options
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      // margin: {
      //   top: '20mm',
      //   right: '15mm',
      //   bottom: '20mm',
      //   left: '15mm'
      // },
      displayHeaderFooter: false,
      preferCSSPageSize: false
    });
    
    console.log('PDF generated successfully');
    
    // Save the PDF
    const fs = await import('fs');
    const outputPath = join(__dirname, 'james-medd-career.pdf');
    fs.writeFileSync(outputPath, pdfBuffer);
    
    console.log(`PDF saved to: ${outputPath}`);
    
  } catch (error) {
    console.error('Error generating PDF:', error);
  } finally {
    await browser.close();
  }
}

// Run the function
generatePDF().catch(console.error);
