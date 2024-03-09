import { Box, useTheme, gridClasses } from "@mui/material";
import { useGetUserPerformanceQuery } from "utils/dashboard/api";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import Header from "utils/dashboard/header";
import CustomColumnMenu from "utils/dashboard/dataGridCustomColumnMenu";

const DashbaordPerformancce = () => {
  const theme = useTheme();
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetUserPerformanceQuery(userId);
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of products",
      flex: 0.5,
      sortable:false,
      renderCell:(params)=>params.value.length
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell:(params)=>`$${Number(params.value).toFixed(2)}`,
    },
  ];
  return (
    <Box className="DashbaordPerformancce-container">
      <Header title="PERFORMANCE" subtitle="Managing admins and list of admin" />
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
          rows={(data&&data.sales) || []}
          columns={columns}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
          components={{ ColumnMenu: CustomColumnMenu }}
        />
      </Box>
    </Box>
  );
};

export default DashbaordPerformancce;
