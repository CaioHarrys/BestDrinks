import React from 'react';
import { Paper, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import banner1 from '../../assets/Imagens/Banners/banner1.png';
import banner_2 from '../../assets/Imagens/Banners/banner_2.png';
import banner3 from '../../assets/Imagens/Banners/banner3.png';
import banner4 from '../../assets/Imagens/Banners/banner4.png';
import '../../assets/Css/ImageCarousel.css';

function ImageCarousel() {
  const items = [
    {
      image: banner1,
      description: 'Descrição da Imagem 1',
    },
    {
      image: banner_2,
      description: 'Descrição da Imagem 2',
    },
    {
      image: banner3,
      description: 'Descrição da Imagem 3',
    },
    
    {
      image: banner4,
      description: 'Descrição da Imagem 4',
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

// Use React.memo para evitar re-renderizações desnecessárias
const Item = React.memo((props) => {
    return (
      <Paper
        elevation={0}
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0px',
          minHeight: 'fit-content',
        }}
      >
        <img
          src={props.item.image}
          alt={props.item.description}
          style={{
            width: '100%',
            maxHeight: 'fit-content',
            objectFit: 'contain',
            marginBottom: '0px !important',
            paddingBottom: '0px !important',
          }}
        />
      </Paper>
    );
  });

export default ImageCarousel;