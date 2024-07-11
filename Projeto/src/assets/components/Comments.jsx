import style from './comments.module.css';

export default function Comments() {
  return (
    <div className={style.comments}>
      <div>
        <div className={style.commentsContent}>
            <header>
                  
                <div>
                    <strong>Cursos </strong>
                </div>
            </header>
            <p>Cursando informática, cursando programação: Front End, curso completo (com certificado) de epilação(cera com fita e sem fita ).</p>
        </div>

        <div className={style.Content2}>
            <header>
                <div>
                    <strong>Qualidades</strong>
                </div>
            </header>
            <p>Aprendo rápido, pontual, esforçada, boa em disign e trabalho em equipe, paciente e detalhista, boa nas relações interpessoais .</p>
        </div>

        <div className={style.Content3}>
            <header>
                <div>
                    <strong>Buscando</strong>
                </div>
            </header>
            <p>Busco um trabalho que me permita trabalhar de casa, por conta da minha escola e cursos.</p>
        </div>
      </div>
    </div>
  )
}


