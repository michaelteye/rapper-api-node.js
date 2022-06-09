const e = require('express')
const { request, response } = require('express')
const express  = require('express')
const app = express()
const PORT = 8000
const rappers = {
    '21 savage':{
    'age':29,
    'birthName':'Sheyaa Bin Abraham-Joseph',
    'BirthLocation':'Londom, England'
    },
    'Best Hippop':{
        'age':34,
        'birthName':'29th may 2021',
        'BirthLocation':'LA, USA'
        },
    'The Greater':{
        'age':23,
        'birthName':'15th August 2022',
        'BirthLocation':'Accra,Ghana'
        },
        'Unknown':{
            'age':0,
            'birthName':'Unknown',
            'BirthLocation':'Unknown'
            }

}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else {
        response.json(rappers['Unknown'])
    }
    
})
app.listen(PORT, ()=>{
    console.log(`The server is now runing on port ${PORT}`)
})
