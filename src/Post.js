import PostUser from './PostUser'
import PostContent from './PostContent'
import PostBtn from './PostBTN'
import PostLikes from './PostLikes'

export const postn = [
    {
        username: "meowed",
        userphoto: "meowed.svg",
        postimg: "gato-telefone.svg",
        liked: 101.523,
        userLike: "respondeai",
        userLikePhoto: "respondeai.svg"
    },{
        username: "barked",
        userphoto: "barked.svg",
        postimg: "dog.svg",
        liked: 99.159,
        userLike: "adorable_animals",
        userLikePhoto: "adorable_animals.svg"
    }]

export default function Post() {
     return(
         postn.map((x, index)=>
         (
         <div class="post">
            <PostUser index={index }/>
            <PostContent index={index }/>
            <PostBtn />
            <PostLikes index={index }/>
        </div>)))
    }