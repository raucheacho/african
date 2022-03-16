/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/banner-thumb.jpg';

export default function Banner() {
  return (
   <section sx={styles.banner} id='accueil'>
     <Container sx={styles.banner.container}>
      <Box sx={styles.banner.contentBox}>
        <Heading as='h1' variant="heroPrimary">
          Service digital de qualité supérieure à explorer
        </Heading>
        <Text as="p" variant="">
          Consultez notre site Web pour trouver d'excellents services digitals. Si vous avez besoin d'un digital vous êtes au bon endroit.
        </Text>
        <Button variant="primary">Travailler avec nous</Button>
      </Box>
      <Box sx={styles.banner.imageBox}>
        <Image src={BannerImg} alt="banner"/>
        <a href="https://fr.freepik.com/vecteurs/affaires"> {"=>Affaires vecteur créé par pch.vector - fr.freepik.com"}</a>
      </Box>
     </Container>
   </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position:'relative',
    zIndex: 2,

    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      '@media screen and (max-width:1024px)': {
        flexDirection: 'column',
        alignItems:"center",
        textAlign:"center"
      },
    },
    contentBox: {
      display:'flex',
      flexDirection: 'column',
      alignItems:"flex-start",
      justifyContent:"space-between",
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'left',
      mb: ['40px', null, null, null, null, 7],
      '@media screen and (max-width:1024px)': {
        textAlign:"center",
        alignItems:"center",
      },
    },
    imageBox: {
      width:"80%",
      textAlign:"center",
      "> a":{
        textDecoration:"none",
        color:"primary",
      }
    },
  },
};
