const icons = [ 
"paper-plane-outline",
"compass-outline",
"heart-outline",
"person-outline"
];


export default function RightNav(){
    return(
        <div class="right-nav">
            {icons.map((iconsName) => (
            <ion-icon 
                name={iconsName}
            />
            ))}
        </div>
    )
}