import {
  GridColumnMenuProps,
  GridColumnMenu
} from "@mui/x-data-grid";

const CustomColumnMenu = (props: GridColumnMenuProps) => {
  return (
    <GridColumnMenu
      {...props}
      slotProps={{
        columnMenuFilterItem: {
          displayOrder: 0, // Previously `10`
        },
        columnMenuSortItem: {
          displayOrder: 10, // Previously `0`
        },
      }}
    />
  );
};

export default CustomColumnMenu;
