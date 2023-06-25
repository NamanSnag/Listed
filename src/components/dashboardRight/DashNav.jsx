import { icons } from '../../assest';

import './style.scss';

const DashNav = () => {
  return (
    <div className='dashr__nav '>
        <p className='dashr__navhead'>Dashboard</p>

        <div className='dashr__navsearch flex'>
            <div className='dashr__search'>
            <input type='search' placeholder='Search...'/>
            <img src={icons.search} />
            </div>
            <img src={icons.bell} alt='bell' />
            <img className='dashr__navp' src='https://images.unsplash.com/photo-1687360440094-949b8fe71c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60' alt='image'/>
        </div>
    </div>
  )
}

export default DashNav