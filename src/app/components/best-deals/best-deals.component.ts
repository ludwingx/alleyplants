import { Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-best-deals',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './best-deals.component.html',
  styleUrl: './best-deals.component.scss'
})
export class BestDealsComponent {

}
