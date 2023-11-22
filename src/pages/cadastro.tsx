import * as React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import api from '../service/api';
import { Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';


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

const defaultTheme = createTheme();

export default function Register() {
  const [open, setOpen] = useState(false);
  const [termosDeUso, setTermosDeUso] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [atualizacao, setAtualizacao] = useState(false)
  const [responsavel, setResponsavel] = useState({} as any)
  const [showError, setShowError] = useState(false);
  const [showResponsavelError, setShowResponsavelError] = useState(false);
  const navigate = useNavigate();

  const calcularIdade = (dataNascimento: string): number => {
    const hoje = new Date();
    const dataNasc = new Date(dataNascimento);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    return idade;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!termosDeUso) {
      setShowError(true);
      return;
    }
    const data = new FormData(event.currentTarget);
    if (calcularIdade(data.get('dateOfBirth') as string) < 16 && checkFields(responsavel) === false) {
      setOpen(true);
      return;
    }
    const body = {
      nome: data.get('firstName'),
      nick: data.get('nickName'),
      email: data.get('email'),
      senha: data.get('password'),
      dataNascimento: data.get('dateOfBirth'),
      cpf: data.get('cpf'),
      responsavel: responsavel,
      termos: {
        uso_condicao: new Date().toISOString().split('T')[0],
        markting_comunicaoo: marketing,
        markting_atualizacao: atualizacao
      }
    }
    try {
      api.post("/v1/user/CreateUser", body).then((response) => {
        navigate('/login');
      });
    } catch (error) {
      console.log(error);
    }

  };
  
  const checkFields = (responsavel: any) => {
    if (responsavel.nome && responsavel.nick && responsavel.email && responsavel.senha && responsavel.dataNascimento && responsavel.cpf) {
      return true;
    }
    return false;
  }

  const handleCloseError = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowError(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'orangeRed' }}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome completo"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="nickName"
                  required
                  fullWidth
                  id="nickName"
                  label="Nickname"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="dateOfBirth"
                  label="Data de Nascimento"
                  type="date"
                  id="dateOfBirth"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cpf"
                  label="CPF"
                  id="cpf"
                  autoComplete="cpf"
                  inputProps={{ maxLength: 11 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checked={termosDeUso} onChange={e => setTermosDeUso(e.target.checked)} color="primary" />}
                  label={
                    <Typography variant="body2" >
                      Eu concordo com os{' '}
                      <Link href="#">
                        Termos de Uso
                      </Link>
                      {' '}
                      *
                    </Typography>

                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checked={marketing} onChange={e => setMarketing(e.target.checked)} color="primary" />}
                  label="Eu quero em receber promoções de marketing via e-mail."
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checked={atualizacao} onChange={e => setAtualizacao(e.target.checked)} color="primary" />}
                  label="Eu quero receber novidades e atualizações do jogo via e-mail."
                />
              </Grid>

            </Grid>

            <Snackbar open={showError} autoHideDuration={6000} onClose={handleCloseError}  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
              <MuiAlert onClose={()=> setShowError(false)} severity="error" sx={{ width: '100%' }}>
                Você precisa concordar com os Termos de Uso para continuar.
              </MuiAlert>
            </Snackbar>

            <Snackbar open={showResponsavelError} autoHideDuration={6000} onClose={()=>{setShowResponsavelError(false)}}  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
              <MuiAlert onClose={()=> setShowResponsavelError(false)} severity="error" sx={{ width: '100%' }}>
                  Preencha todos os campos do responsavel.
              </MuiAlert>
            </Snackbar>

            <Modal
              open={open}
              onClose={() => setOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{
                position: 'absolute',
                width: 900,
                bgcolor: 'background.paper',
                justifyContent: "center",
                boxShadow: 24,
                p: 4,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)', // Centraliza vertical e horizontalmente
              }}>
                <Typography id="modal-modal-title" sx={{ textAlign: "center" }} variant="h4" component="h1">
                  Você precisa de um responsável para se cadastrar!
                </Typography>
                <Typography id="modal-modal-title" sx={{ textAlign: "center" }} variant="h6" component="h6">
                  Por favor, insira os dados do responsável
                </Typography>

                <Box id="modal-modal-description" sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="given-name"
                        name="nomeResponsavel"
                        required
                        fullWidth
                        id="nomeResponsavel"
                        label="Nome completo"
                        onChange={e => setResponsavel({ ...responsavel, nome: e.target.value })}
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="given-name"
                        name="nickResponsavel"
                        required
                        fullWidth
                        id="nickResponsavel"
                        onChange={e => setResponsavel({ ...responsavel, nick: e.target.value })}
                        label="Nickname"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="dataResponsavel"
                        label="Data de Nascimento"
                        type="date"
                        onChange={e => setResponsavel({ ...responsavel, dataNascimento: e.target.value })}
                        id="dataResponsavel"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="cpfResponsavel"
                        label="CPF"
                        onChange={e => setResponsavel({ ...responsavel, cpf: e.target.value })}
                        id="cpfResponsavel"
                        autoComplete="cpf"
                        inputProps={{ maxLength: 11 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="emailResponsavel"
                        label="Email"
                        onChange={e => setResponsavel({ ...responsavel, email: e.target.value })}
                        name="emailResponsavel"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="senhaResponsavel"
                        label="Senha"
                        onChange={e => setResponsavel({ ...responsavel, senha: e.target.value })}
                        type="password"
                        id="senhaResponsavel"
                        autoComplete="new-password"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={() => checkFields(responsavel) ? setOpen(false) : setShowResponsavelError(true)}
                    sx={{
                      mt: 3, mb: 2, ml: 40, backgroundColor: 'orangeRed', '&:hover': {
                        backgroundColor: '#db2504',
                        justifyContent: "center",
                      },
                    }}
                  >
                    Cadastrar responsável
                  </Button>
                </Box>

              </Box>
            </Modal>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2, backgroundColor: 'orangeRed', '&:hover': {
                  backgroundColor: '#db2504',
                },
              }}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Já possui uma conta? Faça o login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}