import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface CardProps {
  templateTitle: string,
  templateDescription: string,
  url?: string,
}

const BasicCard = ({ templateTitle, templateDescription, url }: CardProps) => {
  return (
    <Card>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{templateTitle}</Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{templateDescription}</Typography>
      <Button href={url} size="small">Learn More</Button>
    </Card>
  )
}

export default BasicCard