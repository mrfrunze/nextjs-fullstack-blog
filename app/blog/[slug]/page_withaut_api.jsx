// "use client"

import Image from "next/image"
import styles from "./singlePost.module.css"
// import { useParams } from 'next/navigation';
import PostUser from "../../../components/postUser/postUser"
import { Suspense } from "react";
import {getPost} from "../../../lib/data"



const SinglePostPage = async ({params}) => {
  const {slug} = params
  // slug должен приходить в виде number
  // console.log(slug); 
  
  const post = await getPost(slug)
  // console.log(post);
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/yoga.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1  className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image src="/avatar.jpg" alt="avatar" className={styles.avatar} width={64} height={64} />
          {post && <Suspense fallback={<div>Loading..</div>}>
             <PostUser userId = {post.id}/>
          </Suspense>}
         
          <div className={styles.detailText}>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  )
}

export default SinglePostPage
