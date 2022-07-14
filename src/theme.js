import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: [
            'Nunito',
            'sans-serif'
        ].join()
    }
});

export default theme;
