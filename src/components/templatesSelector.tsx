import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Button from '@mui/material/Button'

interface ItemButtonProps {
  label: string,
  id: string,
}
const ItemButton = ({ label, id }: ItemButtonProps) => {
  const handleClickItem = () => {
    console.log('handleClickItem', id)
  }
  return (
    // <a href={`/template/${id}`}>{label}</a>
    <Button onClick={handleClickItem}>{label}</Button>
  )
}

interface Template {
  id: string,
  title: string,
  description: string,
  content: string,
}
interface TemplatesSelectorProps {
  templates: Template[]
}
const TemplatesSelector = ({ templates }: TemplatesSelectorProps) => {
  return (
    <>
      <h1>Templates</h1>
      <List sx={{ bgcolor: 'background.paper' }}>
        {
          templates && templates.map((template, index) => {
            return (
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ItemButton key={index} label={template.title} id={template.id} />
                </ListItemButton>
              </ListItem>
            )
          })
        }
      </List>
    </>
  )
}

export default TemplatesSelector