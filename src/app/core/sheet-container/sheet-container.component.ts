import {Component, OnInit} from '@angular/core';
import {OpenSheetMusicDisplay} from "opensheetmusicdisplay";
import {MusicXmlFileUploadComponent} from "../file-upload/music-xml-file-upload.component";

@Component({
  selector: 'app-sheet-container',
  standalone: true,
  imports: [
    MusicXmlFileUploadComponent
  ],
  templateUrl: './sheet-container.component.html',
  styleUrl: './sheet-container.component.scss'
})
export class SheetContainerComponent implements OnInit {
  private osmd!: OpenSheetMusicDisplay;

  constructor() {
  }

  ngOnInit(): void {
    this.osmd = new OpenSheetMusicDisplay("sheet-music-container");
  }

  handleFileUploaded(xml: string) {
    this.osmd.load(xml)
      .then(
        () => this.osmd.render(),
        err => console.log(err)
      );
  }
}
