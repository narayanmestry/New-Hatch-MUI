import { Box, Button, FormControl, Grid, InputLabel, TextField } from "@mui/material"


import { SubmitHandler, useForm } from "react-hook-form"

import PageHeader from "../components/PageHeader"
import addUserImg from '../assets/Chalkboard_1.png'


type addUserFormValues = {
    org_name: string
    school_name: string
    first_name: string
    last_name: string
    email: string
    role: string
}

function AddUser() {
    const { register, handleSubmit } = useForm<addUserFormValues>();

    const onSubmit: SubmitHandler<addUserFormValues> = ( data: addUserFormValues ) => {
        console.log( data )
        console.log();

    }
    return (
        <Box component='div' className="add-user-container">
            <PageHeader headerName="Add User" />
            <Grid container>
                <Grid item xs={6}>
                    <Box sx={{ float: "right" }}>
                        <form onSubmit={handleSubmit( onSubmit )} >
                            <InputLabel>Organization</InputLabel>
                            <TextField id="outlined-basic" variant="outlined" {...register( "org_name" )} />
                            <InputLabel>School</InputLabel>
                            <TextField id="outlined-basic" variant="outlined" {...register( "school_name" )} />
                            <InputLabel>First Name*</InputLabel>
                            <TextField id="outlined-basic" variant="outlined" {...register( "first_name" )} />
                            <InputLabel>Last Name*</InputLabel>
                            <TextField id="outlined-basic" variant="outlined" {...register( "last_name" )} />
                            <InputLabel>Email Address*</InputLabel>
                            <TextField id="outlined-basic" variant="outlined" {...register( "org_name" )} />
                            <InputLabel>User Role*</InputLabel>
                            <TextField id="outlined-basic" variant="outlined" {...register( "role" )} />
                            <Box>
                                <Button variant="text">Text</Button>
                                <Button type="submit" variant="contained">Save</Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{width:'500px',m:5}}>
                    <img src={addUserImg} alt="" width={'100%'}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AddUser