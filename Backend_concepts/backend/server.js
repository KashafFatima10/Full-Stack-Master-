import express from "express"

const app = express();  

app.get("/", (req, res) => {
    res.send("Server is ready!");
});

//get a list of 5 jokes

app.get('/jokes', (req, res) => {
     const jokes=[
        {
            id:1,
            title:"a joke",
            content:"this is a joke"

        },
        {
            id:1,
            title:"2nd joke",
            content:"this is 2nd joke"

        },
        {
            id:1,
            title:"3rd joke",
            content:"this is 3rd joke"

        },
        {
            id:1,
            title:"4th joke",
            content:"this is 4th joke"

        },
        {
            id:1,
            title:"5tg joke",
            content:"this is 5th joke"

        }
     ];

      res.send(jokes); 
})

const port=process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at https://localhost: ${port}`);
});
