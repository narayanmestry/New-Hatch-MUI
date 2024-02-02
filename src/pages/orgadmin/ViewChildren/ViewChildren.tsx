import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

import PageHeader from "../../../components/PageHeader";
import CommonSelect from "../../../components/CommonSelect";
import InputWithSearch from "../../../components/InputWithSearch";
import { SchoolList } from "../../../dummyData/SchoolList";
import { ClassList } from "../../../dummyData/ClassList";
import { StatusList } from "../../../dummyData/StatusList";
import crossImg from "../../../assets/images/insight/red-close.png";
import CustomButton from "../../../components/CustomButton";


function ViewChildren() {
  function handleClick() {
    alert( "Added " )
  }
  // coloums
  const cols: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    { field: "age", headerName: "Age", flex: 1 },
    {
      field: "school",
      headerName: "School",
      flex: 1,
      renderCell: () => {
        return (
          <>
            <Box>
              <CommonSelect bg_color="#eeeeee" list={SchoolList} labelName="" />
            </Box>
          </>
        );
      },
    },
    {
      field: "class",
      headerName: "Class",
      flex: 1,
      renderCell: () => {
        return (
          <>
            <Box bgcolor={'#fff'}>
              <CommonSelect bg_color="#eeeeee" list={ClassList} labelName="" />
            </Box>
          </>
        );
      },
    },
    {
      field: "educational_journey",
      headerName: "Educational Journey",
      flex: 1,
    },
    {
      field: "photos",
      headerName: "Photos",
      flex: 1,
      renderCell: () => {
        return (
          <>
            <Box>
              <Link
                style={{ textDecoration: "none" }}
                to={
                  ""
                }
              >
                Has Photo
              </Link>
            </Box>
          </>
        );
      },
    },
    {
      field: "hatchsync_status",
      headerName: "HatchSync Status",
      flex: 1,
      renderCell: () => {
        return (
          <>
            <Box>
              {/* <Avatar alt="Remy Sharp" src={crossImg} sx={{ width: '100px' }} /> */}
              <img src={crossImg} alt="" width={"40px"} />
            </Box>
          </>
        );
      },
    },
    {
      field: "activation",
      headerName: "Activation",
      flex: 1,
      renderCell: () => {
        return (
          <>
            <Box>
              <Link style={{ textDecoration: "none" }} to={""}>
                Deactivate
              </Link>
            </Box>
          </>
        );
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      flex: 1,
      renderCell: () => {
        return (
          <>
            <Box>
              <CustomButton
                labelText="Edit Info"
                textColor="#248dc1"
                bgColor="transparent"
                hoverBGColor="#248dc1"
                hoverTextColor="#fff"
                borderColor="transparent"
                iconName="EditIcon"
                padding="5px 20px"
                onClickFuction={handleClick}
              />
            </Box>
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      name: "John Lio John LioJohn LioJohn LioJohn LioJohn LioJohn LioJohn LioJohn Lio John Lio",
      age: "6y 2m",
      school: "SP jucj  dkfnkd ",
      class: "USA_GNF organization",
      educational_journey: "Ignite, IgniteTable",
      Photos: "yes",
      hatchsync_status: "hatchsync_status",
      Activation: "Activation",
      edit: "Edit",
    },
    {
      id: 2,
      name: "John Lio",
      age: "6y 2m",
      school: "SP jucj  dkfnkd ",
      class: "USA_GNF organization",
      educational_journey: "Ignite, IgniteTable",
      Photos: "yes",
      hatchsync_status: "hatchsync_status",
      Activation: "Activation",
      edit: "Edit",
    },
    {
      id: 3,
      name: "John Lio",
      age: "6y 2m",
      school: "SP jucj  dkfnkd ",
      class: "USA_GNF organization",
      educational_journey: "Ignite, IgniteTable",
      Photos: "yes",
      hatchsync_status: "hatchsync_status",
      Activation: "Activation",
      edit: "Edit",
    },
    {
      id: 4,
      name: "John Lio",
      age: "6y 2m",
      school: "SP jucj  dkfnkd ",
      class: "USA_GNF organization",
      educational_journey: "Ignite, IgniteTable",
      Photos: "yes",
      hatchsync_status: "hatchsync_status",
      Activation: "Activation",
      edit: "Edit",
    },
    {
      id: 5,
      name: "John Lio",
      age: "6y 2m",
      school: "SP jucj  dkfnkd ",
      class: "USA_GNF organization",
      educational_journey: "Ignite, IgniteTable",
      Photos: "yes",
      hatchsync_status: "hatchsync_status",
      Activation: "Activation",
      edit: "Edit",
    },
    {
      id: 6,
      name: "John Lio",
      age: "6y 2m",
      school: "SP jucj  dkfnkd ",
      class: "USA_GNF organization",
      educational_journey: "Ignite, IgniteTable",
      Photos: "yes",
      hatchsync_status: "hatchsync_status",
      Activation: "Activation",
      edit: "Edit",
    },
    {
      id: 7,
      name: "John Lio",
      age: "6y 2m",
      school: "SP jucj  dkfnkd ",
      class: "USA_GNF organization",
      educational_journey: "Ignite, IgniteTable",
      Photos: "yes",
      hatchsync_status: "hatchsync_status",
      Activation: "Activation",
      edit: "Edit",
    },
    {
      id: 8,
      name: "John Lio",
      age: "6y 2m",
      school: "SP jucj  dkfnkd ",
      class: "USA_GNF organization",
      educational_journey: "Ignite, IgniteTable",
      Photos: "yes",
      hatchsync_status: "hatchsync_status",
      Activation: "Activation",
      edit: "Edit",
    },
    {
      id: 9,
      name: "John Lio",
      age: "6y 2m",
      school: "SP jucj  dkfnkd ",
      class: "USA_GNF organization",
      educational_journey: "Ignite, IgniteTable",
      Photos: "yes",
      hatchsync_status: "hatchsync_status",
      Activation: "Activation",
      edit: "Edit",
    },
    {
      id: 10,
      name: "John Lio",
      age: "6y 2m",
      school: "SP jucj  dkfnkd ",
      class: "USA_GNF organization",
      educational_journey: "Ignite, IgniteTable",
      Photos: "yes",
      hatchsync_status: "hatchsync_status",
      Activation: "Activation",
      edit: "Edit",
    },
    {
      id: 11,
      name: "John Lio",
      age: "6y 2m",
      school: "SP jucj  dkfnkd ",
      class: "USA_GNF organization",
      educational_journey: "Ignite, IgniteTable",
      Photos: "yes",
      hatchsync_status: "hatchsync_status",
      Activation: "Activation",
      edit: "Edit",
    },
    {
      id: 12,
      name: "John Lio",
      age: "6y 2m",
      school: "SP jucj  dkfnkd ",
      class: "USA_GNF organization",
      educational_journey: "Ignite, IgniteTable",
      Photos: "yes",
      hatchsync_status: "hatchsync_status",
      Activation: "Activation",
      edit: "Edit",
    },
  ];
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
        <PageHeader headerName="View All Children" />
        <Stack direction={"row"} gap={4} mr={2}>
          <CustomButton
            labelText="Add a Child"
            iconName="AddCircleOutlineOutlinedIcon"
            textColor="#fff"
            borderColor="transparent"
            width="135px"
            margin="12px 0"
            padding="0"
            hoverBorderColor="#fff"
            border="1px solid"
          />
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
      <Box mx={5} mb={5}>
        <Grid container my={5}>
          <Grid item xs={12} md={9}>
            <Typography fontFamily={"Chivo"} pr={{ xs: 0, md: 5 }}>
              Find and edit children. To move children between classes, select the
              new class from the dropdown in the child’s row
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} mt={{ xs: 3, md: 0 }} textAlign={{ xs: 'start', md: 'end' }}>
            <CustomButton
              labelText="Import to Add Children"
              textColor="#fff"
              bgColor="#00af51"
              hoverBGColor="#009143"
              onClickFuction={handleClick}
            />
          </Grid>
        </Grid>

        <Box>
          <Grid container className="filter-section">
            <Grid item xs={12} lg={10}>
              <Stack direction={{ lg: "row", xs: "column" }} gap={2}>
                <Stack direction={"row"} gap={2} width={"100%"}>
                  <CommonSelect
                    bg_color="#eeeeee"
                    list={SchoolList}
                    labelName="School :"
                  />
                  <CommonSelect
                    bg_color="#eeeeee"
                    list={ClassList}
                    labelName="Class :"
                  />
                  <CommonSelect
                    bg_color="#eeeeee"
                    list={SchoolList}
                    labelName="Teacher :"
                  />
                </Stack>
                <Stack direction={"row"} gap={2} width={"100%"}>
                  <CommonSelect
                    bg_color="#eeeeee"
                    list={ClassList}
                    labelName="Photo Status :"
                  />
                  <CommonSelect
                    bg_color="#eeeeee"
                    list={StatusList}
                    labelName="Educational Journey :"
                  />
                  <CommonSelect
                    bg_color="#eeeeee"
                    list={StatusList}
                    labelName="Status :"
                  />
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={2} display={'flex'} alignItems={'end'}>
              <Box
                sx={{
                  mt: { xs: 3, lg: 0 },
                  ml: { xs: 0, lg: 3 },
                  width: { xs: '32.2%', lg: '90%' },
                }}>
                <InputWithSearch placeholder="Search by Name" />
              </Box>
            </Grid>
          </Grid>
          <Stack direction={"row"} gap={2} mt={4} mb={6}>
            <CustomButton
              labelText="Bulk Edit"
              textColor="#fff"
              bgColor="#00af51"
              hoverBGColor="#009143"
              onClickFuction={handleClick}
            />
            <CustomButton
              labelText="Delete/Deactivate"
              textColor="#ef3a3a"
              borderColor="#ef3a3a"
              bgColor="transparent"
              hoverBGColor="#ef3a3a"
              hoverTextColor="#fff"
              onClickFuction={handleClick}
            />
          </Stack>
        </Box>
        <Box component="div">
          {/* DataGrid */}
          <Box sx={{ height: 500, width: "100%" }}>
            <DataGrid
              rows={rows}
              sx={{
                "& .MuiBox-root": {
                  width: "100%",
                },
                "& .MuiDataGrid-row.Mui-selected, & .MuiDataGrid-row.Mui-selected.Mui-hovered, & .MuiDataGrid-row.Mui-hovered":
                {
                  background: "transparent",
                },

                "& .MuiDataGrid-row .MuiDataGrid-cell:nth-child(2)": {
                  color: "#248dc1",
                },
                "& .MuiDataGrid-row .MuiDataGrid-cell:nth-child(9)": {
                  color: "#248dc1",
                },
                "& .MuiDataGrid-main .MuiDataGrid-virtualScroller .MuiDataGrid-row:nth-child(odd)":
                {
                  background: "#f2f2f2",
                },
                "& .MuiDataGrid-withBorderColor": {
                  borderColor: "none",
                },

                "& .MuiDataGrid-cell": {
                  padding: "4px 10px",
                  fontFamily: "Chivo",
                },
                "& .MuiTablePagination-root .MuiToolbar-root p": {
                  margin: 0,
                },
              }}
              columns={cols}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}
              checkboxSelection
              disableRowSelectionOnClick
            ></DataGrid>
          </Box>
        </Box>
      </Box>

    </Box>
  );
}

export default ViewChildren;
