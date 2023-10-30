import axios from 'axios';

const BASE_URL = process.env.URL;

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        q: query,
        key: process.env.KEY,
        part: 'snippet',
        maxResults: 15,
        type: 'video',
        videoDuration: 'long', 
      },
    });
    const videos = response.data.items
      .filter((item) => item.id.videoId && item.id.kind === 'youtube#video') 
      .map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        date: item.snippet.publishedAt
      }));
      return Response.json(videos)
  } catch (error) {
    console.log(error)
  return Response.json(error)
  }
}