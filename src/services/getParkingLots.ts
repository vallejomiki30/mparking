'use client'
import useSWR from 'swr'
const API = process.env.NEXT_PUBLIC_API
const fetcher = (url: any) => fetch(url).then((r: any) => r.json())

export const getParkingLots = () => {
  const { data, error, isLoading } = useSWR(`${API}parkinglot`, fetcher)
  return {
    data: data,
    isLoading,
    isErrorParkingLot: error
  }
} 