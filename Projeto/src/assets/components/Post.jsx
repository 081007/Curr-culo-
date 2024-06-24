import Comments from './Comments';
import style from './post.module.css';


export default  function Post() {
  return (
    
      <article className={style.post}>
        <header>
          <div className={style.author}>
            <img src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" alt="" />
          <div className={style.authorInfo}>
          <strong>Letícia Brito Venâncio</strong>
          <span>Estudante</span>
          </div>
          </div>
        </header>
        <div className={style.content}>
        <p>Sobre Você</p>
        <p>Sou muito prestativa, aprendo rápido, sou dedicada e pontual, sou esforçada e detalhista. Boa com trabalho em grupo e em disign.</p>
        <div>
       <strong>Escolaridade</strong>
        <p>Cursando o Ensino Médio</p>
        </div>  

        <p><a>Link Repositórios</a></p>
        <p><a>Ùltimo Projeto</a></p>
        </div>
        
         
        <form action="">
          <strong>Não tenho experiência, mas aprendo rápido</strong>
        </form>
      </article>
      
      
  )
}
  
      <div>
      <Comments/>
      </div>
