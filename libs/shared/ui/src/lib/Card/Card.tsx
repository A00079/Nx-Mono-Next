import Link from 'next/link';

const Card = ({cardData}: any) => {
    
    const getInitials = (name: any) => {
        return name
          .split(' ') 
          .map((word:any) => word[0].toUpperCase()) 
          .join('');
      }
    
  return (
    <div>
        <section className="text-gray-600 body-font">
            <div className="px-5 py-24 mx-auto">
                <div className="flex flex-col container">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-indigo-500"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 px-20">
                    {
                        !!cardData && cardData.map((el: any, index: number)=>(
                            <div key={index} className="p-4 md:w-1/5 sm:mb-0 mb-6">
                                <div className="rounded-lg bg-gray-200 w-20">
                                    <div className="text-center py-5 font-bold text-gray-500">{getInitials(el.name)}</div>
                                </div>
                                <h2 className="text-lg font-medium title-font text-gray-700 mt-5">{el.name}</h2>
                                <p className="text-sm mt-2 text-gray-600">{el.email}</p>
                                <Link href={'/users/'+el.id.toString()} className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer">
                                    Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        ))
                    }
                </div>                          
            </div>
        </section>
    </div>
  )
}

export default Card;
