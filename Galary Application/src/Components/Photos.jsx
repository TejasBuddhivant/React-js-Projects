
const Photos = ({props},key) => {
    // console.log(props.url);

  return (
    <div  >
            <div className=" flex flex-wrap justify-center"> {
                
                <div className='h-full w-100 shadow-lg border border-gray-100 m-1 aspect-square overflow-hidden rounded-lg'  key={key}>
                        <a href={props.url} target="_blank" rel="noopener noreferrer">
                        <img src={props.download_url} alt={props.author} className='h-full w-full object-cover'/>
                    </a>
                    </div>
            }
            </div>
    </div>
  )
}

export default Photos