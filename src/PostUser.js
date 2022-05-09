import React from 'react'
import {postn } from './Post'

export default function PostUser ({index}){
        const imageName = postn[index].userphoto
        const images = require.context('./assets/img',true);
        const [imgUrl, setImgUrl] = React.useState('');
    
            React.useEffect(() => {
                 setImgUrl(
                     images(`./${imageName}`).default);
                }, [imageName,images]);
    
      return(
          <div class="username-post">
            <img src={imgUrl} alt="User"/>
            <p>
                {postn[index].username}
            </p>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
      )    
}