import { Search } from "@mui/icons-material";
import { Box, IconButton, TextField, InputAdornment } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
  return (
    <GridToolbarContainer>
      <Box className="jusbetween" width="100%">
        <Box className="jusbetween">
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </Box>
        <TextField
          label="Search..."
          sx={{
            mb: "0.5rem",
            width: "15rem",
            "& .MuiTextField-root": {
              alignItems: "center", 
            },
            '& .MuiInputLabel-root': {
              margin: "0 0 8px 0", 
            },
          }}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearch(searchInput);
                    setSearchInput("");
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
