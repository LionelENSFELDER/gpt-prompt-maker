import BasicCard from './card.js'
import templates from '../data/templates.json'
import Grid from '@mui/material/Grid'

const TemplatesList = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={1}>
      {
        templates && templates.map((template, index) => {
          return (
            <Grid item xs={12} md={6} key={index}>
              <BasicCard
                templateTitle={template.title}
                templateDescription={template.description}
                url={`/template/${template.id}`}
              />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default TemplatesList