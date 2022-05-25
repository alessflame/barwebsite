import React from 'react'
import style from "./style/section.module.css"
import Text from './Text'

function Section({img, title, text, reverse}) {
  return (
    <div className={reverse=== true ? style.sectionReverse: style.section} >
     <img src={img} alt="happiness"/>
     <section className={style.sectionBox}>
          <h2 className={style.title}>
               {title}
          </h2>

          <Text text={text} width={"80%"} />

          


     </section>
         

    </div>
  )
}

export default Section


          // <span className={style.sectionTxt}>
          //   {text}
          // </span>
