import React from 'react'
import Image from 'next/image'

interface ImageInterface {
  src: string
  blurHash?: string
}

export interface CardInterface {
  slug: string
  image: ImageInterface
  type: string
  title: string
  date: string
}

const Card = ({
  slug,
  image,
  type,
  title,
  date
}: CardInterface): JSX.Element => {
  const { src, blurHash } = image
  return (
    <li>
      <a
        href={`/blog/${slug}`}
        aria-label={`${title} - ${type} - Posted on ${date}`}
      >
        <div aria-hidden="true">
          <Image src={src} width={150} height={150} layout="responsive" />
        </div>
        <div aria-hidden="true">
          <h5>{type}</h5>
          <h2>{title}</h2>
          <h5>{date}</h5>
        </div>
      </a>
    </li>
  )
}

export { Card }
