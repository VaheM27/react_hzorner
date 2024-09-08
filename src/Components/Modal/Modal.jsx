import { useEffect } from 'react'
import './Modal.scss'


const Modal = ({handleDelete, deleteUser}) => {

    useEffect(()=>{

        const handleClick = (e) =>{
            if(e.target.className === 'Modal'){
                handleDelete()
            }
        }

        window.addEventListener('click', handleClick)

        return () => window.removeEventListener('click', handleClick)

    },[])


    return (
        <div className='Modal'>
            <div className="ModalContent">
                <p>Hastat uzum es jnjes es mardun?</p>
                <div className="btn">
                    <button onClick={deleteUser}>de vor sxmel em uzum em</button>
                    <button onClick={handleDelete}>cheeee miamit em sxme</button>
                </div>
            </div>
        </div>
    )
}
export default Modal