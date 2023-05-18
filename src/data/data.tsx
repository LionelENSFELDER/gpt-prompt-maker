import templates from '../data/templates.json'

export const isValidId = (id: string | undefined) => {
  if (id !== undefined && typeof id === 'string') {
    const templateIdex = templates.findIndex(x => x.id === id)
    if (templateIdex === -1) {
      return false
    }
    return true
  }
}

export const getTemplateById = (id: string) => {
  const templateIdex = templates.findIndex(x => x.id === id)
  const templateToDisplay = templates[templateIdex]
  return templateToDisplay
}

export const getAllTemplates = async () => {
  const templates = await fetch('../data/templates.json')
  return templates
}