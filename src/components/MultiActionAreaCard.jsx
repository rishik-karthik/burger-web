import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function MultiActionAreaCard({ burger }) {
  return (
    <Card sx={{
      maxWidth: 345,
      backgroundColor: "#ffffff99",
      '&:hover': {
        backgroundColor: "#ffffffcc", // Lighter on hover
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)", // Add shadow on hover
        transform: "scale(1.02)", // Slight zoom effect
        transition: "all 0.3s ease" // Smooth transition
      }
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={burger.images[0].sm}
          alt={burger.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {burger.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {burger.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={{
          color: "white",
          backgroundColor: '#ED6B2D',
          '&:hover': {
            backgroundColor: '#FF7B3D',
            transform: "translateY(-2px)",
          },
          transition: "all 0.2s ease"
        }}>
          <p>ORDER NOW : ${burger.price}</p>
        </Button>
      </CardActions>
    </Card>
  );
}
