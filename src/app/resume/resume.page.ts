import { Component, OnInit } from '@angular/core';
import { DocumentViewerOptions, DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {

  constructor(private document: DocumentViewer, private file: File, private transfer: FileTransfer,
    private platform: Platform, private fileOpener: FileOpener) {
    console.log("Resume Constructor")
  }

  openResumePdf() {
    let filePath = this.file.applicationDirectory +'www/assets';
    const option: DocumentViewerOptions = {
      title: 'Resume'
    };
    this.file.copyFile(`${filePath}`,'resume.pdf', this.file.dataDirectory, 'resume.pdf').then(result => {
      this.fileOpener.open(result.nativeURL,'application.pdf');
    });   
  }

  downloadResumePdf() {    
    let path = null;
    path = this.file.dataDirectory;
    const transfer = this.transfer.create();
    transfer.download('assets/file/resume.pdf', path + 'resume.pdf').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', {})
    })
  }

  ngOnInit() {
  }

}
