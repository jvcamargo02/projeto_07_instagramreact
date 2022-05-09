import Story from "./Story";

export const stories = [
    {
        username: "9gag",
        userphoto: "9gag.svg"
    },{
        username: "meowed",
        userphoto: "meowed.svg"
    },{
        username: "barked",
        userphoto: "barked.svg"
    },{
        username: "nathanwpyle...",
        userphoto: "nathanwpylestrangeplanet.svg"
    },{
        username: "wawawicomics",
        userphoto: "wawawicomics.svg"
    },{
        username: "respondeai",
        userphoto: "respondeai.svg"
    },{
        username: "filomoderna",
        userphoto: "filomoderna.svg"
    },{
        username: "memeriagourmet",
        userphoto: "memeriagourmet.svg"
    }
]

export default function StoriesBox () {
    return(
        <div class="stories-box">
            {stories.map((stories, index) => (
                <Story index={index}/>
            ))}
            <ion-icon name="chevron-forward-circle-sharp" />
        </div>
    )
}