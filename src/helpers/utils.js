import * as path from 'path';
import ScreenshotTester from 'puppeteer-screenshot-tester';

export default class Utils {
    constructor(page) {
        this.page = page;
    }

    async compareScreenshots(screenshotPath, name, component = this.page) {
        const src = 'src';
        const helpers = 'helpers';
        const screenshots = 'screenshots';
        await this.page.waitFor(1000);
        const tester = await ScreenshotTester(0,3, [], {});
        const result = await tester(component, name, {
            path: path.join(`${src}`,`${helpers}`,`${screenshots}`,`${screenshotPath}`,`${name}`),
            fullPage: true
        });
        return await result;
    }

    async compareScreenshotsWithClip(screenshotPath, name, options) {
        const src = 'src';
        const helpers = 'helpers';
        const screenshots = 'screenshots';
        await this.page.waitFor(1000);
        const tester = await ScreenshotTester(0,3, [], {});
        const result = await tester(this.page, name, {
            path: path.join(`${src}`,`${helpers}`,`${screenshots}`,`${screenshotPath}`,`${name}`),
            fullPage: false,
            clip: options
        });
        return await result;
    }
}