type imgUrlType = {
    url: string,
    className: string
}

export const Icon = ({ url, className }: imgUrlType) => {
    return (
        <div className={className}>
            <div 
                className='bg-no-repeat bg-center bg-cover w-full h-full'
                style={{ backgroundImage: `url("${url}")` }}
            ></div>
        </div>
    );
}