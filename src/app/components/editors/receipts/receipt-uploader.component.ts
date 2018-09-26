import { Component, OnInit, Input } from '@angular/core';
import {
    FormGroup,
    FormBuilder
} from '@angular/forms';
import { Store } from '@ngrx/store';

import { Expense } from '../../../models';
import { UploadReceiptsAction } from '../../../root-store/expenses-store/actions';
import { RootStoreState } from '../../../root-store';

import {
    HttpClient,
    HttpHeaders,
    HttpRequest,
    HttpEvent
} from '@angular/common/http';

@Component({
    selector: 'app-receipt-uploader',
    templateUrl: './receipt-uploader.component.html',
    styleUrls: ['./receipt-uploader.component.scss']
})
export class ReceiptUploaderComponent implements OnInit {
    @Input() expense: Expense;
    uploadForm: FormGroup;
    isAwaitingFileSeclection = true;
    file: any;

    constructor(private store$: Store<RootStoreState.State>, private formBuilder: FormBuilder) { }

    onFileChange(event) {
        this.file = event.target.files[0];
        if (event.target.files.length > 0) {
            this.isAwaitingFileSeclection = false;
        }
    }

    uploadReceipt() {
        this.store$.dispatch(new UploadReceiptsAction({ id: this.expense.id, receipts: this.file }));
        this.isAwaitingFileSeclection = true;
    }

    ngOnInit() {
        this.uploadForm = this.formBuilder.group({});
    }

}
