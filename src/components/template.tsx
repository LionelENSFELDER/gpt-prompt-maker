import { useState, useEffect, useRef } from 'react'
import templates from '../data/templates.json'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import TextareaAutosize from '@mui/base/TextareaAutosize'
import { styled } from '@mui/system'
import parser from '../utils/parser'
import TextField from '@mui/material/TextField'

const StyledTextarea = styled(TextareaAutosize)(
  () => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.8;
  padding: 12px;
  border-radius: 12px 12px 0 12px;

  &:hover {
    border-color: 'blue';
  }

  &:focus {
    border-color: blue;
    box-shadow: 0 0 0 3px red;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

const formCreator = (arrayOfString: string[]) => {
  return (
    <Box component="form">
      {
        arrayOfString.map((item, index) => {
          return (
            <TextField key={index} label={item} variant="outlined" />
          )
        })

      }
    </Box>
  )
}

const Template = () => {

  const StyledTextareaRef = useRef<HTMLTextAreaElement | null>(null)
  const { id } = useParams()
  if (id === undefined || typeof id !== 'string') {
    return null
  }

  const handlePromptChange = () => {
    if (StyledTextareaRef.current !== null) {
      console.log(StyledTextareaRef.current.value)
    }
  }

  const templateIdex = templates.findIndex(x => x.id === id)
  const templateToDisplay = templates[templateIdex]
  const prompt = templateToDisplay.content
  const pattern = /(?<=\$)(.*?)(?=\$)/g
  const arrayOfLabels = parser(prompt, pattern)
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <h1>Id is : {templateToDisplay.id}</h1>
        <h1>{templateToDisplay.title}</h1>
        <StyledTextarea
          ref={StyledTextareaRef}
          id="prompt-text"
          defaultValue={prompt}
          onChange={handlePromptChange}
        />
        <br /><br />
        {arrayOfLabels !== null ? formCreator(arrayOfLabels) : null
        }
      </Box >
    </>
  )
}

export default Template