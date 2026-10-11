import './App.css'
import SearchBar from './searchbar';
import Sidebar from './Sidebar';

function App() {
    return (
        <div className='flex h-screen'>
            <div className='w-1/6 bg-gray-200'>
                <Sidebar />
            </div>
            <div className='w-5/6'>
                <div className='flex flex-col gap-10 px-8'>
                    <SearchBar />
                </div>
                    <div className='border-t border-gray-300 mx-8 mt-8  '></div>
            </div>
        </div>
    )
}

export default App