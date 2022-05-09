import Image from './assets/img/catanacomics.svg'
import Username from './Username'

export default function mainSidebar (props){
    return(
        <div class="main-sidebar">
            <img src={Image } alt="User"/>
            <Username username="catanacomics" name="catana"/> 
        </div>
    )
}