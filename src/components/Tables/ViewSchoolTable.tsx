import { Box } from '@mui/material';
import React from 'react'
import { DataGrid, GridColDef , GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarExport, } from '@mui/x-data-grid';
import CustomButton from '../CustomButton';

const ViewSchoolTable = () => {
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        {/* <GridToolbarColumnsButton /> */}
        <GridToolbarFilterButton />
        {/* <GridToolbarDensitySelector /> */}
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
    const cols: GridColDef[] = [
        {
          field: "name",
          headerName: "Name",
          flex: 1,
        },
        { field: "teachers", headerName: "Teachers", flex: 1 },


        {
          field: "classes",
          headerName: "Classes",
          flex: 1,
        },
        {
            field: "childrens",
            headerName: "Children",
            flex: 1,
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
                      onClickFuction={()=>{}}
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
          teachers:44,
          classes:55,
          childrens:77,
          edit: "Edit",
        },
        {
          id: 2,
          name: "John Lio",
          teachers:66,
          classes:75,
          childrens:88,
          edit: "Edit",
        },
        {
          id: 3,
          name: "John Lio",
          teachers:88,
          classes:95,
          childrens:100,
          edit: "Edit",
        },
        {
          id: 4,
          name: "John Lio",
          teachers:10,
          classes:12,
          childrens:26,
          edit: "Edit",
        },
        {
          id: 5,
          name: "John Lio",
          teachers:20,
          classes:22,
          childrens:30,
          edit: "Edit",
        },
        {
          id: 6,
          name: "John Lio",
          teachers:22,
          classes:30,
          childrens:44,
          edit: "Edit",
        },

      ];
  return (
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

      border: 0,
      '.MuiDataGrid-columnHeaders': {
        border: 0,
        color:'#248DC1'
      },
      '.MuiDataGrid-row': {
        borderBottom: 'none',
      },
      '.MuiDataGrid-virtualScroller': {
        border: 0,
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
    disableRowSelectionOnClick
    disableColumnMenu
    hideFooterSelectedRowCount
    slots={{
      toolbar: CustomToolbar,
    }}
  ></DataGrid>
  )
}

export default ViewSchoolTable