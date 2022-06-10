import React, {CSSProperties} from 'react';
import backgroundImage from './assets/4907157.jpg';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemIcon, Snackbar, TextField,
  Typography
} from "@mui/material";
import './App.css';
import PersonIcon from '@mui/icons-material/Person';
import PlayingCard from "./components/PlayingCard/PlayingCard";
import {playerCountMessage} from './languages/Distribute';
import {__Players} from "./AppInterfaces";

const appStyle:CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    height: '100vh',
}

const STATUS = {
  NORMAL: 'Normal',
  WARNING: 'Warning',
  ERROR: 'Error',
}

function App() {
  const [playerCount, setPlayerCount] = React.useState<number|null>(null);
  const [playerCountStatus, setPlayerCountStatus] = React.useState<string>(STATUS.NORMAL);
  const [players, setPlayers] = React.useState<__Players[]>([]);

  const distributeCards = () => {
    if (!playerCount || playerCount <= 0) {
      setPlayerCountStatus(STATUS.WARNING);

      return true;
    }

    fetch(`${process.env.REACT_APP_API_URL}/card/distribute`, {
      method: 'POST',
      body: JSON.stringify({playerCount})
    }).then(response => response.json())
      .then(response => {
        setPlayers(response);
      }).catch(() => {
        setPlayerCountStatus(STATUS.ERROR);
    });
  }

  const setNewPlayerCount = (value: string) => {
    const playerCountValue = (value === '') ? 0 : parseInt(value);

    setPlayerCount(playerCountValue);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={appStyle}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} className="welcomeBoard">
               <Grid container spacing={2}>
                 <Grid item xs={12} md={12}>
                   <div style={{textAlign: 'center'}}>
                     <Typography variant="h5">Welcome to <strong>Playing Cards</strong></Typography>
                   </div>
                   <div className="inputContainer">
                     <TextField
                       type="number"
                       label="Player Count"
                       variant="standard"
                       size="small"
                       defaultValue={playerCount}
                       onChange={(e) => { setNewPlayerCount(e.target.value) }}
                     />
                     <div>
                       <Button
                         variant="text"
                         size="small"
                         style={{width: '170px', marginTop: '5px'}}
                         onClick={distributeCards}
                       >Distribute</Button>
                     </div>
                   </div>
                 </Grid>
               </Grid>
              </Grid>
              <Grid item xs={12} md={12}>
                <Card>
                  <CardHeader
                    title={<Typography variant="h6">Players Cards</Typography>}
                  />
                  <CardContent style={{minHeight: 335}}>
                    <List
                      sx={{ width: '100%' }}
                      component="nav"
                    >
                      {
                        players.map((player, index) => {
                          return <ListItem key={index}>
                                  <ListItemIcon className="playerNameContainer">
                                    <div>
                                      <PersonIcon />
                                    </div>
                                    <div>{player.name}</div>
                                  </ListItemIcon>
                                  {
                                    player.cards.map((card, cardIndex) => {
                                      return <PlayingCard key={cardIndex} value={card.value} suite={card.suite} />
                                    })
                                  }
                                 </ListItem>
                        })
                      }

                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
      <Snackbar
        open={playerCountStatus !== STATUS.NORMAL}
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        autoHideDuration={5000}
        onClose={() => setPlayerCountStatus(STATUS.NORMAL)}>
        <div>
          {
            playerCountStatus === STATUS.WARNING &&
            (<Alert severity="warning">{playerCountMessage.warning}</Alert>)
          }
          {
            playerCountStatus === STATUS.ERROR &&
            (<Alert severity="error">{playerCountMessage.error}</Alert>)
          }
        </div>

      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
