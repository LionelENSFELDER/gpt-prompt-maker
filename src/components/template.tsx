import { useState } from 'react'
import Box from '@mui/material/Box'
// import { useParams } from 'react-router-dom'
import { findFramedWords } from '../utils/parser'
import TextField from '@mui/material/TextField'
import { getTemplateById } from '../data/data'
import Button from '@mui/material/Button'

interface TemplateProps {
  id: string,
}
const Template = ({ id }: TemplateProps) => {
  // const { id } = useParams()
  const template = id !== undefined ? getTemplateById(id) : undefined
  const [textToParse, setTextToParse] = useState(template !== undefined ? template.content : '')

  interface EnclosureFormCreator {
    text: string | null | undefined,
  }
  const EnclosureFormCreator = ({ text }: EnclosureFormCreator) => {
    const inputsList = findFramedWords({ text: text })
    // const [formData, setFormData] = useState({} as any)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement)
      console.log('submit', FormData);
    }
    const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
      console.log('formData', formData)
    }

    if (inputsList !== null && inputsList !== undefined && inputsList.length > 0) {
      return (
        <Box component="form" onSubmit={handleSubmit}>
          <Box>
            {inputsList.map((item, index) => {
              return (<TextField key={index} label={item} name={item} variant="outlined" />)
            })}
          </Box>
          <br />
          <Button variant="outlined" type="submit">Submit</Button>
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
    </Box>
  )

}

export default Template