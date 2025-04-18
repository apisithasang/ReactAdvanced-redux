import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import YupPassword from 'yup-password'
YupPassword(yup) // extend yup
import { Link as RouterLink } from "react-router-dom"

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

export default function RegitsterPage() {
    const schema = yup.object({
        fistName: yup.string().required("ป้อนข้อมูลชื่อด้วย"),
        lastName: yup.string().required("ป้อนข้อมูลนามสกุลด้วย"),
        email: yup.string().required("ป้อนอีเมลด้วย").email("รูปแบบอีเมลไม่ถูกต้อง"),
        password: yup.string().required("ป้อนรหัสผ่านด้วย")
        .min(6, "รหัสผ่านต้องอย่างน้อย 6 ตัวอักษรขึ้นไป")
        .minSymbols(1,"ต้องมีอักขระพิเศษอย่างน้อย 1 ตัวขึ้นไป")
        .minUppercase(1,"ต้องมีตัวพิมพ์ใหญ่อย่างน้อย 1 ตัวขึ้นไป"),
    });

    type FormData = yup.InferType<typeof schema>

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "all"
      });
    const onSubmit = (data: FormData) => console.log(data);

  return (

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ลงทะเบียนผู้ใช้ใหม่
          </Typography>
            <Box component="form" 
                noValidate 
                onSubmit={handleSubmit(onSubmit)} 
                sx={{ mt: 3 }}
            >
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  {...register('fistName')}
                  error={errors.fistName ? true :false}
                  helperText={errors.fistName && errors.fistName.message}
                  fullWidth
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  {...register('lastName')}
                  error={errors.lastName ? true :false}
                  helperText={errors.lastName && errors.lastName.message}
                  fullWidth
                  label="Last Name"
                />
              </Grid>
      
                <TextField
                  {...register('email')}
                  error={errors.email ? true :false}
                  helperText={errors.email && errors.email.message}
                  fullWidth
                  label="Email Address"
                />
           
                <TextField
                  {...register('password')}
                  error={errors.password ? true :false}
                  helperText={errors.password && errors.password.message}
                  fullWidth
                  label="Password"
                  type="password"
                />
          
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ลงทะเบียน
            </Button>
            <Grid container justifyContent="center" spacing={3}>
              <Grid>
                <Link component={RouterLink} to="/" variant="body2">
                    กลับหน้าหลัก
                </Link>
              </Grid>
              <Grid>
                <Link component={RouterLink} to="/" variant="body2">
                  ถ้าลงทะเบียนแล้ว ไปที่หน้า Log In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>

  );
}
