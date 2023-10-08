'use client'

import Image from "next/image";
import person from '@/public/person-svgrepo-com (1).svg'
import business from '@/public/company-svgrepo-com.svg'
import {useState} from "react";

const PersonBusinessSwitch = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <button onClick={() => setToggle(!toggle)} aria-label={'Button to determine shopping for business related queries or personal. Default is set to personal, click to change.'} >
            {
                toggle ?
                    <Image src={person} alt={'personal'}/> :
                    <Image src={business} alt={'business'}/>
            }
        </button>
    )
}

export default PersonBusinessSwitch