"use client"; 

import Image from "next/image";

const PostImageClient = ({ imageUrl, fallbackImage, alt }) => {

  return (
    <Image 
      src={imageUrl || fallbackImage} 
      alt={alt} 
      fill 
    />
  );
};

export default PostImageClient;
