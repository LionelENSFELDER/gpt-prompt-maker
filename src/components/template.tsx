import templates from '../data/templates.json'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'

const Template = () => {
  const { id } = useParams()
  if (id !== undefined && typeof id === 'string') {
    const templateIdex = templates.findIndex(x => x.id === id)
    const templateToDisplay = templates[templateIdex]
    return (
      <>
        <Box sx={{ width: '100%' }}>
          <h1>Template id is : {templateToDisplay.id}</h1>
          <h1>Template title is : {templateToDisplay.title}</h1>
          <h1>Template content is : {templateToDisplay.content}</h1>
        </Box>
      </>
    )

  }
  return null
}

export default Template