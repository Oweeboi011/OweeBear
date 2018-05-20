import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'laspagan-writeups',
    templateUrl: 'laspagan-writeups.component.html'
})

export class LaspagaWriteups {
    title = 'app';
    name: string = 'app';
    bike: string = 'app';

    firstDividerTitle: string = 'laspagan kwatro: ';
    firstDividerSubTitle: string = 'puray offroad spin';
    firstDividerContent: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    firstDividerThumbnail: string= '/assets/images/LASPAGAN_4THUMN.jpg';
    firstDividerlink: string = '/home';
    
    //second divider
    secondDividerTitle: string = 'laspagan tres: ';
    secondtDividerSubTitle: string = 'revpal climb.';
    secondDividerContent: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    secondDividerThumbnail: string = '/assets/images/LASPAGAN_3THUMN.jpg';
    secondDividerlink: string = '/home';

}