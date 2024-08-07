export default async function Jokes(){
    let promise = await fetch(`https://official-joke-api.appspot.com/random_joke`)
    let data = await promise.json()
    // console.log("jokes : ",data) 
    return await data
}