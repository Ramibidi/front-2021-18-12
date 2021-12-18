import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { DemandeComponent } from './Demande/demande.component';
import { HistoriqueComponent } from './historique/historique.component';
import { RegistreComponent } from './registre/registre.component';
import { ProfileComponent } from './profile/profile.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'profile',
				component: ProfileComponent
			},
			{
				path: 'table',
				component: TableComponent
			},
			{
				path: 'registre',
				component:RegistreComponent
			},
			{
				path: 'Demande',
				component:DemandeComponent
			},
			{
				path: 'historique',
				component: HistoriqueComponent
			},
			{
				path: 'card',
				component: CardsComponent
			},
			{
				path: 'pagination',
				component: NgbdpaginationBasicComponent
			},
			{
				path: 'badges',
				component: BadgeComponent
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent
			},
			{
				path: 'nav',
				component: NgbdnavBasicComponent
			},
			{
				path: 'buttons',
				component: ButtonsComponent
			}
		]
	}
];
