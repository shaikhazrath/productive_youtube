import axios from 'axios';
export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const maxDuration = 5
const BASE_URL = process.env.URL;

export async function GET(request) {
  try {
    
    
      return Response.json(videos)
  } catch (error) {
    console.log(error)
  return Response.json(error)
  }
}