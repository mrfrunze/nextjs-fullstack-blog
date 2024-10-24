import Image from "next/image"
import styles from "./singlePost.module.css"
import PostUser from "../../../components/postUser/postUser"
import { Suspense } from "react";
import PostImageClient from "../../../components/PostImageClient" 
import prisma from "../../../utils/db"

const getData = async (id) => {
  // Преобразуем id в целое число, если оно строка
  const postId = parseInt(id, 10);
  const post = await prisma.post.findUnique({
    where: { id: postId }, // Ищем пост по ID
  });

  if (!post) {
    throw new Error("Post not found");
  }

  return post
};

const SinglePostPage = async ({params}) => {
  const {slug} = params
  const post = await getData(slug);
  // console.log(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
       <Image src={post.imageURL || "/yoga.jpg"} alt={post.title} width={800} height={600} className={styles.img} />
       {/* <img src={post.imageURL || "/yoga.jpg"} alt={post.title} className={styles.img} /> */}
      </div>
      <div className={styles.textContainer}>
        <h1  className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image src="/avatar.jpg" alt="avatar" className={styles.avatar} width={64} height={64} />
          <Suspense fallback={<div>Loading..</div>}>
             <PostUser author={post.author}/>
          </Suspense>
         
          <div className={styles.detailText}>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
        <div className={styles.content}>{post.description}</div>
      </div>
    </div>
  )
}

export default SinglePostPage
