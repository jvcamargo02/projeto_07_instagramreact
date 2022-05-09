import React from 'react'
import {postn } from './Post'

export default function PostLikes({index}) { 
        const imageName = postn[index].userLikePhoto
        const images = require.context('./assets/img',true);
        const [imgUrl, setImgUrl] = React.useState('');
    
            React.useEffect(() => {
                 setImgUrl(
                     images(`./${imageName}`).default);
                }, [imageName,images]);
    
      return(
          <div class="likes">
              <img class="liked-by" src={imgUrl} alt="Curtiu"/>
              <span>Curtido por </span>
              <span class="liked-name">{postn[index].userLike}</span>
              <span>e</span>
              <span class="liked-name">outras {postn[index].liked} pessoas</span>
          </div>
      )    
}

