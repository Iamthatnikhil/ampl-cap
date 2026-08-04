import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
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

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DocumentsInRespectComponent } from './documents-in-respect/documents-in-respect.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { AifsComponent } from './aifs/aifs.component';
import { MediaVideosComponent } from './media-videos/media-videos.component';
import { CredentAimMulticapStrategyComponent } from './credent-aim-multicap-strategy/credent-aim-multicap-strategy.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { InvestorGrievanceComponent } from './investor-grievance/investor-grievance.component';
import { DetailsOfNodalOfficerComponent } from './details-of-nodal-officer/details-of-nodal-officer.component';
import { RelatedPartyTransactionComponent } from './related-party-transaction/related-party-transaction.component';
import { DetailsOfKmpComponent } from './details-of-kmp/details-of-kmp.component';
import { SecretarialComplianceReportComponent } from './secretarial-compliance-report/secretarial-compliance-report.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { QualifiedInstitutionalPlacementComponent } from './qualified-institutional-placement/qualified-institutional-placement.component';
import { WealthManagementComponent } from './wealth-management/wealth-management.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactusComponent,
    MediaComponent,
    NbfcComponent,
    RealestateComponent,
    InvestmentbankingComponent,
    AboutusComponent,
    TeamComponent,
    AssetManagementComponent,
    DraftDisclosureComponent,
    ReportPerformanceComponent,
    FinacialResultsComponent,
    ShareholdingComponent,
    BoardMeetingComponent,
    AnnualReportComponent,
    AnnualGeneralMeetingsComponent,
    CorporateGovernanceReportsComponent,
    CodeForIndependentDirectorsComponent,
    PoliciesComponent,
    NewspaperPublicationComponent,
    OtherInformationsComponent,
    CommitteesComponent,
    BoardDirectorsComponent,
    StaturyAuditorsComponent,
    AuditedFinancialsComponent,
    RealestateAuditedComponent,
    StatementDeviationComponent,
    InvestorContactsComponent,
    AnnualReturnsComponent,
    CorporateAnnouncementsComponent,
    ListingDetailsComponent,
    BankersComponent,
    SubsidiariesFinancialsComponent,
    ComplianceCertificateComponent,
    PostalBallotComponent,
    ShareholingAnnualMeetingsComponent,
    OpenOfferComponent,
    ProceedingsComponent,
    NoticeOfPostalBallotComponent,
    VotingResultsComponent,
    DeclarationVotingComponent,
    BlogComponent,
    BlogDetailsComponent,
    CareerComponent,
    BrouchersComponent,
    DocumentsInRespectComponent,
    DisclaimerComponent,
    AifsComponent,
    MediaVideosComponent,
    CredentAimMulticapStrategyComponent,
    InvestorGrievanceComponent,
    DetailsOfNodalOfficerComponent,
    RelatedPartyTransactionComponent,
    DetailsOfKmpComponent,
    SecretarialComplianceReportComponent,
    QualifiedInstitutionalPlacementComponent,
    WealthManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    CanvasJSAngularChartsModule,
    SlickCarouselModule, 
    RecaptchaModule
    
 
  ],

  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
