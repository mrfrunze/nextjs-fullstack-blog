import PostCard from "../../components/postCard/postCard";
import styles from "./blog.module.css";
import Pagination from "../../components/pagination/Pagination";
import prisma from "../../utils/db";

// Количество постов на одной странице
const POSTS_PER_PAGE = 10;

const getData = async (page) => {
  const start = (page - 1) * POSTS_PER_PAGE;

  // Получаем посты с пагинацией
  const posts = await prisma.post.findMany({
    skip: start,
    take: POSTS_PER_PAGE,
    select: {
      id: true,
      title: true,
      description: true,
      imageURL: true,  // Добавляем изображение
      createdAt: true,
    },
  });
  return posts;
};

// Функция getTotalPosts должна подсчитывать общее количество постов в базе данных:
const getTotalPosts = async () => {
  // Подсчитываем количество постов
  const totalPosts = await prisma.post.count(); 
  return totalPosts;
};

const BlogPage = async ({searchParams}) => {

  // Получаем текущую страницу из query-параметра, по умолчанию это 1
  const page = parseInt(searchParams.page) || 1;

  // Получаем данные постов из базы данных
  const posts = await getData(page);

  // Получаем общее количество постов (для расчёта последней страницы)
  const totalPosts = await getTotalPosts();
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE); // Общее количество страниц

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
