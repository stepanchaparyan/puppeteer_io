import * as path from 'path';
import ScreenshotTester from 'puppeteer-screenshot-tester';
import {DASHBOARD} from '../helpers/constants/dashboardConstants.js';


export default class Utils {

    constructor(page) {
        this.page = page;
    }

    async compareScreenshots(component) {
        await this.page.waitFor(1000);
        const tester = await ScreenshotTester(0, [], {
        });
        const result = await tester(this.page, component, {
            path: path.join(`${DASHBOARD.SCREENSHOTS}`,`${component}`),
            fullPage: true
        });
        return await result;
    }







}