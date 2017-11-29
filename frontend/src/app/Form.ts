import {EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";

export abstract class AppForm {

    @Input()
    abstract model: any;

    @Output()
    abstract modelChange: EventEmitter<any>;

    @ViewChild('form')
    abstract form: NgForm;

    @Input()
    disabled: string[] = [];

    @Input()
    required: string[] = [];

    @Input()
    blacklist: string[] = [];

    isInBlacklist(field) {
        return (
            this.blacklist.indexOf(field) != -1
            || this.blacklist.indexOf('*') != -1
        );
    }

    isDisabled(field) {
        return (
            this.disabled.indexOf(field) != -1
            || this.disabled.indexOf('*') != -1
        )

    }

    isRequired(field) {
        return (
            this.required.indexOf(field) != -1
            || this.required.indexOf('*') != -1
        )
    }

    isValid() {
        return !this.form.invalid;
    }

}
