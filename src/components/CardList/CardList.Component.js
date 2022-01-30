import Card from '../Card/Card.Component'
import './CardList.Component.css'

const CardList = (props)  => {
    
    const {monsters} = props
   return(
       <div className='Card-List'>
            {
                monsters.map(
                    (monster,index) => (
                        <Card key={index} monster={monster} />
                    )
                )
            }
       </div>
   )
}

export default CardList