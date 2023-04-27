import { LightningElement ,api} from 'lwc';

export default class File extends LightningElement {


    @api recordId
    get acceptedFormats() {
        return ['.pdf', '.png','.csv','.png'];
    }

    handleUploadFinished(event) {
        // Get the list of uploaded files
        const uploadedFiles = event.detail.files[0];
        alert('No. of files uploaded : ' + uploadedFiles.length);

        console.log(uploadedFiles)
    }
    }