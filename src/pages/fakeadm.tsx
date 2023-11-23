import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import api from '../service/api';

const FakeAdmPage = () => {

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile)
    const file = new FormData()
    file.append("files", selectedFile)
    api.post("/v1/user/restoreUp", file, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response)=>{
      console.log(response.data)
    })
  };

  const handleBackup = () => {
    api.get("/v1/user/createBackup")
      .then((response) => {
        const blobUrl = response.data.data;
        console.log(response.data)
  
        const downloadLink = document.createElement('a');
        downloadLink.href = blobUrl;

        downloadLink.download = 'backup.sql';
  
        document.body.appendChild(downloadLink);
        downloadLink.click();
  
        document.body.removeChild(downloadLink);
  
        URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    <>
     <Typography component="h2" variant="h2" align="center" color="text.primary" gutterBottom>
          ADM TOOLS
        </Typography>
    <Container  sx={{ mt: 4, display: "flex" }} maxWidth="lg">
     
      <Grid item>
        <Button variant="contained" onClick={()=>{handleBackup()}} color="primary" sx={{ ml: 50}} >
          Realizar o backup
        </Button>
      </Grid>
      <Grid item>
      <label>
      <Input
        type="file"
        style={{ display: 'none' }} // Torna o input de arquivo invisível
        onChange={handleFileChange}
      />
      <Button
        variant="contained"
        color="secondary"
        component="span" // Permite que o botão atue como um rótulo para o input de arquivo
        sx={{
          ml: 10,
          backgroundColor: 'orangeRed',
          '&:hover': {
            backgroundColor: '#db2504',
          },
        }}
      >
        Restaurar
      </Button>
    </label>
      </Grid>
    </Container>
        </>
  );
};

export default FakeAdmPage;
