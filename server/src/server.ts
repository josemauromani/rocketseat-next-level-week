import express, { response } from 'express';

const app = express(); 

app.get('/users', (req,res)=>{
    //res.send('Opa .. e ae')
    res.json([
        'Diego',
        'Robson',
        'Zé'
    ])
})

app.listen(3333)
