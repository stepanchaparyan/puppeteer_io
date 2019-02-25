import * as path from 'path';
import ScreenshotTester from 'puppeteer-screenshot-tester';
import { BOT_SECTION } from '../helpers/constants/botsSectionConstants.js';
import { NAVBAR } from '../helpers/constants/navbarConstants.js';

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

    async getCorrespondingBotNumber (botName) {
		let i;
        const botsCount = await this.page.$$eval(BOT_SECTION.SELECTORS.ALL_BOTS, bots => bots.length);
        console.log('count: ', botsCount);
		for (i = 1; i < botsCount - 1; i++) {
			if ((await this.page.$(`body > app-root > div > iox-page-container > div > iox-bots > div > div:nth-child(${i}) > iox-bot-item > div > div.bot-content > div.bot-name`)) !== null) {
				let row = `body > app-root > div > iox-page-container > div > iox-bots > div > div:nth-child(${i}) > iox-bot-item > div > div.bot-content > div.bot-name`;
				let anyNextLocation = await this.page.$eval(row, (element) => element.innerText);
				if (anyNextLocation === botName) {
					break;
				}
			} else {
				i = 0;
				break;
			}
		}
		return await i;
    }

    async deleteBot (botName) {
        await this.page.waitFor(500);
		await this.page.click(NAVBAR.SELECTORS.BOTS);
        const botNumber = await this.getCorrespondingBotNumber(botName);
        console.log('number: ', botNumber);
		await this.page.waitFor(500);
		await this.page.click(`body > app-root > div > iox-page-container > div > iox-bots > div > div:nth-child(${botNumber}) > iox-bot-item > div > div.bot-content > div.action-buttons.btn-group > button:nth-child(3) > i`);
        await this.page.click(BOT_SECTION.SELECTORS.YES_BUTTON_ON_DELETE);
		return await true;
	}
    
}