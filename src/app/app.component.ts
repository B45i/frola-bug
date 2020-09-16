import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  emailConfiguration: any = {
    BodyValue: `<!--Default Email Template Start--><div class=" " id="enated56463a5-e18c-4e14-b213-1edecec8f3b8"><p><span class="fr-marker" data-id="0" data-type="false" style="display: none; line-height: 0;">&#8203;</span><span class="fr-marker" data-id="0" data-type="true" style="display: none; line-height: 0;">&#8203;</span><br></p></div><!--Default Email Template End--><div style="display: none;mso-hide:all;"><span style="font-size:0pt;color:#FFFFFF;display: none;mso-hide:all;">Enate unique identifier: 26635c50-81f6-ea11-aa73-40ec99d0c059</span></div><br><!--Feedback Footer Start--><br><style>
    table.feedback {
        border-collapse: collapse;
    }

    .feedback td {
        padding: 0px;
        font-size: 75%;
        text-align: center;
    }

    .feedback a {
        text-decoration: none;
        padding-left: 7px;
        padding-right: 7px;
    }

    .feedback a img {
        border: 0 none;
    }
</style><span style="background-color: rgb(97, 189, 109);"><br></span><table class="feedback"><tbody><tr><td><span style="background-color: rgb(97, 189, 109);">Please provide feedback:<br></span></td></tr><tr></tr><tr><td style="PADDING-TOP: 10px;"><a href="http://localhost/instance//feedbackForm.html?packetGUID=26635c50-81f6-ea11-aa73-40ec99d0c059&amp;feedbackScore=1" target="_blank"><img src="/assets/images/emoticon-score-1.png" width="32" height="32" class="fr-fic fr-dii fr-draggable"></a><a href="http://localhost/instance//feedbackForm.html?packetGUID=26635c50-81f6-ea11-aa73-40ec99d0c059&amp;feedbackScore=2" target="_blank"><img src="/assets/images/emoticon-score-2.png" width="32" height="32" class="fr-fic fr-dii fr-draggable"></a><a href="http://localhost/instance//feedbackForm.html?packetGUID=26635c50-81f6-ea11-aa73-40ec99d0c059&amp;feedbackScore=3" target="_blank"><img src="/assets/images/emoticon-score-3.png" width="32" height="32" class="fr-fic fr-dii fr-draggable"></a><a href="http://localhost/instance//feedbackForm.html?packetGUID=26635c50-81f6-ea11-aa73-40ec99d0c059&amp;feedbackScore=4" target="_blank"><img src="/assets/images/emoticon-score-4.png" width="32" height="32" class="fr-fic fr-dii fr-draggable"></a><a href="http://localhost/instance//feedbackForm.html?packetGUID=26635c50-81f6-ea11-aa73-40ec99d0c059&amp;feedbackScore=5" target="_blank"><img src="/assets/images/emoticon-score-5.png" width="32" height="32" class="fr-fic fr-dii fr-draggable"></a></td></tr></tbody></table><br><br><!--Feedback Footer End-->`,
  };
  FroalaOptions: any;

  ngOnInit(): void {
    this.FroalaOptions = {
      language: 'en_gb',
      placeholderText: 'Write your email content here ...',
      charCounterCount: false,
      attribution: false,
      toolbarBottom: true,
      // initOnClick: true,
      // toolbarBottom: true
      editorClass: 'editor-custom-class',
      toolbarVisibleWithoutSelection: true,
      imageDefaultAlign: 'left',
      // toolbarInline: true
      toolbarButtons: [
        'bold',
        'italic',
        'underline',
        '|',
        'subscript',
        'superscript',
        '|',
        'fontFamily',
        'fontSize',
        '|',
        'textColor',
        'backgroundColor',
        '|',
        'align',
        'formatOL',
        'formatUL',
        '|',
        'insertLink',
        'insertImage',
        'insertTable',
        '|',
        'undo',
        'redo',
      ],
      toolbarButtonsXS: [
        'bold',
        'italic',
        'underline',
        '|',
        'fontFamily',
        'fontSize',
        '|',
        'textColor',
        'backgroundColor',
        '|',
        'align',
        'formatOL',
        'formatUL',
        '|',
        'insertLink',
        'insertImage',
        'insertTable',
        '|',
        'undo',
        'redo',
      ],
      toolbarButtonsSM: [
        'bold',
        'italic',
        'underline',
        '|',
        'fontFamily',
        'fontSize',
        '|',
        'textColor',
        'backgroundColor',
        '|',
        'align',
        'formatOL',
        'formatUL',
        '|',
        'insertLink',
        'insertImage',
        'insertTable',
        '|',
        'undo',
        'redo',
      ],
      toolbarButtonsMD: [
        'bold',
        'italic',
        'underline',
        '|',
        'fontFamily',
        'fontSize',
        '|',
        'textColor',
        'backgroundColor',
        '|',
        'align',
        'formatOL',
        'formatUL',
        '|',
        'insertLink',
        'insertImage',
        'insertTable',
        '|',
        'undo',
        'redo',
      ],
      heightMin: 200,
      heightMax: 300,
      key: '',
      imageUploadURL: '',
      wordPasteModal: false,
      spellcheck: true,
      imagePaste: true,
      imagePasteProcess: true,
      imageInsertButtons: [
        'imageBack',
        '|',
        'imageUpload',
        'imageByURL',
        'imageManager',
      ],
      wordPasteKeepFormatting: true,
      tableInsertHelper: false,
      imageDefaultWidth: '100%',
      enter: FroalaEditor.ENTER_BR,
      htmlAllowedTags: (() => {
        return [
          'a',
          'abbr',
          'address',
          'area',
          'article',
          'aside',
          'audio',
          'b',
          'base',
          'bdi',
          'bdo',
          'blockquote',
          'br',
          'button',
          'canvas',
          'caption',
          'cite',
          'code',
          'col',
          'colgroup',
          'datalist',
          'dd',
          'del',
          'details',
          'dfn',
          'dialog',
          'div',
          'dl',
          'dt',
          'em',
          'embed',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'font',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'header',
          'hgroup',
          'hr',
          'i',
          'iframe',
          'img',
          'input',
          'ins',
          'kbd',
          'keygen',
          'label',
          'legend',
          'li',
          'link',
          'main',
          'map',
          'mark',
          'menu',
          'menuitem',
          'meter',
          'nav',
          'object',
          'ol',
          'optgroup',
          'option',
          'output',
          'p',
          'param',
          'pre',
          'progress',
          'queue',
          'rp',
          'rt',
          'ruby',
          's',
          'samp',
          'style',
          'section',
          'select',
          'small',
          'source',
          'span',
          'strike',
          'strong',
          'sub',
          'summary',
          'sup',
          'table',
          'tbody',
          'td',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'time',
          'title',
          'tr',
          'track',
          'u',
          'ul',
          'var',
          'video',
          'wbr',
        ];
      })(),
      htmlExecuteScripts: false,
      htmlRemoveTags: ['script'],
      htmlDoNotWrapTags: ['script'],
      iframeDefaultStyle:
        ' body { overflow-y: hidden !important;min-height:200px;font-size:10pt; font-family: Arial, Helvetica, sans-serif; line-height: 1.42857143; color: #333; } ',
      // pasteAllowLocalImages: true,
      // autofocus: true,
      iframe: true,
      dragInline: false,
      events: {
        dragover: (e) => {
          // this.DragEvent.emit({
          //   event: e.originalEvent,
          //   types:
          //     e.originalEvent.dataTransfer &&
          //     e.originalEvent.dataTransfer.types,
          // });
          e.preventDefault();
        }, // Edge blocks files drop on froala. To prevent that, dragover has to be prevented. Tested in all browsers.
        blur: () => {
          // this.Editor.selection.save();
        },
        click: (e) => {
          // please do not remove/comment following line its workaround for line change bug
          // BUG ID:25446
          // this.Editor.markers.remove();
        },
        initialized: () => {
          setTimeout(() => {
            // this.SetEditorHeight();
            // this.toggleToolbar(false);
            // this.Editor.$iframe.css('padding', '0');
          }, 90);
        },
        keypress: () => {
          // if (this.toolbarVisible) {
          //   this.toggleToolbar(false);
          // }
        },
        // 'table.inserted': debounce(() => {
        //   // this.AddTableStyle();
        // }, 100),
        contentChanged: () => {
          // this.Editor.size.syncIframe();
        },
      },
    };
  }
}
