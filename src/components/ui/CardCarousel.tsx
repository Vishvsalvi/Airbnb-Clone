"use client"
import React, {useState} from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export default function CardCarousel() {  

  
    const [isHovered, setIsHovered] = useState(false);

    const images = ["https://assets.lummi.ai/assets/QmQfvTuu3du9qdMNeuwXRNF8ywbaQFqVNJ3qHCJEBuUgo2?auto=format&w=1500", "https://assets.lummi.ai/assets/QmeqwGELUZYV7fjHRHLGgtUEKkR7vr6o6XQDCFjcJBcGa4?auto=format&w=1500", "https://assets.lummi.ai/assets/QmS4FCLnTUASYEQoByPbpcfMXcfuRZoRJRynXqPVHgoRXX?auto=format&w=1500"]
    return (
        <Card className='rounded-md shadow-none border-none' onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} >

        <Carousel  className="w-full max-w-xs rounded-md" >
        <CarouselContent>
          {images.map((img, index) => (
              <CarouselItem key={index}>
                
                  <CardContent className="flex aspect-square items-center justify-center ">
                    <img src={img} alt="img" className="rounded-md object-cover w-full h-full" />
                  </CardContent>
                
            </CarouselItem>
          ))}
      
             </CarouselContent>
           {isHovered && <CarouselPrevious />}
           {isHovered && <CarouselNext />}
        
        
      </Carousel>
        <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardFooter className="text-sm" >
           ₹ 1000 per guest
        </CardFooter>
          </Card>

    )
}
