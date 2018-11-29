import { Component } from '@angular/core';
import * as OfficeHelpers from '@microsoft/office-js-helpers';

const template = require('./app.component.html');

@Component({
    selector: 'app-home',
    template: ''
})
export default class AppComponent {
    welcomeMessage = 'Welcome';

    async setColor() {
        try {
            await Excel.run(async context => {
                const range = context.workbook.getSelectedRange();
                range.load('address');
                range.format.fill.color = 'green';
                await context.sync();
                console.log(`The range address was ${range.address}.`);
            });
        } catch (error) {
            OfficeHelpers.UI.notify(error);
            OfficeHelpers.Utilities.log(error);
        }
    }

}