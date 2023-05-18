import { useState } from 'react'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import { findFramedWords } from '../utils/parser'
import TextField from '@mui/material/TextField'
import { getTemplateById } from '../data/data'

const Template = () => {
  const { id } = useParams()
  const template = id !== undefined ? getTemplateById(id) : undefined
  const [textToParse, setTextToParse] = useState(template !== undefined ? template.content : '')

  interface EnclosureFormCreator {
    text: string | null | undefined,
  }
  const EnclosureFormCreator = ({ text }: EnclosureFormCreator) => {
    const inputsList = findFramedWords({ text: text })
    if (inputsList !== null && inputsList !== undefined && inputsList.length > 0) {
      return (
        <Box component="form">
          {inputsList.map((item, index) => {
            return (<TextField key={index} label={item} variant="outlined" />)
          })}
        </Box>
      )
    } else {
      return null
    }
  }

  return (
    <Box sx={{ width: '100%', color: 'red' }}>
      <textarea value={textToParse} onChange={e => setTextToParse(e.target.value)} />
      <EnclosureFormCreator text={textToParse} />
    </Box >
  )

}

export default Template