import templates from '../data/templates.json'

const data = () => {
  const getAllTemplates = async () => {
    const templates = await fetch('../data/templates.json')
    return templates
  }
  const getTemplateById = (id: string) => {
    if (id !== undefined && typeof id === 'string') {
      return templates.findIndex(x => x.id === id)
    }
  }
  // const createUuid = () => {}
  // const saveNewTemplate = (templateObject: object) => {}
  // const updateTemplate = (id: string, templateObject: object) => {}
  // const deleteTemplate = (id: string) => {}
}

export default data