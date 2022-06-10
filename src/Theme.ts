import { createTheme } from '@mui/material/styles';

export default createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    backgroundColor: "#E3F2FD",
                    letterSpacing: 0,
                    fontWeight: 700,
                    border: 0,
                    outline: 0,
                    textTransform: "none"
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                colorDefault: {
                    backgroundColor: "#fff",
                    border: 0,
                    outline: 0,
                    boxShadow: "none",
                    color: "#000",
                    padding: "10px 15px",
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: "#E3F2FD",
                    borderRadius: 10,
                    marginRight: 10,
                    padding: '5px',
                    ":hover": {
                        backgroundColor: '#2196F3',
                        color: '#fff',
                    }
                },
            }
        },
        MuiTypography: {
            styleOverrides: {
                h6: {
                    color: "#000"
                },
                subtitle1: {
                    fontSize: '.85em'
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    ":hover": {
                        borderRadius: 10,
                        backgroundColor: "#E3F2FD",
                        color: '#2196F3'
                    }
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    ":hover": {
                        color: '#2196F3'
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    border: '1px solid rgba(144, 202, 249, 0.46)',
                    boxShadow: 'none',
                    color: '#000',
                    backgroundColor: 'transparent',
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    borderBottom: '1px solid rgba(144, 202, 249, 0.46)',
                }
            }
        },
    }
});