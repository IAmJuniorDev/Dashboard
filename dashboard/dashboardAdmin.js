import { Box, useTheme ,gridClasses} from "@mui/material";
import { useGetAdminsQuery } from "utils/dashboard/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "utils/dashboard/header";
import CustomColumnMenu from "utils/dashboard/dataGridCustomColumnMenu";

const DashboardAdmin = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetAdminsQuery();
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];
  return (
    <Box className="DashboardAdmin-container">
      <Header title="ADMIN" subtitle="Managing admins and list of admin" />
      <Box
        height="75vh"
        mt="10px"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.primary[800],
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.primary[800],
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]}`,
          },
          [`& .${gridClasses.row}.even`]: {
            backgroundColor: theme.palette.primary[700],
            color: theme.palette.secondary[100],
            "&:hover, &.Mui-hovered": {
              backgroundColor: theme.palette.grey[400],
            },
          },
          [`& .${gridClasses.row}.odd`]: {
            backgroundColor: theme.palette.primary[600],
            color: theme.palette.secondary[100],
            "&:hover, &.Mui-hovered": {
              backgroundColor: theme.palette.grey[400],
            },
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
          components={{ColumnMenu:CustomColumnMenu}}
        />
      </Box>
    </Box>
  );
};

export default DashboardAdmin;
