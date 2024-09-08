import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';


export const Inputbuscar = () => {

return(
    <Paper
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", height:50, background: "F2F2F2", borderRadius: 2}}
  >
    <IconButton sx={{ p: '10px' }} aria-label="menu">
    <SearchIcon />
    </IconButton>
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search for a dish"
      inputProps={{ 'aria-label': 'Search for a dish' }}
    />
  </Paper>
)
}