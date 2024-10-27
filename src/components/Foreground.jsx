// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import Card from './Card';



function Foreground () {

  // eslint-disable-next-line no-undef
  const ref =useRef(null);
const data=[
  {
  desc:"this is todays task : back to react basics ",
  filesize:".9mb",
  close: false,
  tag:{isopen:true, tagtitle:"Download Now", tagColor:"green"},
},
{
  desc:"notes of react  basics and  react hooks ",


  filesize:".4mb",
  close: true,
  tag:{isopen:true, tagtitle:"upload", tagColor:"blue"},
},
{
  desc:"this is todays task and complelet it ",
  filesize:".2mb",
  close: true,
  tag:{isopen:false, tagtitle:"Download Now", tagColor:"green"},
},
];

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-warp p-5'>
       {data.map((item, index)=>(
        // eslint-disable-next-line react/jsx-key
        <Card data={item} reference={ref}/>
))}
   
    </div>

  );
}

export default Foreground;