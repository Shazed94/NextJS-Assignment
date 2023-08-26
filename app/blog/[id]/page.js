import getPostDetails from '@/app/api/getPostDetails'

const SinglePost = async ({ params }) => {
    const id = params.id
    const data = await getPostDetails(id)
    const singlePost = await data.postDetails
    return (
        <div>
            {singlePost?.title ?
                <div className='my-12 container mx-auto '>
                    <img src={singlePost?.img} alt="" className='w-full h-full object-cover rounded-lg ' />
                    <h1 className='my-5 text-3xl ' >{singlePost?.title}</h1>
                    <p className='mb-20 first-line:uppercase first-line:tracking-widest first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left'>{singlePost?.content}</p>

                </div>
                :
                <h1 className='h-[calc(100vh-126px)] flex justify-center items-center'>Oops!! Post Details not found</h1>}

        </div>



    )
}

export default SinglePost