import styles from "./postUser.module.css"

const PostUser = async ({author}) => {
  
    return (
      <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{author}</span>
      </div>
    )
  }
  
  export default PostUser