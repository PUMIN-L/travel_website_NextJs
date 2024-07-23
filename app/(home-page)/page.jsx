"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const pictures = [
  {
    img: "/img1.jpg"
  },
  {
    img: "/img2.jpg"
  },
  {
    img: "/img3.jpg"
  },
  {
    img: "/img4.jpg"
  },
  {
    img: "/img5.jpg"
  },
]

export default function Home() {

  const [current, setCurrent] = useState(0)
  const [ticker, setTicker] = useState(true)

  const handleClickNext = () => {
    if (pictures.length > current + 1) {
      setCurrent(current + 1)
      return
    }
    setCurrent(0)
  }

  const handleClickBack = () => {
    if (current > 0) {
      setCurrent(current - 1)
      return
    }
    setCurrent(pictures.length - 1)
  }

  useEffect(() => {
    setTimeout(() => {
      if (pictures.length > current + 1) {
        setCurrent(current + 1)
        setTicker(!ticker)
        return
      }
      setCurrent(0)
      setTicker(!ticker)
    }, 3000);
  }, [ticker])

  return (
    <>
      <div className="mt-2 h-96 relative">
        <img
          className="w-full h-full object-cover"
          src={pictures[current].img}
        />

        <Image
          src={"/arrow-right.png"}
          className="absolute top-44 right-10 rounded-full opacity-30 cursor-pointer hover:opacity-80 active:scale-105"
          onClick={handleClickNext}
          width={30} height={30}
        />

        <Image
          src={"/arrow-left.png"}
          className="absolute top-44 left-10 rounded-full opacity-30 cursor-pointer hover:opacity-80 active:scale-105"
          onClick={handleClickBack}
          width={30} height={30}
        />
      </div>
    </>

  );
}

