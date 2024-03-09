import { Box, useTheme } from "@mui/material";
import { DataGrid,gridClasses} from "@mui/x-data-grid";
import { useState } from "react";
import { useGetTransactionsQuery } from "utils/dashboard/api";
import Header from "utils/dashboard/header";
import DataGridCustomToolbar from "../../utils/dashboard/dataGridCustomToolbar.js";

const DashboardTransaction = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [searchInput,setSearchInput] = useState("");
  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });
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
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];
  return (
    <Box className="dashboardTransaction-container">
      <Header title="TRANSACTION" subtitle="This is transaction" />
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
          getRowId={(row)=>row._id}
          rows={(data&&data.transaction)||[]}
          columns={columns}
          getRowClassName={(params)=>
            params.indexRelativeToCurrentPage%2===0?"even":"odd"
          }
          rowCount={(data&&data.total)||0}
          rowsPerPageOptions={[20,50,100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage)=>setPage(newPage)}
          onPageSizeChange={(newPageSize)=>setPageSize(newPageSize)}
          onSortModelChange={(newSortModel)=>setSort(...newSortModel)}
          components={{Toolbar:DataGridCustomToolbar}}
          componentsProps={{
            toolbar:{searchInput,setSearchInput,setSearch}
          }}
        />
      </Box>
    </Box>
  );
};

export default DashboardTransaction;
