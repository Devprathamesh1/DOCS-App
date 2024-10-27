/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDownloading } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";

function Card({data ,reference }) {
  return (

    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2}  className='relative flex-shrink w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
<FaRegFileAlt/>
         
          <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
          <div className='footer absolute bottom-0 w-full   left-0'>
              <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-6 h-6 bg-zinc-600  rounded-full flex items-center justify-center'>
                      {data.close ? <RiCloseLine/> :  <MdOutlineDownloading size="1em" color="#fff"/> }
               
                </span>
                   </div>
                   {
                    data.tag.isopen && ( <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center  justify-center`}>
                      <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
                    </div>) 
                   }
                 
          </div>
    </motion.div>


  );
}

export default Card