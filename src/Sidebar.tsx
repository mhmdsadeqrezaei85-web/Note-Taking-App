import { Fragment } from 'react/jsx-runtime';
import './App.css'
import { AllNetesIcon, PinedIcon, SettingIcon, TrashIcon } from './icons';

function Sidebar() {
    return (
        <Fragment>
            <div className='h-1/2 flex  flex-col'>
                <div className='flex items-center w-full  text-3xl justify-center text-center my-8'>notes</div>
                <div className='flex items-center justify-center mt-4'>

                    <div className='flex flex-col cursor-default select-none gap-6 w-full'>
                        <div className='flex w-full h-12 items-center'>
                            <div className='flex items-center pl-4'>
                                <AllNetesIcon />
                            </div>
                        </div>
                        <div className='flex w-full h-12 items-center'>
                            <div className='flex items-center pl-4'>
                                <PinedIcon />
                            </div>    
                        </div>
                        <div className='flex w-full h-12 items-center'>
                            <div className='flex items-center pl-4'>
                                <TrashIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-300 mx-8'></div>
            <div className='h-1/2 flex items-end'>
                <div className='flex w-72 h-12 justify-center items-center'><SettingIcon /></div>
            </div>
        </Fragment>
    )
}
export default Sidebar