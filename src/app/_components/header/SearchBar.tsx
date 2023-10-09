import search from '@/public/search-svgrepo-com.svg'
import Image from "next/image";
const SearchBar = () => {
    return (
        <div className={'dark:bg-[#1C1C1E] flex border-2 dark:border-r-[#D10000] dark:border-l-[#D10000] rounded-2xl p-1 pl-4 dark:border-[#38383c] w-full'} >
            <Image src={search} width={25} height={25} alt={'search bar logo'}/>
            <input
                className={'dark:bg-[#1C1C1E] rounded-xl w-full h-full'}
                placeholder={'Search bar'}
                type={'text'}
            />
        </div>

    )
}

export default SearchBar