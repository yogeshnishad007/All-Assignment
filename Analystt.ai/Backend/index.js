
const express=require("express")
const cors=require("cors")
const app= express();
app.use(cors())
const Port=8080

app.get('/api/users', async (req, res) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



app.listen(8080,()=>{
       console.log(`Run Server ${Port}`)
})