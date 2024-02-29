'use client'

import React from 'react'

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { addParkingEntrance } from '@/services/addParkingEntrance'

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 3 characters." }).max(10, { message: "Name is limited to a maximum of 10 characters." }),
  description: z.string().min(4, { message: "Description must be at least 4 characters." }).max(50, { message: "Description is limited to a maximum of 50 characters." }),
  actionType: z.enum(["entrance", "parking"])
})

const UseParkingSlot = ({ levelID, slotLocation }: any) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values.actionType === "entrance") {
      const addEntrance = await addParkingEntrance(values,levelID,slotLocation)
      console.log(addEntrance)
    }
    else {
      console.log("test")
    }
  }


  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Use slot {slotLocation}</DialogTitle>
          <DialogDescription>
            Add action on this slot either Entrance or Parking Slot.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            <FormField
              control={form.control}
              name="actionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Action</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select One" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entrance">Entrance</SelectItem>
                        <SelectItem value="parking">Parking Slot</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} autoComplete='off' />
                  </FormControl>
                  <FormMessage />
                </FormItem>

              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Kindly give a short description on this."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>

      </DialogContent>
    </>
  )
}

export default UseParkingSlot