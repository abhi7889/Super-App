import { useEffect, useState } from "react"

export default function News() {

        const [news, setNews] = useState('')
         const [date, setDate] = useState("")
        const [time, setTime] = useState("")
        console.log(news)
        useEffect(()=>{
            const fetchNews = async()=>{
               await fetch("https://newsapi.org/v2/top-headlines?country=in&category=science&sortBy=popularity&apiKey=58912f508bda48d6903b85d16a29b179")
                    .then(async(data)=>await data.json()).then((res)=>setNews(res.articles[0]))
            }
            fetchNews();
        },[])



  return (
    <div>News</div>
  )
}
