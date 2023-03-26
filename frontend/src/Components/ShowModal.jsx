import { PlusIcon } from '@heroicons/react/24/solid'

const ShowModal = ({ createApplication, setCreateApplication }) => {
    const handleClick = () => setCreateApplication(!createApplication)

    return (
        <div onClick={handleClick} className='fixed bottom-5 right-5 rounded-full bg-blue-500 hover:bg-blue-600 active:drop-shadow-none h-16 w-16 drop-shadow-md'>
            <button className='h-16 w-16'>
                <PlusIcon className='m-auto w-8 text-white' />
            </button>
        </div>
    )
}

export default ShowModal;