import styles from "./postImg.module.css"

// Асинхронная функция для получения изображений с Unsplash API
const getPhotos = async (query) => {
  const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=10`, { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch images from Unsplash");
  }

  const data = await res.json();
  // console.log(data);
  return data.results; // Возвращаем массив с изображениями
};

const PostImg = async ({query, index, onImageLoad }) => {

  const images = await getPhotos(query);
  const img = images[index % images.length];

  // Вызываем функцию onImageLoad, если она передана
  if (onImageLoad) {
    // Передаем URL картинки в родительский компонент
    onImageLoad(img.urls.small); 
  }
  

  return (
    <>
      <div className={styles.imgContainer}>
        <img
          src={img.urls.small}
          alt={img.alt_description}
          className={styles.img}
        />
      </div>
    </>
  )  
}
  
  export default PostImg