import { createMuiTheme } from '@mui/material';
export const DarkTheme = createMuiTheme({
    palette: {
        mood: "dark",
      primary: {
        main: "#90caf9",
        light: '#e3f2fd'
      },
      secondary: {
        main: "#ce93d8",
        light: '#f3e5f5'
      },
      common:{
        black: "#000",
        white: "#fff"
      },
      background: {
        default: "#121212"
      },
    },
    overrides:{
      MuiAppBar:{
        root:{
          transform:'translateZ(0)'
        }
      }
    },
    props:{
      MuiIconButton:{
        disableRipple:true
      }
    }
  })
  