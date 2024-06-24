import style from './sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img className={style.cover}src="https://blog.goinfinite.net/wp-content/uploads/2021/09/Linguagens-de-programacao-1.png" alt="" />
      <div className={style.profile}>
        <img className={style.avatar} src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" alt="" />
        <strong>Letícia</strong>
        <span></span>
      </div>
      <footer>
        <a href="">Seu Github</a>
      </footer>
    </aside>
  )
}

 
