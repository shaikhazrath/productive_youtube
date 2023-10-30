"use client"
import axios from 'axios';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AiOutlineSearch, AiFillYoutube, AiOutlineBell } from 'react-icons/ai'
import { Card } from '@/components/ui/card';


export default function Home() {
  const [videos, setVideos] = useState([])
  const [searchQuery, setSearchQuery] = useState();
  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`/api?query=${searchQuery}`)
      setVideos(response.data)
      console.log(response.data)
    } catch {
      console.log('error fetching videos:', error);
    }
  }
  return (
    <main>
      <div className="flex justify-between m-2 items-center">
        <div className='flex align-middle items-center justify-center'>
          <AiFillYoutube color='red' size={45} />
          <h1 className=' uppercase text-lg font-bold md:block hidden'>youtube</h1>
        </div>

        <div className='flex gap-1'>
          <Input type="email" placeholder="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}/>
          <Button type="submit" variant="outline" size="icon" onClick={handleSearch}>
            <AiOutlineSearch />
          </Button>
        </div>
        <AiOutlineBell size={30} />
      </div>
      <div className='flex  justify-around '> 
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-28'>
      {videos.map((video) => (
        <Card className="w-[350px] text-center">
        <a href={`video/${video.id}`} >
         <img src={video.thumbnail}  className='w-full' />
          <h1>
          {video.title}   
          </h1>
          <h1>
          {(video.date).split('T')[0]}       
          </h1>
        </a>
        </Card>


           ))}
      </div>
      </div>
    </main>
  )
}
