import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding:"64px 0px 48px",
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  icon:{
    marginRight:"20px"
  },
  button:{
    marginTop:"40px"
  },
  cardGrid:{
    padding: "20px 0px"
  },
  card:{
    height:"100%",
    display:"flex",
    flexDirection:"column"
  },
  cardMedia:{
    paddingTop:"56.25%" // 16/9

  },
  cardContent:{
    flexGrow: 1
  },
  footer:{
      backgroundColor: "gray",
      padding:"50px 0px"
  }
}))

export default useStyles;