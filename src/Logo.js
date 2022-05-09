import Image from './assets/img/logo.png'


export default function Logo (){

    return(
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <img class="desktop-logo" src={Image } alt="Logo"/>
        </div>
    )
}