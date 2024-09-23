import './Home.scss'


const Home = () =>{
    const foo = (e) =>{
        console.log(e)
    }

    return(
        <div className='Home'>
            <p>Add Product</p>
            <p>Name of product</p>
            <input type="text" placeholder='Name'/>
            <p>Category of Product</p>
            <input type="text" placeholder='Category'/>
            <p>Price of product</p>
            <input type="text" placeholder='Price' />
            <button type='submit' onSubmit={foo}>Add</button>
        </div>
    )
}

export default Home