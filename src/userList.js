import React ,{useState, useEffect}from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
   
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  // eslint-disable-next-line no-undef
  const [users,setUsers]=useState([])
  useEffect(()=>{
    const fetchData=()=>{
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then(res=>setUsers(res.data))
     .catch(err=>console.log(err))
    }
    fetchData()
   },[])
  const bull = <span className={classes.bullet}>•</span>;
  const sp=<br></br>

  return (<div style={{display:'flex',flexDirection:'column '}}>
     {
    users.map(user => (
       
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {user.id}
        </Typography>
        <Typography variant="h5" component="h2">
          {user.name} {bull} {user.username}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {user.email}
        </Typography>
        <Typography variant="body2" component="p" color='#a89f5d'>
        { user.address.street}       { user.address.suite}  { user.address.city}   { user.address.zipcode}    <br />
          {user.website}
        </Typography>
        <Typography variant ="h4">
          {user.phone}
        </Typography>
        <Typography variant ="h4">
          {user.company.name}
        </Typography>
        <Typography variant="body2" component="p" color='#a89f5d'>
        { user.company.catchPhrase}       { user.company.bs}   <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> GEO :  { user.address.geo.lat}  , { user.address.geo.lat} </Button>
      </CardActions>{sp}
    </Card>   ))}
 
    </div>
  );
}
