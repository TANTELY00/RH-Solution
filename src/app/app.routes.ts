import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyseIaComponent } from './analyse-ia/analyse-ia.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { ComparaisonComponent } from './comparaison/comparaison.component';
import { EntretiensComponent } from './entretiens/entretiens.component';
import { HistoriqueRapportComponent } from './historique-rapport/historique-rapport.component';


export const routes: Routes = [
    { path: "dashboard", component: DashboardComponent },
    { path: 'analyse', component: AnalyseIaComponent },
    { path: 'candidature', component: CandidatureComponent },
    { path: 'comparaison', component: ComparaisonComponent },
    { path: 'entretien', component: EntretiensComponent },  // Correction ici
    { path: 'historique', component: HistoriqueRapportComponent },
    {path:'' , redirectTo:'/dashboard', pathMatch:'full'}
];

