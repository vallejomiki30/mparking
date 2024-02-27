'use client'
import useSWR from 'swr'
const API = process.env.NEXT_PUBLIC_API
const fetcher = (url: any) => fetch(url).then((r: any) => r.json())

export const getFloors = (parking:string) => {
  const { data, error, isLoading } = useSWR(`${API}parkinglevel/${parking}`, fetcher)
  return {
    data: data,
    isLoading,
    isError: error
  }
} 