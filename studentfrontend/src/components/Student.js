import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';

export default function Student() {
    const [name, setName] = React.useState("")
    const [address, setAddress] = React.useState("")
    const [students, setStudents] = React.useState([])

    const handleClick = (e)=>{
        e.preventDefault()
        const student={name,address}
        console.log(student)
        fetch("http://localhost:8080/students/add",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("New student added")
        })
    }

    React.useEffect(()=>{
        fetch("http://localhost:8080/students/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setStudents(result);
        }
        )
    },[])
  return (
      <>
    <Box sx={{
        display: 'flex',
        justifyContent:"center",
        flexDirection: 'column',
        border: 1,
        borderColor: 'grey.500',
        margin: '5% 10% 5% 10%',
        padding: '16px',
        boxShadow: 10,
        }}
        noValidate
        autoComplete="off">
    <div>
        <h1 style={{color:"blue"}}><u>Add Student</u></h1>
        <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth style={{paddingBottom: '16px'}}
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />
        <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth style={{paddingBottom: '16px'}}
        value={address}
        onChange={(e)=> setAddress(e.target.value)}
        /> 
        <Button variant="contained" onClick={handleClick}>Submit</Button>
      </div>
    </Box>
    
        
        <Paper elevation={3} style={{display: 'flex',
        justifyContent:"center",
        flexDirection: 'column',
        border: 1,
        borderColor: 'grey.500',
        margin: '5% 10% 5% 10%',
        padding: '16px',
        boxShadow: 10}}>
            <h1>Students</h1>
            {students.map(student=>(
                <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={student.id}>
                    Id:{student.id}<br/>
                    Name:{student.name}<br/>
                    Address:{student.address}<br/>
                </Paper>
            ))}
        </Paper>
    
    </>
  );
}
