import React from "react"
import {postn } from './Post'

export default function PostContent({index}){
        const imageName = postn[index].postimg
        const images = require.context('./assets/img',true);
        const [imgUrl, setImgUrl] = React.useState('');
    
            React.useEffect(() => {
                 setImgUrl(
                     images(`./${imageName}`).default);
                }, [imageName,images]);
    
      return(
          <div>
              <img src={imgUrl} alt="Post"/>
          </div>
      )    
    }

