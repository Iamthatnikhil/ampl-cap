import { Component } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-qualified-institutional-placement',
  templateUrl: './qualified-institutional-placement.component.html',
  styleUrls: ['./qualified-institutional-placement.component.css']
})
export class QualifiedInstitutionalPlacementComponent {

  selectedPdfUrl: string = '';

  // CARD CLICKED
  confirmDownload(event: any, pdfPath: string) {

    event.preventDefault();

    this.selectedPdfUrl = pdfPath;

    $('#ppdConfirmModal').modal('show');

  }

  // I CONFIRM CLICKED
  proceedDownload() {

  $('#ppdConfirmModal').modal('hide');

  window.open(this.selectedPdfUrl, '_blank');

    }

  // I DO NOT CONFIRM CLICKED
  closeModal() {

  $('#ppdConfirmModal').modal('hide');

  }

}
