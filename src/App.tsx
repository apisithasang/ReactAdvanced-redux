import './App.css'
import { Button, Container, Stack } from '@mui/material'

function App() {
  return (
    <div className = "App">
      <Container fixed sx={{backgroundColor: 'grey'}}>
        <Stack spacing={2} direction={'row'}>
        <Button variant='outlined' color='success' size='large'>
          Hello MUI
        </Button>
        <Button variant='contained' color='success' size='large'>
          Hello MUI
        </Button>
        <Button variant='contained' color='success' size='large'>
          Hello MUI
        </Button>
        </Stack>
      </Container>
    </div>
  )
}

export default App
