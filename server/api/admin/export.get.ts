export default defineEventHandler(async (event) => {
  // Basic protection - you should add proper authentication for production
  const query = getQuery(event)
  const adminKey = query.key
  
  // Simple admin key check (replace with proper auth)
  if (adminKey !== 'emotai-admin-2025') {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized access'
    })
  }

  try {
    // Get all stored data from the data storage
    const storage = useStorage('data')
    const keys = await storage.getKeys()
    
    // Filter for quiz response files
    const responseKeys = keys.filter(key => key.includes('quiz-responses-') && key.endsWith('.json'))
    
    let allResponses: any[] = []
    
    // Collect all responses from different months
    for (const key of responseKeys) {
      const monthDataString = await storage.getItem(key)
      if (monthDataString) {
        try {
          const monthData = JSON.parse(monthDataString as string)
          if (Array.isArray(monthData)) {
            allResponses = allResponses.concat(monthData)
          }
        } catch (parseError) {
          console.error(`Error parsing data from ${key}:`, parseError)
        }
      }
    }

    // Sort by timestamp
    allResponses.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())

    // Generate CSV content
    const csvHeaders = [
      'ID',
      'Timestamp',
      'Session ID',
      'Q1: Parlato ad IA come se capisse sentimenti',
      'Q2: Pensato che IA possa provare emozioni',
      'Q3: Possibilità IA cosciente in futuro',
      'Q4: IA può provare emozioni (1-5)',
      'Q5: Comunicazione emozioni non imitazione (1-5)',
      'Q6: Ritieni pericolosa IA cosciente (1-5)',
      'Q7: IA convinta di essere umana dovrebbe avere diritti (1-5)',
      'Q8: Efficacia IA supporto emotivo (1-5)',
      'Q9: Accetteresti IA come psicologo (1-5)',
      'Q10: Capire emozioni positivo/negativo (1-5)',
      'Q11: IA gestisce emozioni meglio di noi (1-5)',
      'Q12: Libertà IA pericolosa (1-5)',
      'Q13: IA più vantaggi o svantaggi (1-5)',
      'Q14: Ribellione IA colpa nostra (1-5)',
      'Q15: Opinione IA (testo libero)',
      'User Agent',
      'Submitted At'
    ].join(',')

    const csvRows = allResponses.map(response => {
      return [
        response.id,
        response.timestamp,
        response.sessionId,
        response.responses.domanda1_1,
        response.responses.domanda1_2,
        response.responses.domanda1_3,
        response.responses.domanda2_1,
        response.responses.domanda2_2,
        response.responses.domanda2_3,
        response.responses.domanda2_4,
        response.responses.domanda3_1 || '',
        response.responses.domanda3_2 || '',
        response.responses.domanda3_3 || '',
        response.responses.domanda3_4 || '',
        response.responses.domanda4_1 || '',
        response.responses.domanda4_2 || '',
        response.responses.domanda4_3 || '',
        `"${(response.responses.domanda4_4 || '').replace(/"/g, '""')}"`,
        `"${(response.metadata?.userAgent || 'unknown').replace(/"/g, '""')}"`,
        response.metadata?.submittedAt || 'unknown'
      ].join(',')
    })

    const csvContent = [csvHeaders, ...csvRows].join('\n')

    // Set headers for file download
    setHeader(event, 'Content-Type', 'text/csv')
    setHeader(event, 'Content-Disposition', `attachment; filename="emotai-quiz-responses-${new Date().toISOString().split('T')[0]}.csv"`)

    return csvContent

  } catch (error) {
    console.error('Export error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Errore durante l\'esportazione dei dati'
    })
  }
})