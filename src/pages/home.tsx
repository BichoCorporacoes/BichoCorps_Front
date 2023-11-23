import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';


function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          BichoCorporation
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const defaultTheme = createTheme();

const handleDownload = () => {
    // Substitua 'caminho/do/seu/arquivo' pelo caminho real do seu arquivo no projeto
    const filePath = '../public/LOL.msi';

    // Crie um elemento 'a' (link) invisível e clique nele para iniciar o download
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'LOL.msi'; // Nome que será dado ao arquivo durante o download
    link.click();
  };

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative" sx={{backgroundColor:"#db2504"}}>
        <Toolbar>
        {/* <img
            src="https://i.ibb.co/WkTwQgB/logo.png" // Substitua com o URL da sua imagem
            alt="Logo"
            style={{ height: '40px', marginRight: '10px' }} // Ajuste conforme necessário
          /> */}
          <Typography variant="h6" color="inherit" noWrap>
            BichoGames
          </Typography>
          {
            localStorage.getItem('token') ? 
            <IconButton color="inherit" sx={{left: "85%", fontSize: '2.5rem'}} href="/fake-adm" >
              <AccountCircleIcon />
            </IconButton>
            :  <IconButton color="inherit" sx={{left: "85%", fontSize: '2.5rem'}} href="/login" >
            <LoginIcon />
            </IconButton>
          }
           
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h3"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
             Explorando Mundos Virtuais com Paixão e Inovação
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            BichoGames, uma empresa apaixonada por jogos, está no coração da indústria de entretenimento digital, elevando a experiência de jogos a patamares inexplorados. Conhecida por sua dedicação à inovação e qualidade, a BichoGames tem conquistado os corações dos jogadores em todo o mundo.
          <br></br>
          <br></br>
O orgulho da BichoGames é o jogo "Legião das lendas", uma experiência envolvente que transcende os limites da imaginação. Este título renomado cativou milhões de jogadores, mergulhando-os em um universo repleto de desafios épicos, estratégias intricadas e uma comunidade vibrante.
<br></br>
<br></br>
No entanto, na BichoGames, não paramos por aí. Estamos ansiosos para o futuro, com a promessa de novos horizontes e aventuras emocionantes. Em breve, estaremos lançando novos jogos que levarão os jogadores a mundos ainda não explorados, com narrativas cativantes, gráficos deslumbrantes e mecânicas de jogo inovadoras.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
    
            </Stack>
            <Divider></Divider>
            <Typography variant="h4" align="center" >
                Jogos e próximos lançamentos
            </Typography>
          </Container>
        </Box>  
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image="https://i.imgur.com/hoofquH.jpg"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Legião das lendas
                    </Typography>
                    <Typography>
                    Bem-vindo ao emocionante mundo de "Legião das Lendas", um MOBA (Multiplayer Online Battle Arena) que mergulha jogadores em intensas batalhas estratégicas. Prepare-se para dominar o campo de batalha, onde a cooperação, estratégia e habilidade individual são fundamentais para a vitória.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Saiba Mais</Button>
                    <Button size="small" onClick={handleDownload}>Download</Button>
                  </CardActions>
                </Card>
                
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image="https://i.imgur.com/QvSL4Ug.jpg"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Japa: as sombras morrem duas vezes
                    </Typography>
                    <Typography>
                    "Japa: As Sombras Morrem Duas Vezes" é uma experiência intensa de ação e aventura em terceira pessoa, ambientada no Japão do século XVI. Entre em um mundo de samurais, honra e vingança, onde você assumirá o papel de um guerreiro que, caído em desgraça, retorna da morte com uma missão clara: salvar seu mestre e buscar vingança contra seu arqui-inimigo.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Saiba Mais</Button>
                    <Button size="small">Em Breve</Button>
                  </CardActions>
                </Card>
                
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image="https://i.imgur.com/TDo3LXJ.jpeg"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    5 noites com Bicha
                    </Typography>
                    <Typography>
                    Neste título eletrizante, os jogadores enfrentarão noites repletas de suspense e terror enquanto tentam sobreviver a encontros assustadores com personagens misteriosos e aterrorizantes.

Assuma o papel de um guarda noturno encarregado de monitorar um local peculiar durante cinco noites. O desafio? Manter-se vivo enquanto figuras sinistras e animatrônicos assustadores vagueiam pelas instalações, buscando quem ousar cruzar seus caminhos.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Saiba Mais</Button>
                    <Button size="small">Em Breve</Button>
                  </CardActions>
                </Card>
                
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image="https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?w=996&t=st=1700703699~exp=1700704299~hmac=7fb03aaa90c325d1e0541326c00d429a88ce220a834ff41d4b03446a54185ae3"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Sakaue Souls
                    </Typography>
                    <Typography>
                        Em "Sakaue Ring", mergulhe em uma jornada épica repleta de desafios e teste suas habilidades neste envolvente jogo de RPG. Sua missão essencial é assegurar a segurança do império em meio ao caos iminente. Com a priorização de quests, cada escolha influencia o destino do império. Escolha sabiamente suas missões, decidindo entre desbravar masmorras perigosas, enfrentar criaturas lendárias ou buscar aliados estratégicos.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Saiba Mais</Button>
                    <Button size="small" href='https://www.youtube.com/watch?v=kE0yxTqORd8'>Em Breve</Button>
                  </CardActions>
                </Card>
                
              </Grid>

          </Grid>
        </Container>
      </main>

      <Box sx={{ bgcolor: 'orangeRed', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}