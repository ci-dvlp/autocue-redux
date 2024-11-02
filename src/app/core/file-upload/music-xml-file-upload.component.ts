import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-musicxml-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './music-xml-file-upload.component.html',
  styleUrl: './music-xml-file-upload.component.scss'
})
export class MusicXmlFileUploadComponent {

  @Output() public fileUploaded: EventEmitter<string> = new EventEmitter<string>();

  handleFileUpload($event: Event) {
    if(!$event.target) {
      return;
    }

    let eventTarget: any = $event.target;

    if (!eventTarget.files[0]) {
      return;
    }

    let fileReader = new FileReader();

    fileReader.onload = () => {
      this.fileUploaded.emit(fileReader.result as string);
    }

    fileReader.readAsText(eventTarget.files[0]);
  }
}
