const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");
const app=express();
let alert=require("alert");
const typed=[];
const ability=[];
var num=0;
num.length=0;

app.use(express.static(__dirname+'/public'));


app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');


app.get("/",function(req,res){
    res.render("home.ejs");
})

app.post("/",function(req,res){

    const name=req.body.poki;
    const url="https://pokeapi.co/api/v2/pokemon/"+name;
    https.get(url,function(response){
        const chunks=[];
        console.log(response.statusCode);
        
        response.on("data",function(chunk){
            chunks.push(chunk);
        })
        response.on("end",function(){
            const data =Buffer.concat(chunks);
            var pokemon = JSON.parse(data);
            num = pokemon.types;
            const id=pokemon.id;
            const pic="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+id+".png"
            const hp=pokemon.stats[0].base_stat;
            const attk=pokemon.stats[1].base_stat;
            const defense=pokemon.stats[2].base_stat;
            const splattk=pokemon.stats[3].base_stat;
            const spldefense=pokemon.stats[4].base_stat;
            const speed=pokemon.stats[5].base_stat;
            for(var i=0;i<num.length;i++){
                typed[i]=pokemon.types[i].type.name;
            }
            
            res.render("pokemon",{img:pic,name:name,clas:typed,hp:hp,atk:attk,def:defense,spat:splattk,spdf:spldefense,sp:speed});
        })    
    })
})

app.use(function(req,res){
    res.status(404).render("welps");
})


app.listen(3000,function(){
    console.log("Running");
})