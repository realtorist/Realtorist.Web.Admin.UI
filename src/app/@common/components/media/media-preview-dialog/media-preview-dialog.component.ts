import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
import { MediaFile } from '../../../../@core/models/media/mediaFile';
import { ConfirmDeleteDialogComponent } from '../../confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'ngx-media-preview-dialog',
  templateUrl: 'media-preview-dialog.component.html',
  styleUrls: ['media-preview-dialog.component.scss'],
})
export class MediaPreviewDialogComponent {
  @ViewChild('url') urlInput: ElementRef;

  @Input() media: MediaFile;
  @Input() canDelete?: boolean = false;
  constructor(
    protected ref: NbDialogRef<MediaPreviewDialogComponent>,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService) {}

  cancel() {
    this.ref.close(false);
  }

  delete() {this.dialogService
    .open(ConfirmDeleteDialogComponent, {
      context: {
        text: `media file '${this.media.name}'`,
      },
    })
    .onClose.subscribe((result) => {
      if (result) {
        this.ref.close(true);
      }
    });
  }

  copyUrl(): void {
    this.urlInput.nativeElement.select();
    this.urlInput.nativeElement.setSelectionRange(0, 99999);

    document.execCommand("copy");
    this.urlInput.nativeElement.setSelectionRange(0,0);
    this.toastrService.success('URL was copied to the clipboard.', 'Copied!');
  }
}
