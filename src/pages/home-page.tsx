import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
  Container,
  Link,
} from '@mui/material';
import { Box } from '@mui/system'; // ใส่ไว้ด้านบนสุดด้วย


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        ระบบลาออนไลน์
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function HomePage() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            ระบบลาออนไลน์
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              ระบบลาออนไลน์
            </Typography>
           
            <Box sx={{ pt: 4 }} display="flex" justifyContent="center" gap={2}>
              <Button variant="contained" color="primary">
               เข้าระบบ
              </Button>
              <Button variant="outlined" color="primary">
                ลงทะเบียน
              </Button>
            </Box>
          </Container>
        </Box>
       
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "grey.200", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          ระบบลาออนไลน์
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </>
  );
}

