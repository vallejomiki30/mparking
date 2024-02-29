'use client'
import useSWR from 'swr'
const API = process.env.NEXT_PUBLIC_API
const fetcher = (url: any) => fetch(url).then((r: any) => r.json())

export const getParkingEntrance = (parkinglevel:string) => {
  // const { data, error, isLoading } = useSWR(`${API}entrance/${parkinglevel}`, fetcher, {refreshInterval: 1000})
  const { data, error, isLoading } = useSWR(`${API}entrance/${parkinglevel}`, fetcher)
  return {
    data: data,
    isLoading,
    isErrorParkingEntrance: error
  }
}