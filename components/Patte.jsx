import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import "./Patte.css";
const imageUrls = [
  'https://plus.unsplash.com/premium_photo-1661371374079-d490e8763179?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGN5YmVyJTIwc2VjdXJpdHl8ZW58MHwxfDB8fHww',
  'https://plus.unsplash.com/premium_photo-1664299072583-584882c00a5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8',
  'https://media.istockphoto.com/id/2158996308/photo/blue-digital-security-key-logo-and-3d-circle-futuristic-hud-elements-with-network-firewall.webp?b=1&s=170667a&w=0&k=20&c=KXDiA5w405PFnIAezNKFfSnMVAHveonPIBx-yZYgoJI=',
];

const ActionAreaCard = ({ imageUrl }) => (
  <div className='areaC'>
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        width="150px"
        src={imageUrl}
        alt="Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SUPREME
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Officia magna proident non consectetur fugiat. Sit ad consectetur nisi consectetur consectetur irure 
        </Typography>
      <div className='pa'><button>Network Security</button>
        <button>Endpoint Security</button> </div>  
        <button>Firewall & Web Security</button>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More <div>→</div>
 </Button>
      </CardActions>
    </CardActionArea>
  </Card>
</div>);

const Patte = () => (
  <div className='patte'>
    {imageUrls.map((url, index) => (
      <ActionAreaCard key={index} imageUrl={url} />
    ))}
  </div>
);

export default Patte;
