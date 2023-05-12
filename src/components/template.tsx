import templates from '../data/templates.json'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Textarea from '@mui/joy/Textarea';

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
          <Box component='textarea' sx={{ whiteSpace: 'pre' }} dangerouslySetInnerHTML={{ __html: templateToDisplay.content }} />
        </Box>
      </>
    )

  }
  return null
}

export default Template