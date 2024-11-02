import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicXmlFileUploadComponent } from './music-xml-file-upload.component';

describe('FileUploadComponent', () => {
  let component: MusicXmlFileUploadComponent;
  let fixture: ComponentFixture<MusicXmlFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicXmlFileUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicXmlFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
