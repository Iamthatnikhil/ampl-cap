import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contact-us/contact-us.component';
import { MediaComponent } from './media/media.component';
import { NbfcComponent } from './nbfc/nbfc.component';
import { RealestateComponent } from './realestate/realestate.component';
import { InvestmentbankingComponent } from './investmentbanking/investmentbanking.component';
import { AboutusComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { AssetManagementComponent } from './asset-management/asset-management.component';
import { DraftDisclosureComponent } from './draft-disclosure/draft-disclosure.component';
import { ReportPerformanceComponent } from './report-performance/report-performance.component';
import { FinacialResultsComponent } from './finacial-results/finacial-results.component';
import { ShareholdingComponent } from './shareholding/shareholding.component';
import { BoardMeetingComponent } from './board-meeting/board-meeting.component';
import { AnnualReportComponent } from './annual-report/annual-report.component';
import { AnnualGeneralMeetingsComponent } from './annual-general-meetings/annual-general-meetings.component';
import { CorporateGovernanceReportsComponent } from './corporate-governance-reports/corporate-governance-reports.component';
import { CodeForIndependentDirectorsComponent } from './code-for-independent-directors/code-for-independent-directors.component';
import { PoliciesComponent } from './policies/policies.component';
import { NewspaperPublicationComponent } from './newspaper-publication/newspaper-publication.component';
import { OtherInformationsComponent } from './other-informations/other-informations.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommitteesComponent } from './committees/committees.component';
import { BoardDirectorsComponent } from './board-directors/board-directors.component';
import { StaturyAuditorsComponent } from './statury-auditors/statury-auditors.component';
import { AuditedFinancialsComponent } from './audited-financials/audited-financials.component';
import { RealestateAuditedComponent } from './realestate-audited/realestate-audited.component';
import { StatementDeviationComponent } from './statement-deviation/statement-deviation.component';
import { InvestorContactsComponent } from './investor-contacts/investor-contacts.component';
import { AnnualReturnsComponent } from './annual-returns/annual-returns.component';
import { CorporateAnnouncementsComponent } from './corporate-announcements/corporate-announcements.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { BankersComponent } from './bankers/bankers.component';
import { SubsidiariesFinancialsComponent } from './subsidiaries-financials/subsidiaries-financials.component';
import { ComplianceCertificateComponent } from './compliance-certificate/compliance-certificate.component';
import { PostalBallotComponent } from './postal-ballot/postal-ballot.component';
import { ShareholingAnnualMeetingsComponent } from './shareholing-annual-meetings/shareholing-annual-meetings.component';
import { OpenOfferComponent } from './open-offer/open-offer.component';
import { ProceedingsComponent } from './proceedings/proceedings.component';
import { NoticeOfPostalBallotComponent } from './notice-of-postal-ballot/notice-of-postal-ballot.component';
import { VotingResultsComponent } from './voting-results/voting-results.component';
import { DeclarationVotingComponent } from './declaration-voting/declaration-voting.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CareerComponent } from './career/career.component';
import { BrouchersComponent } from './brouchers/brouchers.component';
import { DocumentsInRespectComponent } from './documents-in-respect/documents-in-respect.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { AifsComponent } from './aifs/aifs.component';
import { MediaVideosComponent } from './media-videos/media-videos.component';
import { CredentAimMulticapStrategyComponent } from './credent-aim-multicap-strategy/credent-aim-multicap-strategy.component';
import { InvestorGrievanceComponent } from './investor-grievance/investor-grievance.component';
import { DetailsOfNodalOfficerComponent } from './details-of-nodal-officer/details-of-nodal-officer.component';
import { RelatedPartyTransactionComponent } from './related-party-transaction/related-party-transaction.component';
import { DetailsOfKmpComponent } from './details-of-kmp/details-of-kmp.component';
import { SecretarialComplianceReportComponent } from './secretarial-compliance-report/secretarial-compliance-report.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { QualifiedInstitutionalPlacementComponent } from './qualified-institutional-placement/qualified-institutional-placement.component';
import { WealthManagementComponent } from './wealth-management/wealth-management.component';
import { OtherBusinessesComponent } from './other-businesses/other-businesses.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'media', component: MediaComponent },
  { path: 'nbfc', component: NbfcComponent },
  { path: 'realestate', component: RealestateComponent },
  { path: 'investmentbanking', component: InvestmentbankingComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'team', component: TeamComponent },
  { path: 'asset-management', component: AssetManagementComponent },
  { path: 'draft-disclosure', component: DraftDisclosureComponent },
  { path: 'report-performance', component: ReportPerformanceComponent },
  { path: 'finacial-results', component: FinacialResultsComponent },
  { path: 'shareholding', component: ShareholdingComponent },
  { path: 'board-meeting', component: BoardMeetingComponent },
  { path: 'annual-report', component: AnnualReportComponent },
  { path: 'regulation-46', component: RegulationsComponent },
  {
    path: 'annual-general-meetings',
    component: AnnualGeneralMeetingsComponent,
  },
  {
    path: 'qualified-institutional-placement',
    component: QualifiedInstitutionalPlacementComponent,
  },
  {
    path: 'corporate-governance-reports',
    component: CorporateGovernanceReportsComponent,
  },
  {
    path: 'code-for-independent-directors',
    component: CodeForIndependentDirectorsComponent,
  },
  { path: 'policies', component: PoliciesComponent },
  { path: 'newspaper-publication', component: NewspaperPublicationComponent },
  { path: 'other-informations', component: OtherInformationsComponent },
  { path: 'committees', component: CommitteesComponent },
  { path: 'board-directors', component: BoardDirectorsComponent },
  { path: 'statury-auditors', component: StaturyAuditorsComponent },
  { path: 'audited-financials', component: AuditedFinancialsComponent },
  { path: 'realestate-audited', component: RealestateAuditedComponent },
  { path: 'statement-deviation', component: StatementDeviationComponent },
  { path: 'investor-contacts', component: InvestorContactsComponent },
  { path: 'annual-returns', component: AnnualReturnsComponent },
  {
    path: 'corporate-announcements',
    component: CorporateAnnouncementsComponent,
  },
  { path: 'listing-details', component: ListingDetailsComponent },
  { path: 'bankers', component: BankersComponent },
  {
    path: 'subsidiaries-financials',
    component: SubsidiariesFinancialsComponent,
  },
  { path: 'compliance-certificate', component: ComplianceCertificateComponent },
  { path: 'postal-ballot', component: PostalBallotComponent },
  {
    path: 'shareholing-annual-meetings',
    component: ShareholingAnnualMeetingsComponent,
  },
  { path: 'open-offer', component: OpenOfferComponent },
  { path: 'proceedings', component: ProceedingsComponent },
  { path: 'notice-of-postal-ballot', component: NoticeOfPostalBallotComponent },
  { path: 'voting-results', component: VotingResultsComponent },
  { path: 'declaration-voting', component: DeclarationVotingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-details/:id', component: BlogDetailsComponent },
  { path: 'career', component: CareerComponent },
  { path: 'brouchers', component: BrouchersComponent },
  { path: 'documents-in-respect', component: DocumentsInRespectComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'aifs', component: AifsComponent },
  { path: 'media-videos', component: MediaVideosComponent },
  {
    path: 'credent-aim-multicap-strategy',
    component: CredentAimMulticapStrategyComponent,
  },
  { path: 'investor-grievance', component: InvestorGrievanceComponent },
  {
    path: 'details-of-nodal-officer',
    component: DetailsOfNodalOfficerComponent,
  },
  {
    path: 'related-party-transaction',
    component: RelatedPartyTransactionComponent,
  },
  {
    path: 'details-of-kmp',
    component: DetailsOfKmpComponent,
  },
  {
    path: 'secretarial-compliance-report',
    component: SecretarialComplianceReportComponent,
  },
  {
      path: 'wealth-management',
      component: WealthManagementComponent
  },
  {
      path: 'other-businesses',
      component: OtherBusinessesComponent
  }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes)
    RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top'
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
