import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyleButton from "../../../../components/StyleButton/StyleButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

function Hero () {

  const StyleHero = styled("div")(({theme})=> ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: {
        paddiingTop: "100px"
    },
    [theme.breakpoints.up('md')]: {
        paddiingTop: "0"
    }
  }))

  const StyleImg = styled("img")(({theme})=> ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }))

    return (
      <>
        <StyleHero>
            <Container maxWidth="lg">                
                <Grid container spacing={2}>
                    <Grid size={{xs:12, md:4}}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground></AnimatedBackground>
                            </Box>
                            <Box position="absolute" textAlign="center">
                                <StyleImg src={Avatar}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{xs:12, md:8}}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Matheus Godoi</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Software Engineer</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid size={{xs:12, md:5}} display="flex" justifyContent="center">
                               
                                <StyleButton>
                                    <DownloadIcon/>
                                    <Typography>
                                        Download CV
                                    </Typography>
                                </StyleButton>
                            </Grid>
                            <Grid size={{xs:12, md:7}} display="flex" justifyContent="center">
                                <StyleButton>
                                    <MailOutlineIcon/>
                                    <Typography>
                                        Contact me
                                    </Typography>
                                </StyleButton>
                            </Grid>
                        </Grid>
                        
                        
                    </Grid>
                </Grid>
            </Container>
        </StyleHero>
      </>
    )
  }
  
  export default Hero
  