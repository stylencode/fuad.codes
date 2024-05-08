import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({d}) {
  return (
    <Card sx={{ maxWidth: 345 }} className="mr-5 h-[350px] mb-5">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={d.images[0]}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              {d.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {d.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}