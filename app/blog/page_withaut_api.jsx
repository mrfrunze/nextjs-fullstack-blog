import PostCard from "../../components/postCard/postCard";
import styles from "./blog.module.css";
import Pagination from "../../components/pagination/Pagination";
import {getPosts} from "../../lib/data"

// Количество постов на одной странице
const POSTS_PER_PAGE = 10;


// FETCH всего количества постов (нужно для расчёта количества страниц)
const getTotalPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};


const BlogPage = async ({searchParams}) => {

  // Получаем текущую страницу из query-параметра, по умолчанию это 1
  const page = parseInt(searchParams.page) || 1;

  const posts = await getPosts()


  // Получаем общее количество постов (для расчёта последней страницы)
  const totalPosts = await getTotalPosts();
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE); // Общее количество страниц

  return (
    <>
    <div className={styles.container}>
      {/* Рендерим посты */}
      {posts.map((post, index) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} index={index} />
        </div>
      ))}
    </div>
    {/* Подключаем компонент пагинации */}
    <Pagination currentPage={page} totalPages={totalPages} />
    </>
  )
}

export default BlogPage
