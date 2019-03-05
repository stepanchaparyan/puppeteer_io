import puppeteer from 'puppeteer';
import { expect } from 'chai';
import FlowBot from '../src/pageObjects/importantActionsPO';
import LoginPage from '../src/pageObjects/loginPagePO';

let browser, page, loginPage, flowBot;
const viewport = { width: 1020, height: 1080 };
//const screenMaximized = {args: ['--start-maximized']};
//const showSlowMotion = {headless: false, slowMo: 300};

//for(var i = 1; i <= 10; i++){

describe('Important Actions', () => {
	before(async () => {
		//browser = await puppeteer.launch({headless: false, args: ['--start-maximized']});
		browser = await puppeteer.launch({ ignoreHTTPSErrors: true, headless: false });
		page = await browser.newPage();
		await page.setViewport(viewport);
		flowBot = new FlowBot(page, browser);
		loginPage = new LoginPage(page);
		await loginPage.open();
		await loginPage.logIn();
	});
	after(async () => {
		await browser.close();
	});

	context('Create Flow Bot', () => {
		it('test', async () => {
			expect(await flowBot.createBotByImportantActionDoc()).to.equal(true);
		});
	});
});

//}
