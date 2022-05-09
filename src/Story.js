import React from 'react'
import {stories } from './StoriesBox'
import StoryIMG from './StoryIMG'
import StoryName from './StoryName'

export default function Story({index }){
    return(
        <div class="story">
            <StoryIMG index={index }/>
            <StoryName name={stories[index].username}/>
        </div>
    )
}