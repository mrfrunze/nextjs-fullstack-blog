import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = async ({post}) => {
  // Используем imageURL из базы данных (или показываем изображение по умолчанию, если его нет)
  const imageUrl = post.imageURL || "/yoga.jpg"; // Обработка отсутствия картинки


    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <img src={imageUrl} alt={post.title} className={styles.img} />
          <span className={styles.date}>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>{post.title.slice(0, 25)}...</h1>
          <p className={styles.desc}>{post.description.slice(0, 100)}...</p>
          <Link className={styles.link} href={`/blog/${post.id}`}>READ MORE</Link>
        </div>
      </div>
    )
  }
  
  export default PostCard