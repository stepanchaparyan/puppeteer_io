import puppeteer from 'puppeteer';
import { expect } from 'chai';
import CreateBot from '../src/pageobjects/createBotPO';
import LoginPage from '../src/pageobjects/loginPagePO';

let browser, page, loginPage, createBot;
let dashboardPage = 'dashboard';
const viewport = { width: 1020, height: 1080 };
//const screenMaximized = {args: ['--start-maximized']};
//const showSlowMotion = {headless: false, slowMo: 300};

describe('Simple Flow Bot', () => {
	before(async () => {
		//browser = await puppeteer.launch({headless: false, args: ['--start-maximized']});
		browser = await puppeteer.launch({ ignoreHTTPSErrors: true, headless: false });
		page = await browser.newPage();
		await page.setViewport(viewport);
		createBot = new CreateBot(page, browser);
		loginPage = new LoginPage(page);
		await loginPage.open(dashboardPage);
		await loginPage.logIn();
	});
	after(async () => {
		await browser.close();
	});

	context.skip('test bots', () => {
		it('C282', async () => {
			expect(await createBot.createBotsAndCheckCount()).to.equal(true);
		});
	});
	context('Dashboard and Menu', () => {
		it('C284', async () => {
			expect(await createBot.getDefaultDashboardSectionTitle()).to.equal('Dashboard');
			expect(await createBot.getDefaultDashboardSectionURL()).to.equal('https://app.iox.bot/dashboard');
			expect(await createBot.checkMenuBarUIDefault()).to.equal(true);
		});
		context('C426', () => {
			it('Bots', async () => {
				expect(await createBot.getBotSectionTitle()).to.equal('Bots');
				expect(await createBot.getBotSectionURL()).to.equal('https://app.iox.bot/bots');
				expect(await createBot.checkMenuBarUIBotSelected()).to.equal(true);
			});
			it('Dashboard', async () => {
				expect(await createBot.getDashboardSectionTitle()).to.equal('Dashboard');
				expect(await createBot.getDashboardSectionURL()).to.equal('https://app.iox.bot/dashboard');
				expect(await createBot.checkMenuBarUIDashboardSelected()).to.equal(true);
			});
			it('Knowledge', async () => {
				expect(await createBot.getKnowledgeSectionTitle()).not.to.equal('Knowledge');
				expect(await createBot.getKnowledgeSectionURL()).not.to.equal('https://app.iox.bot/knowledge');
				expect(await createBot.checkMenuBarUIKnowledgeSelected()).to.equal(true);
			});
			it('API Connector', async () => {
				expect(await createBot.getApiConnectorSectionTitle()).to.equal('Api Connector');
				expect(await createBot.getApiConnectorSectionURL()).to.equal('https://app.iox.bot/connector');
				expect(await createBot.checkMenuBarUIApiConnectorSelected()).to.equal(true);
			});
			it('Help', async () => {
				expect(await createBot.getHelpSectionTitle()).to.equal('Help');
				expect(await createBot.getHelpSectionURL()).to.equal('https://app.iox.bot/help');
				expect(await createBot.checkMenuBarUIHelpSelected()).to.equal(true);
			});
		});
	});
});
