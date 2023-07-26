

const mongoose= require('mongoose')
const homesection= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    facebook:{
        type:String,
        required:true
    },
    tiktok:{
        type:String,
        required:true
    },
    twitter:{
        type:String,
        required:true
    },
    Instigram:{
        type:String,
        required:true
    },
    her_title:{
        type:String,
        required:true
    },
    hero_img:{
        type:String,
        required:true
    },
    hero_description:{
        type:String,
        required:true
    },
    footer_Text:{
        type:String,
        required:true
    },
},{timestamps:true})
const shirkadamodel= mongoose.model("home_page",homesection)
module.exports=shirkadamodel