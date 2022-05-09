import React from 'react'
import {stories } from './StoriesBox'

export default function StoryIMG({index}){
    const imageName = stories[index].userphoto
    const images = require.context('./assets/img',true);
    const [imgUrl, setImgUrl] = React.useState('');

        React.useEffect(() => {
             setImgUrl(
                 images(`./${imageName}`).default);
            }, [imageName,images]);
    return(
        <div class="story-img">
           <img src={imgUrl} alt="User"/>
        </div>
    )
}