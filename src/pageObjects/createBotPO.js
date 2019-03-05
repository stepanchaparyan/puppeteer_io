import { NAVBAR } from '../helpers/constants/navbarConstants.js';
import { BOT_SECTION } from '../helpers/constants/botsSectionConstants.js';
import { DASHBOARD } from '../helpers/constants/dashboardConstants.js';
import Utils from '../helpers/utils';

export default class CreateBot {
	constructor (page, browser) {
		this.page = page;
		this.browser = browser;
		this.utils = new Utils(page);
	}

	async createBotsAndCheckCount () {
		await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
		await this.page.waitFor(500);
		let botsCountText = await this.page.$eval(DASHBOARD.SELECTORS.BOTS_COUNT_TEXT, (text) => text.innerText);
		const botsCountBefore = botsCountText.substr(0, 2);
		for (let i = 0; i < 5; i++) {
			await this.utils.createBot('testBotForC282');
		}
		await this.page.waitFor(500);
		await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
		await this.page.waitFor(500);
		botsCountText = await this.page.$eval(DASHBOARD.SELECTORS.BOTS_COUNT_TEXT, (text) => text.innerText);
		const botsCountAfter = botsCountText.substr(0, 2);
		const botsCountIsRight = Number(botsCountBefore) + 5 === Number(botsCountAfter) ? true : false;
		return await botsCountIsRight;
	}

	async getDefaultDashboardSectionTitle () {
		return await this.page.title();
	}
	async getDefaultDashboardSectionURL () {
        await this.utils.reload();
		return await this.page.url();
	}
	async checkMenuBarUIDefault () {
		const menuBarDiv = await this.page.$(NAVBAR.SELECTORS.MENUBAR);
		await this.utils.compareScreenshots('dashboard', 'menuBarDefault', menuBarDiv);
		return await true;
	}
	async getBotSectionTitle () {
		await this.page.click(NAVBAR.SELECTORS.BOTS);
		return await this.page.title();
	}
	async getBotSectionURL () {
		await this.page.click(NAVBAR.SELECTORS.BOTS);
		await this.utils.reload();
		return await this.page.url();
	}
	async checkMenuBarUIBotSelected () {
		await this.page.click(NAVBAR.SELECTORS.BOTS);
		const menuBarDiv = await this.page.$(NAVBAR.SELECTORS.MENUBAR);
		await this.utils.compareScreenshots('dashboard', 'menuBarBots', menuBarDiv);
		return await true;
	}
	async getDashboardSectionTitle () {
		await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
		return await this.page.title();
	}
	async getDashboardSectionURL () {
		await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
		await this.utils.reload();
		return await this.page.url();
	}
	async checkMenuBarUIDashboardSelected () {
		await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
		const menuBarDiv = await this.page.$(NAVBAR.SELECTORS.MENUBAR);
		await this.utils.compareScreenshots('dashboard', 'menuBarDashboard', menuBarDiv);
		return await true;
	}

	async getKnowledgeSectionTitle () {
		await this.page.click(NAVBAR.SELECTORS.KNOWLEDGE);
		return await this.page.title();
	}
	async getKnowledgeSectionURL () {
		await this.page.click(NAVBAR.SELECTORS.KNOWLEDGE);
		await this.utils.reload();
		return await this.page.url();
	}
	async checkMenuBarUIKnowledgeSelected () {
		await this.page.click(NAVBAR.SELECTORS.KNOWLEDGE);
		const menuBarDiv = await this.page.$(NAVBAR.SELECTORS.MENUBAR);
		await this.utils.compareScreenshots('dashboard', 'menuBarKnowledge', menuBarDiv);
		return await true;
	}

	async getApiConnectorSectionTitle () {
		await this.page.click(NAVBAR.SELECTORS.API_CONNECTOR);
		return await this.page.title();
	}
	async getApiConnectorSectionURL () {
		await this.page.click(NAVBAR.SELECTORS.API_CONNECTOR);
		await this.utils.reload();
		return await this.page.url();
	}
	async checkMenuBarUIApiConnectorSelected () {
		await this.page.click(NAVBAR.SELECTORS.API_CONNECTOR);
		const menuBarDiv = await this.page.$(NAVBAR.SELECTORS.MENUBAR);
		await this.utils.compareScreenshots('dashboard', 'menuBarApiConnector', menuBarDiv);
		return await true;
	}

	async getHelpSectionTitle () {
		await this.page.click(NAVBAR.SELECTORS.HELP);
		return await this.page.title();
	}
	async getHelpSectionURL () {
		await this.page.click(NAVBAR.SELECTORS.HELP);
		await this.utils.reload();
		return await this.page.url();
	}
	async checkMenuBarUIHelpSelected () {
		await this.page.click(NAVBAR.SELECTORS.HELP);
		const menuBarDiv = await this.page.$(NAVBAR.SELECTORS.MENUBAR);
		await this.utils.compareScreenshots('dashboard', 'menuBarHelp', menuBarDiv);
		return await true;
	}

	async createBot69 () {
		for (let i = 0; i < 3; i++) {
			//* Create Bot
			await this.page.click(NAVBAR.SELECTORS.BOTS);
			await this.utils.clickOnCreateBotButton();
			await this.page.waitFor(800);
			await this.page.click(BOT_SECTION.SELECTORS.CREATE_FLOW_BOT);
			await this.page.click(BOT_SECTION.SELECTORS.CREATE_BOT_CONTINUE);
			await this.page.click(BOT_SECTION.SELECTORS.CREATE_WEB_CHAT_BOT);
			await this.page.waitFor(500);
			await this.page.type(BOT_SECTION.SELECTORS.BOT_NAME_INPUT, 'C69');
			await this.page.click(BOT_SECTION.SELECTORS.CREATE_BOT_BUTTON_AFTER_TYPE_NAME);
			//* Location
			await this.page.waitFor(1000);
			await this.page.click(BOT_SECTION.SELECTORS.ADD_SUB_DIALOG);
			await this.page.type(BOT_SECTION.SELECTORS.ENTER_QUESTION_INPUT, 'Where are you from?');
			await this.page.click(BOT_SECTION.SELECTORS.ADD_ON);
			await this.page.waitFor(500);
			await this.page.select(BOT_SECTION.SELECTORS.CHOOSE_QUESTION_TYPE, 'Location picker');
			await this.page.click(BOT_SECTION.SELECTORS.QUESTION_SAVE_BUTTON);
			await this.page.waitFor(1000);
        }
        //const botsCount = await this.page.$$eval(BOT_SECTION.SELECTORS.ALL_BOTS, bots => bots.length);

		return await true;
	}

	async deleteBot (botName, count = 1) {
		for (let i = 0; i < count; i++) {
			await this.utils.deleteBot(botName);
        }
		return await true;
	}

}
