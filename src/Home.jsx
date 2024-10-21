import { Link } from 'react-router-dom'

function Home() {
    return (
        <div id='Home' className='w-screen bg-blue-950 h-screen'>
            <header className='flex flex-col gap-0 py-7 bg-gray-900 border-b-4 border-yellow-400'>
                
                <div className='flex items-center mx-auto mb-5'>
                    <img 
                        src="https://i.postimg.cc/sDmKM26t/output-onlinepngtools.png" 
                        alt="logo" 
                        className='h-14 p-0'
                    />
                    <div className='flex flex-col items-start'>
                        <h1 className='text-white text-md'>Aim High Volleyball Club</h1>
                        <h2 className='text-white text-md font-bold'>Grand Rapids, MI</h2>
                    </div>
                </div>

                <nav className="flex flex-row gap-5 justify-center items-center px-7">
                    <Link 
                        className='text-md text-white bg-gray-800 py-2 px-4 rounded-lg shadow-md' 
                        to={'/'}>Home
                    </Link>

                    <Link 
                        className='text-md text-white bg-gray-800 py-2 px-4 rounded-lg shadow-md' 
                        to={'/privacy'}>Privacy
                    </Link>

                    <Link 
                        className='textl-md text-white bg-gray-800 py-2 px-4 rounded-lg shadow-md' 
                        to={'/contact'}>Contact
                    </Link>                
                </nav>
            </header>

            <main>

            </main>
        </div>
    );
};

export default Home;