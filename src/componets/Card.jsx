import styles from './Card.module.css'
const Card = ({src,title,price}) => {
  return (
    <div className={styles.container}>
      <img src={src} alt={title} width={433}/>
 
      <p>{title}</p>
      <p>{price}$</p>
    </div>
    )
}

export default Card