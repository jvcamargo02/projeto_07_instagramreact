import MainSidebar from './MainSidebar'
import SidebarSuggest from './SidebarSuggest'

export const suggest = [
    {
        username: "bad.vibes.memes",
        userphoto: "bad.vibes.memes.svg"
    }
]

export default function Sidebar(){
    return(
        <div class="sidebar">
            <MainSidebar userphoto="./assets/img/catanacomics.svg"/>
            <span class="suggest">Sugestões para você</span>
            <span class="see-all">Ver tudo</span>
            {suggest.map((x, index)=>
         (
            <SidebarSuggest index={index } />
        ))}
        </div>
    )
}