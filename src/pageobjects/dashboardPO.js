//import * as path from 'path';
import {DASHBOARD} from '../helpers/constants/dashboardConstants.js';
import {NAVBAR} from '../helpers/constants/navbarConstants.js';
import {BOT_SECTION} from '../helpers/constants/botsSectionConstants.js';
import {IFRAME} from '../helpers/constants/iframeConstants.js';

import Utils from '../helpers/utils';
//import ScreenshotTester from 'puppeteer-screenshot-tester';


export default class Dashboard {
    constructor(page) {
        this.page = page;
        this.utils = new Utils(page);
    }
    async pageTitle() {
        return await this.page.title();
    }
    async MESSAGES_PAST_7_DAYS_DIV_Exist() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        return await this.page.$(DASHBOARD.SELECTORS.PAST_7_DAYS_TEXT_DIV) !== null;
    }
    async MESSAGES_PAST_7_DAYS_MESSAGES() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        return await this.page.$eval(DASHBOARD.SELECTORS.PAST_7_DAYS_MESSAGES, text => text.innerText);
    }
    async MESSAGES_PAST_7_DAYS_TEXT() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        return await this.page.$eval(DASHBOARD.SELECTORS.PAST_7_DAYS_TEXT, text => text.innerText);
    }
    async MESSAGES_PAST_7_DAYS_NUMBER() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        const messagesCountBefore = await this.page.$eval(DASHBOARD.SELECTORS.PAST_7_DAYS_NUMBER, text => text.innerText);
        await this.page.click(NAVBAR.SELECTORS.BOTS);
        await this.page.waitForSelector(BOT_SECTION.SELECTORS.BOT_2323);
        await this.page.click(BOT_SECTION.SELECTORS.BOT_2323);
        await this.page.waitForSelector(BOT_SECTION.SELECTORS.RUN);
        await this.page.click(BOT_SECTION.SELECTORS.RUN);
        // wait for iframe loading
        await this.page.waitFor(3000);
        const frame = this.page.frames().find(frame => frame.name() === 'responsiveFrame');
        const mainButton = await frame.$(IFRAME.SELECTORS.MAIN_BUTTON);
        await mainButton.click();
        await this.page.waitFor(1000);
        const agreement_checkbox = await frame.$(IFRAME.SELECTORS.AGREEMENT_CHECKBOX);
        await agreement_checkbox.click();
        const agreement_confirm_button = await frame.$(IFRAME.SELECTORS.AGREEMENT_CONFIRM_BUTTON);
        await agreement_confirm_button.click();
        await this.page.waitFor(1000);
        const google_button = await frame.$(IFRAME.SELECTORS.GOOGLE);
        await google_button.click();
        await this.page.waitFor(500);
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        await this.page.waitFor(500);
        const messagesCountAfter = await this.page.$eval(DASHBOARD.SELECTORS.PAST_7_DAYS_NUMBER, text => text.innerText);
        console.log('before', messagesCountBefore);
        console.log('after ', messagesCountAfter);
        const addedOneMessage = Number(messagesCountBefore) + 1 === Number(messagesCountAfter) ? true : false;
        return await addedOneMessage;
    }

    async MESSAGES_PAST_30_DAYS_DIV_Exist() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        return await this.page.$(DASHBOARD.SELECTORS.PAST_30_DAYS_TEXT_DIV) !== null;
    }
    async MESSAGES_PAST_30_DAYS_MESSAGES() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        return await this.page.$eval(DASHBOARD.SELECTORS.PAST_30_DAYS_MESSAGES, text => text.innerText);
    }
    async MESSAGES_PAST_30_DAYS_TEXT() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        return await this.page.$eval(DASHBOARD.SELECTORS.PAST_30_DAYS_TEXT, text => text.innerText);
    }
    async MESSAGES_PAST_30_DAYS_NUMBER() {
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        const messagesCountBefore = await this.page.$eval(DASHBOARD.SELECTORS.PAST_30_DAYS_NUMBER, text => text.innerText);
        await this.page.click(NAVBAR.SELECTORS.BOTS);
        await this.page.waitForSelector(BOT_SECTION.SELECTORS.BOT_2323);
        await this.page.click(BOT_SECTION.SELECTORS.BOT_2323);
        await this.page.waitForSelector(BOT_SECTION.SELECTORS.RUN);
        await this.page.click(BOT_SECTION.SELECTORS.RUN);
        // wait for iframe loading
        await this.page.waitFor(3000);
        const frame = this.page.frames().find(frame => frame.name() === 'responsiveFrame');
        const mainButton = await frame.$(IFRAME.SELECTORS.MAIN_BUTTON);
        await mainButton.click();
        await this.page.waitFor(1000);
        //const agreement_checkbox = await frame.$(IFRAME.SELECTORS.AGREEMENT_CHECKBOX);
        //await agreement_checkbox.click();
        //const agreement_confirm_button = await frame.$(IFRAME.SELECTORS.AGREEMENT_CONFIRM_BUTTON);
        //await agreement_confirm_button.click();
        //await this.page.waitFor(1000);
        const google_button = await frame.$(IFRAME.SELECTORS.GOOGLE);
        await google_button.click();
        await this.page.waitFor(500);
        await this.page.click(NAVBAR.SELECTORS.DASHBOARD);
        await this.page.waitFor(500);
        const messagesCountAfter = await this.page.$eval(DASHBOARD.SELECTORS.PAST_30_DAYS_NUMBER, text => text.innerText);
        console.log('before', messagesCountBefore);
        console.log('after ', messagesCountAfter);
        const addedOneMessage = Number(messagesCountBefore) + 1 === Number(messagesCountAfter) ? true : false;
        return await addedOneMessage;
    }

}