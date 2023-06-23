const express=require("express")
const app=express();
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
app.use(express.json());

const configuration = new Configuration({
    organization: "org-hn3hvCjSs5mgorBC2bNiEiDE",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
 openai.listModels().then(response=>{
    // console.log(response)
 });



app.get("/",(req,res)=>{
    res.send("<h1>HomE PagE</h1>")
})

app.post("/chat",(req,res)=>{
    let question=req.body.question || 'How to use chatgpt?'
    openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${question}`,
        max_tokens: 4000,
        temperature: 0,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      }).then(response=>{
        return response?.data?.choices?.[0].text;
      }).then((ans)=>{
        const arr=ans?.split("\n").filter(ele=>ele).map(value=>value.trim());
        return arr;
      })
      .then(response=>{
        res.json({
            answer:response,
            prompt:question
        })        
    })
})

app.listen(4100,()=>{
    console.log("server is listening")
})
