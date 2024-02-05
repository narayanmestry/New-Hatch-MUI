import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack";

import PageHeader from "../../../components/PageHeader"
import CustomButton from "../../../components/CustomButton";
import CommonSelect from "../../../components/CommonSelect";
import SchoolList from "../../../dummyData/SchoolList";
import { Avatar, Grid, InputLabel, Radio, Typography } from "@mui/material";
import CustomTextInput from "../../../components/form/CustomTextInput";
import AddClassImgsList from '../../../dummyData/AddClassImgsList'
import * as Yup from 'yup';

import AddClassArtBoardImg from '../../../assets/images/ignite/Artboard 29.png';
import { useState } from "react";
import { useFormik } from "formik";

function AddClass() {
    const [selectedBox, setSelectedBox] = useState<number>()
    const [selectedImg, setSelectedImg] = useState( '' );
    const [selectedImgId, setSelectedImgId] = useState( 0 );
    const [addFormValues, setAddFormValues] = useState( [] )

    const initialValues = {
        schoolName: '',
        className: '',
        assignedTeacher: '',
        curriculumName: '',
        picture: ''
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
                    <Grid item xs={7}>
                        <form onSubmit={formik.handleSubmit}>
                            <Stack direction={'column'} gap={2} width={'60%'} >
                                <CommonSelect labelName="School" arrayOfObject={SchoolList} bg_color="#eeeeee" name="schoolName" value={formik.values.schoolName} onHandleChange={formik.handleChange} />
                                <CustomTextInput labelName="Name this class. (example: “Morning Class”)" bg_color="#eeeeee" value={formik.values.className} onHandleChange={formik.handleChange} name="className" />
                                <CommonSelect labelName="Assign a Teacher to this class." arrayOfObject={SchoolList} bg_color="#eeeeee" name="assignedTeacher" value={formik.values.assignedTeacher} onHandleChange={formik.handleChange} />
                                <CommonSelect labelName="What curriculum does this class use?" arrayOfObject={SchoolList} bg_color="#eeeeee" name="curriculumName" value={formik.values.curriculumName} onHandleChange={formik.handleChange} />
                                <Box>
                                    <Typography
                                        sx={{
                                            color: '#000',

                                            fontWeight: 400,
                                            fontFamily: 'chivo',

                                            '@media (max-width: 1385px)': {
                                                fontSize: '14px'
                                            },
                                            '@media (max-width: 1260px) and (min-width:1200px)': {
                                                fontSize: '12px'
                                            },
                                        }}>
                                        Choose a picture to represent this class.
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#000',
                                            fontWeight: 400,
                                            fontStyle: 'italic',
                                            fontSize: '13px'
                                        }}>
                                        (Children will use this image to identify their class if you are assigned to multiple classes.)
                                    </Typography>
                                </Box>

                            </Stack>
                            <Box py={2}>
                                <Stack direction={'row'} width={'100%'} flexWrap={'wrap'} className="add-class-img-container">
                                    {
                                        AddClassImgsList.map( ( image, index ) => {
                                            console.log( "imge", image.id, 'key', index );

                                            return (
                                                <>
                                                    <Radio
                                                        checked={( index + 1 ) === selectedImgId}
                                                        id={`img${index}`}
                                                        onChange={formik.handleChange}
                                                        onClick={() => {
                                                            setSelectedImgId( image.id )
                                                        }}
                                                        value={image.imgpath}

                                                        name="picture"
                                                        inputProps={{ 'aria-label': 'A' }}
                                                        sx={{ display: 'none' }}
                                                    />
                                                    <InputLabel htmlFor={`img${index}`}><Stack width={'60px'} m={1} p={2} key={index} borderRadius={'8px'} onClick={() => { setSelectedBox( index ) }}

                                                        className={`img-box ${index === selectedBox ? 'selected' : ''}`}>
                                                        <Avatar

                                                            variant="square"
                                                            src={image.imgpath}
                                                            sx={{
                                                                width: '100%',
                                                                height: '100%',
                                                                '& .MuiAvatar-img': {
                                                                    objectFit: 'contain'
                                                                }
                                                            }} />
                                                    </Stack></InputLabel>

                                                </>
                                            )
                                        } )
                                    }
                                </Stack>
                            </Box>
                            <Stack direction={'row'} pt={2} pb={5} gap={3}>
                                <CustomButton labelText="Cancel" textColor="#1e76a2" borderColor="transparent" hoverBGColor="transparent" />
                                <CustomButton
                                    labelText="Create Class"
                                    textColor="#fff"
                                    bgColor="#00af51"
                                    hoverBGColor="#009143"
                                // onClickFuction={handleSubmit}
                                />
                            </Stack>


                        </form>

                    </Grid>

                    <Grid item xs={5}>
                        <Box textAlign={'center'}>  <img src={AddClassArtBoardImg} alt="" width={'300px'} /> </Box>
                        <Box >
                            {JSON.stringify( addFormValues )}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default AddClass