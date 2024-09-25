import Sliders from '../../Components/Slider/Sliders'
import './Home.scss'


const Home = () =>{
    const foo = (e) =>{
        console.log(e)
    }
    const images = [
        {
            src:'https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg'
        },
        {
            src:'https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s'
        },
        {
            src:'https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80'
        },
        
    ]

    return(
        <>
        <Sliders images = {images}/>
        <div className='Home'>
            <p>Add Product</p>
            <p>Name of product</p>
            <input type="text" placeholder='Name'/>
            <p>Category of Product</p>
            <input type="text" placeholder='Category'/>
            <p>Price of product</p>
            <input type="text" placeholder='Price' />
            <button type='submit' onSubmit={foo}>Add</button>
        </div></>
    )
}

export default Home