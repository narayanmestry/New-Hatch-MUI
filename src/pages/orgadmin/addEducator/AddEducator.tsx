import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack";

import PageHeader from "../../../components/PageHeader"
import CustomButton from "../../../components/CustomButton";
import CommonSelect from "../../../components/CommonSelect";
import SchoolList from "../../../dummyData/SchoolList";
import UserRole from '../../../dummyData/UserRole';
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import CustomTextInput from "../../../components/form/CustomTextInput";
import * as Yup from 'yup';

import ArtBoardImg from '../../../assets/images/ignite/Chalkboard_1.png';
import { useState } from "react";
import { useFormik } from "formik";

function AddEducator() {
    const [addFormValues, setAddFormValues] = useState( [] )

    const initialValues = {
        userRole: '',
        schoolName: '',
        fName: '',
        lName: '',
        email: ''
    }
    const validationSchema = Yup.object( {
        // Validation Rule
    } )

    // FormSubmission Logic
    const onSubmit = ( values: any ) => {
        console.log( "Form Values ", values );
        setAddFormValues( values )

    }
    const formik = useFormik( {
        initialValues: initialValues,
        validationSchema,
        onSubmit: onSubmit
    } )

    return (
        <Box>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                sx={{
                    bgcolor: "#248dc1",
                    color: "#ffffff",
                }}
            >
                <PageHeader headerName="Create Your Class" />
                <Stack direction={"row"} gap={4} mr={2}>
                    <CustomButton
                        fontSize="14px"
                        labelText="Back"
                        iconName="ArrowLeftOutlinedIcon"
                        textColor="#fff"
                        borderColor="transparent"
                        width="90px"
                        margin="12px 0"
                        padding="0"
                        hoverBorderColor="#fff"
                        border="1px solid"
                    />
                </Stack>
            </Stack>
            <Box mx={25}>
                <Grid container mt={2}>
                    <Grid item xs={5}>
                        <Typography variant="h1" component='h1' fontWeight={700} fontSize={'22px'} fontFamily={'Nunito'} color={'#505050'} py={2}>
                            Create and manage a user profile
                        </Typography>
                        <Box bgcolor={'#e9faff'} pl={4} py={2} borderRadius={'10px'} my={2}>
                            <ul>
                                <li>
                                    <Typography>
                                        Select a user role to create an administrator or teacher.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        To create a parent, please visit the Add Child form.
                                    </Typography>
                                </li>
                            </ul>
                        </Box>
                        <form onSubmit={formik.handleSubmit}>
                            <Stack direction={'column'} gap={2} width={'100%'} >
                                <CommonSelect labelName="User Role" required={true} arrayOfObject={UserRole} bg_color="#eeeeee" name="userRole" value={formik.values.userRole} onHandleChange={formik.handleChange} />
                                <CommonSelect labelName="School/s" required={true} arrayOfObject={SchoolList} bg_color="#eeeeee" name="schoolName" value={formik.values.schoolName} onHandleChange={formik.handleChange} />
                                <CustomTextInput labelName="First Name" required={true} bg_color="#eeeeee" value={formik.values.fName} onHandleChange={formik.handleChange} name="fName" />
                                <CustomTextInput labelName="Last Name" required={true} bg_color="#eeeeee" value={formik.values.lName} onHandleChange={formik.handleChange} name="lName" />
                                <CustomTextInput labelName="Email Address" required={true} bg_color="#eeeeee" value={formik.values.email} onHandleChange={formik.handleChange} name="email" />
                            </Stack>



                            <Stack direction={'row'} pt={2} pb={5} gap={3} my={4}>
                                <CustomButton labelText="Cancel" fontSize="22px" textColor="#1e76a2" borderColor="transparent" hoverBGColor="transparent" />
                                <CustomButton
                                    labelText="Add User"
                                    textColor="#fff"
                                    bgColor="#00af51"
                                    hoverBGColor="#009143"
                                    fontSize="22px"
                                />
                            </Stack>


                        </form>

                    </Grid>

                    <Grid item xs={7} py={5}>
                        <Box textAlign={'center'}>  <img src={ArtBoardImg} alt="" width={'800px'} /> </Box>
                        <Box textAlign={'center'} pl={10}>
                            {JSON.stringify( addFormValues )}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default AddEducator