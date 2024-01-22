import { Box, Button, InputLabel, Paper, TextField, Typography } from "@mui/material"
import LoginBgImg from '../../assets/Background_Login.png'
import HatchInsightLogo from '../../assets/insights_logo.png';
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { common } from "@mui/material/colors";
// Define the type of FormData
type LoginFormData = {
  email: string,
  password: string
}

// Define the Schema for validation  (error message disply in lowercase so  instead of yup , react hook form error feature you can use)
// const schema = yup.object( {
//   email: yup.string().required(),
//   password: yup.string().required()
// } ).required()

function LoginRegistrationPage() {
  const { register, handleSubmit, control, formState: { errors } } = useForm<LoginFormData>();
  const navigate = useNavigate()

  const onLoginSubmit: SubmitHandler<LoginFormData> = ( data ) => {
    console.log( "Form Data ====>", data )
    navigate('/dashboard')
  }

  return (
    <Box
      sx={{
        background: `url(${LoginBgImg})`,
        backgroundSize: "cover",
      }}
      component='div'
      className="login-container"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: 'center',
          alignItems: "center",
          height: "100vh",
          width: '100%'

        }}
      >
        <Paper sx={{ borderRadius: 3, maxWidth: 550, minWidth: 550 }}>
          <Box sx={{ textAlign: 'center', width: '100%', pt: 2 }}>
            <img src={HatchInsightLogo} alt="Hatch Insight Logo" width={300} />
          </Box>
          <Box sx={{ background: '#b8e6f4' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mt: 2 }}>
              Please Log In
            </Typography>
          </Box>
          <Box p={3}>
            <form onSubmit={handleSubmit( onLoginSubmit )}>
              <Box>
                <InputLabel>
                  <Typography variant="subtitle2" gutterBottom color={common.black}>
                    Email Address
                  </Typography>
                </InputLabel>
                <TextField
                  fullWidth
                  id="email"
                  {...register( "email", { required: "Email Address is required!!" } )}
                  autoComplete="email"
                  autoFocus
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email?.type === "required" && (
                  <Typography variant="subtitle2" gutterBottom sx={{color:'red'}}>
                    {errors.email.message}
                  </Typography>
                )}
              </Box>
              <Box mt={3}>
                <InputLabel >
                  <Typography variant="subtitle2" gutterBottom color={common.black}>
                    Password
                  </Typography>
                </InputLabel>
                <TextField
                  fullWidth
                  {...register( "password", { required: "Password is Required !!" } )}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  aria-invalid={errors.password ? "true" : "false"}

                />
                {errors.password?.type === "required" && <Typography variant="subtitle2" gutterBottom role="alert" sx={{color:'red'}}>{errors.password.message}</Typography>}
              </Box>
              <Box sx={{ textAlign: 'center',mt:4 }}>
                <Button type="submit" variant="contained" sx={{ mt: 2, width: 300, borderRadius: 5,textTransform:"none" }} color="success" >Log In</Button>
                <Typography variant="body2" gutterBottom pt={3} color='primary'>
                  Forget your password? | Login Help| How do I get an account?
                </Typography>
              </Box>
            </form>
          </Box>

        </Paper>
      </Box>
      <DevTool control={control} /> {/* set up the dev tool */}
    </Box>
  )
}

export default LoginRegistrationPage