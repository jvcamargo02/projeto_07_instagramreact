import React from "react"

   

export default function PostBtn(){
    const [isLiked, setIsLiked] = React.useState("heart-outline")

    function like() {
		if(isLiked==="heart-outline"){
            setIsLiked("heart-sharp")
        } else {
            setIsLiked("heart-outline")
        }
	}
 
    return(
        <div class="post-btn">
            <ion-icon onClick={like} class={isLiked} name={isLiked}/>
            <ion-icon name="chatbubble-outline"/>
            <ion-icon name="paper-plane-outline"/>
            <ion-icon class="bookmark-outline" name="bookmark-outline"/>
        </div>
    )
}