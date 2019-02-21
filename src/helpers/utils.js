import * as path from 'path';
import ScreenshotTester from 'puppeteer-screenshot-tester';
import {DASHBOARD} from '../helpers/constants/dashboardConstants.js';


export default class Utils {

    constructor(page) {
        this.page = page;
    }

    async compareScreenshots(name = 'testName', component = this.page) {
        await this.page.waitFor(1000);
        const tester = await ScreenshotTester(0, [], {});
        const result = await tester(component, name, {
            path: path.join(`${DASHBOARD.SCREENSHOTS}`,`${name}`),
            fullPage: false
        });
        return await result;
    }

    async compareScreenshotsWithClip(name = 'testName', options) {
        await this.page.waitFor(1000);
        const tester = await ScreenshotTester(0, [], {});
        const result = await tester(this.page, name, {
            path: path.join(`${DASHBOARD.SCREENSHOTS}`,`${name}`),
            fullPage: false,
            clip: options
        });
        return await result;
    }







}