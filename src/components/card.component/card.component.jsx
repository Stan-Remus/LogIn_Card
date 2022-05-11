import React from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";
import Icon from '../../images/icon-error.svg';
import { makeStyles } from '@mui/styles';

import './card.styles.css';

const useStyles = makeStyles({
  textField: {
    fontFamily: "'Poppins', sans-serif",
  }
})

export default function Card(props){

  const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit=(data) => console.log(data)
    const classes = useStyles();

      return (<div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction={"column"} spacing={2} >
            <Grid item className="grid">
                <TextField
              className={classes.textField} 
              id="outlined-basic" 
              placeholder="First Name"
              variant="outlined" 
              autoFocus 
              {...register("firstName", { required: "First Name cannot be empty"})} 
              error={!!errors?.firstName}
              helperText={errors?.firstName ? errors.firstName.message : null}
              InputProps={errors?.firstName ? {
                endAdornment: <img src={Icon} />
              } : null}
              fullWidth
              />
            </Grid>
            <Grid item className="grid">
                <TextField 
              className={classes.textField} 
              id="outlined-basic" 
              placeholder="Last Name"
              variant="outlined" 
              autoFocus 
              {...register("lastName", { required: "Last Name cannot be empty"})} 
              error={!!errors?.lastName}
              helperText={errors?.lastName ? errors.lastName.message : null}
              InputProps={errors?.lastName ? {
                endAdornment: <img src={Icon} />
              } : null}
              fullWidth
              />
            </Grid>
            <Grid item className="grid">
            <TextField
              className={classes.textField}  
              id="outlined-basic" 
              placeholder="Email Address"
              variant="outlined" 
              autoFocus 
              {...register("email", { required: "Looks like this is not an email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Looks like this is not an email"
            }
            })} 
              error={!!errors?.email}
              value={errors?.email ? "email@example/com": null}
              helperText={errors?.email ? errors.email.message : null}
              InputProps={errors?.email ? {
                endAdornment: <img src={Icon} />
              } : null}
              fullWidth
              />
            </Grid>
            <Grid item className="grid">
                <TextField
              className={classes.textField}    
              id="outlined-basic" 
              placeholder="Password"
              variant="outlined" 
              autoFocus 
              {...register("password", { required: "Password cannot be empty"})} 
              error={!!errors?.password}
              helperText={errors?.password ? errors.password.message : null}
              InputProps={errors?.password ? {
                endAdornment: <img src={Icon} />
              } : null}
              fullWidth
              />
            </Grid>
            <Grid item>
                {/* <Button variant="containded" type="submit" fullWidth className="button" style={{backgroundColor: "hsl(154, 59%, 51%)", color: "white"}} >
              CLAIM YOUR FREE TRIAL
            </Button> */}
            <button className="button">CLAIM YOUR FREE TRIAL</button>
            </Grid>
            <Grid item>
              <p align="center" className="cardParagraph">
                By clicking the button, you are agreeing to our <span className="span">Terms and Services</span>
              </p>
            </Grid>
          </Grid>
                
        
        </form>
      </div>)
    }
  



// class Card extends React.Component {

//     const { register, handleSubmit} = useForm()
//     const onSubmit=(data) => console.log(data)

//     render() {
//       return <div className="card">
//         <form>
//           <TextField  error id="outlined-basic" label="Outlined" variant="outlined" />
//           <TextField
//           error
//           id="outlined-error"
//           defaultValue="Hello World"
//         />
//         <Button variant="containded" type="submit" fullWidth>
//           CLAIM YOUR FREE TRIAL
//         </Button>
//         </form>
//       </div>;
//     }
//   }


//   export default Card;


