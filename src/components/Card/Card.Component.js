import './Card.Component.css'

const Card = (props) => {
    const {monster} = props
    const {id,name,email} = monster
    
    return(
    <div className='Card-Container'>
        <img
        alt='monster'
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2> {name} </h2>
        <p> {email} </p>
    </div>
    )
}

export default Card