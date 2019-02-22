import {DASHBOARD} from '../helpers/constants/dashboardConstants.js';
import {NAVBAR} from '../helpers/constants/navbarConstants.js';
import {BOT_SECTION} from '../helpers/constants/botsSectionConstants.js';
import Utils from '../helpers/utils';


export default class Dashboard {
    constructor(page, browser) {
        this.page = page;
        this.browser = browser;
        this.utils = new Utils(page);
    }

    async test() {
        await this.page.click(NAVBAR.SELECTORS.BOTS);
        await this.page.click(BOT_SECTION.SELECTORS.CREATE_BOT);


        await this.utils.compareScreenshots('bot');
        return await true;
    }
    async BOTS_COUNT() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        await this.page.waitFor(1000);
        const botsCountText = await this.page.$eval(DASHBOARD.SELECTORS.BOTS_COUNT_TEXT, text => text.innerText);
        const botsCount = botsCountText.substr(0,2);
        await this.page.click(NAVBAR.SELECTORS.BOTS);
        const botsCountsReal = await this.page.$$eval(BOT_SECTION.SELECTORS.ALL_BOTS, bots => bots.length);
        const botsCountIsRight = Number(botsCountsReal) - 1 === Number(botsCount) ? true : false;
        return await botsCountIsRight;
    }

    async PLATFORM_STATUS_DIV_UI() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        const platformStatusDiv = await this.page.$(DASHBOARD.SELECTORS.PLATFORM_STATUS_DIV);
        const noDiff = this.utils.compareScreenshots('platformStatus', platformStatusDiv);
        return await noDiff;
    }
    async PLATFORMS_LIST() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        const platforms = await this.page.evaluate(() => {
            const platform = Array.from(document.querySelectorAll('body > app-root > div > iox-page-container > div > iox-dashboard > div > div.col-lg-7.col-md-7.col-sm-12.col-xs-12.dashboard-column-left > div.col-lg-12.col-md-12.col-sm-12.col-xs-12 > div > div.platform-status-fields.dashboard-item-cornered > div'));
            return platform.map(card => card.innerText);
        });
        return await platforms;
    }
    async TROUBLES_TEXT() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        return await this.page.$eval(DASHBOARD.SELECTORS.HAVING_TROUBLES, text => text.innerText);
    }
    async CONTACT_US_LINK() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        await this.page.click(DASHBOARD.SELECTORS.CONTACT_US);
        await this.page.waitFor(1000);
        const url = this.page.url();
        await this.page.goBack();
        return await url;
    }

    async chatBotUI() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        await this.page.waitFor(2000); // wait for iframe loading
        const frame = this.page.frames().find(frame => frame.url() === 'https://app.iox.bot/iox-chatbot/chatwindow');
        const frameDiv = await frame.$(DASHBOARD.BOT.FULLBOT);
        await this.utils.compareScreenshots('dashboardChatBot', frameDiv);
        return await true;
    }
    async chatBotTitle() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        const frame = this.page.frames().find(frame => frame.url() === 'https://app.iox.bot/iox-chatbot/chatwindow');
        const botName = await frame.$eval(DASHBOARD.BOT.NAME, name => name.innerText);
        return await botName;
    }
    async chatBotByIOXURL() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        const frame = this.page.frames().find(frame => frame.url() === 'https://app.iox.bot/iox-chatbot/chatwindow');
        const byIOXButton = await frame.$(DASHBOARD.BOT.BYIOXLINK);
        await byIOXButton.click();
        await this.page.waitFor(2000);
        const pages = await this.browser.pages();
        const url = await pages[2].url();
        return await url;
    }
    async chatBotConversation() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        // wait for iframe loading
        await this.page.waitFor(2000);
        const frame = this.page.frames().find(frame => frame.url() === 'https://app.iox.bot/iox-chatbot/chatwindow');
        const optionTwo = await frame.$(DASHBOARD.BOT.QUESTION_FIRST_ANSWER_TWO);
        await optionTwo.click();
        await this.page.waitFor(2000);
        const frameDiv = await frame.$(DASHBOARD.BOT.FULLBOT);
        await this.utils.compareScreenshots('dashboardChatBotStepTwo', frameDiv);
        return await true;
    }

}