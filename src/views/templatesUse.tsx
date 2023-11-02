import { useState } from 'react'
import TemplatesSelector from '../components/templatesSelector'
// import { MainContainer } from '../components/containers'
import { Grid } from '@mui/material'
import Template from '../components/template'

interface Template {
  id: string,
  title: string,
  description: string,
  content: string,
}
interface TemplatesUseProps {
  templates: Array<Template>
}
const TemplatesUse = ({ templates }: TemplatesUseProps) => {
  const [id, setId] = useState('2')
  return (
    <Grid container sx={{ height: 650, width: '90vw', backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid item xs={12} sm={6} sx={{ backgroundColor: 'yellow', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <TemplatesSelector templates={templates} />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ backgroundColor: 'green' }}>
        <Template id={id} />
      </Grid>
    </Grid>
  )
}

export default TemplatesUse