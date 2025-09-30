import { promises as fs } from 'fs';
import path from 'path';
export default defineEventHandler(async (event) => {
  // Only allow POST requests
  if (getMethod(event) !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  try {
    // Read the request body
    const body = await readBody(event)
    
    // Validate required fields
    const requiredFields = ['domanda1_1', 'domanda1_2', 'domanda1_3']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw createError({
          statusCode: 400,
          statusMessage: `Campo obbligatorio mancante: ${field}`
        })
      }
    }

    // Validate range values for sets 2, 3, and 4
    const rangeFields = [
      'domanda2_1', 'domanda2_2', 'domanda2_3', 'domanda2_4',
      'domanda3_1', 'domanda3_2', 'domanda3_3', 'domanda3_4',
      'domanda4_1', 'domanda4_2', 'domanda4_3'
    ]
    for (const field of rangeFields) {
      const value = parseInt(body[field])
      if (isNaN(value) || value < 1 || value > 5) {
        body[field] = 3 // Default to middle value if invalid
      }
    }

    // Get client info for session tracking
    const headers = getHeaders(event)
    const clientIP = headers['x-forwarded-for'] || headers['x-real-ip'] || 'unknown'
    const today = new Date().toISOString().split('T')[0]

    // Create submission object
    const submission = {
      id: generateSubmissionId(),
      timestamp: new Date().toISOString(),
      sessionId: `${clientIP}-${today}`, // Simple session tracking
      responses: {
        domanda1_1: body.domanda1_1,
        domanda1_2: body.domanda1_2,
        domanda1_3: body.domanda1_3,
        domanda2_1: parseInt(body.domanda2_1),
        domanda2_2: parseInt(body.domanda2_2),
        domanda2_3: parseInt(body.domanda2_3),
        domanda2_4: parseInt(body.domanda2_4),
        domanda3_1: parseInt(body.domanda3_1),
        domanda3_2: parseInt(body.domanda3_2),
        domanda3_3: parseInt(body.domanda3_3),
        domanda3_4: parseInt(body.domanda3_4),
        domanda4_1: parseInt(body.domanda4_1),
        domanda4_2: parseInt(body.domanda4_2),
        domanda4_3: parseInt(body.domanda4_3),
        domanda4_4: body.domanda4_4 || ''
      },
      metadata: {
        userAgent: body.userAgent || 'unknown',
        submittedAt: new Date().toLocaleString('it-IT')
      }
    }

    // Use Node.js fs to persist submissions
    const dataDir = path.join(process.cwd(), '.data', 'kv');
    const fileName = `quiz-responses-${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}.json`;
    const filePath = path.join(dataDir, fileName);

    // Ensure directory exists
    await fs.mkdir(dataDir, { recursive: true });

    // Read existing data
    let existingData: any[] = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const parsed = JSON.parse(fileContent);
      if (Array.isArray(parsed)) {
        existingData = parsed;
      }
    } catch (err) {
      // If file doesn't exist or is malformed, start with empty array
      existingData = [];
    }
    // Sanitize 'domanda4_4' field to prevent offensive content
    const offensiveWords = ["negro", "dio"];
    if (offensiveWords.includes(submission.responses.domanda4_4?.toLowerCase())) {
      submission.responses.domanda4_4 = "[redacted]";
    }

    // Add new submission
    existingData.push(submission);


    // Write updated data to file
    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2), 'utf-8');

    // Return success response
    return {
      success: true,
      submissionId: submission.id,
      message: 'Risposte salvate con successo!'
    }

  } catch (error: any) {
    // Log error for debugging
    console.error('Quiz submission error:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Errore interno del server'
    })
  }
})

// Helper function to generate unique submission ID
function generateSubmissionId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}