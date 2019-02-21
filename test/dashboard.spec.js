import puppeteer from 'puppeteer';
import {expect} from 'chai';
import Dashboard from '../src/pageobjects/dashboardPO';
import LoginPage from '../src/pageobjects/loginPagePO';

let browser, page, loginPage, dashboard;
let dashboardPage = 'dashboard';
const viewport = {width: 1020, height: 1080};
//const showUI = {headless: false};
//const screenMaximized = {args: ['--start-maximized']};
//const showSlowMotion = {headless: false, slowMo: 300};

//for(var i = 1; i <= 10; i++){

describe('Dashboard page elements existing', () => {
    before(async() => {
        //browser = await puppeteer.launch({headless: false, args: ['--start-maximized']});
        browser = await puppeteer.launch({ignoreHTTPSErrors: true});
        page = await browser.newPage();
        await page.setViewport(viewport);
        dashboard = new Dashboard(page);
        loginPage = new LoginPage(page);
        await loginPage.open(dashboardPage);
        await loginPage.logIn();
    });
    after(async() => {
        await browser.close();
    });
    context('Full page',() => {
        it('pageTitle is Dashboard', async() => {
            expect(await dashboard.pageTitle()).to.equal('Dashboard');
        });
        it('PLATFORM_STATUS_COLORS', async() => {
            expect(await dashboard.FOUR_DIVS_COLORS_UI()).to.equal(true);
        });
    });

    context.skip('Check - Messages Past 7 Days section', () => {
        it('MESSAGES PAST 7 DAYS DIV - Exist', async() => {
            expect(await dashboard.MESSAGES_PAST_7_DAYS_DIV_Exist()).to.equal(true);
        });
        it('MESSAGES PAST 7 DAYS DIV - Text: MESSAGES', async() => {
            expect(await dashboard.MESSAGES_PAST_7_DAYS_MESSAGES()).to.equal('MESSAGES');
        });
        it('MESSAGES PAST 7 DAYS DIV - Text: Number', async() => {
            expect(await dashboard.MESSAGES_PAST_7_DAYS_NUMBER()).to.equal(true);
        });
        it('MESSAGES PAST 7 DAYS DIV - Text: Past 7 Days', async() => {
            expect(await dashboard.MESSAGES_PAST_7_DAYS_TEXT()).to.equal('Past 7 Days');
        });
    });

    context.skip('Check - Messages Past 30 Days section', () => {
        it('MESSAGES PAST 30 DAYS DIV - Exist', async() => {
            expect(await dashboard.MESSAGES_PAST_30_DAYS_DIV_Exist()).to.equal(true);
        });
        it('MESSAGES PAST 30 DAYS DIV - Text: MESSAGES', async() => {
            expect(await dashboard.MESSAGES_PAST_30_DAYS_MESSAGES()).to.equal('MESSAGES');
        });
        it('MESSAGES PAST 30 DAYS DIV - Text: Number', async() => {
            expect(await dashboard.MESSAGES_PAST_30_DAYS_NUMBER()).to.equal(true);
        });
        it('MESSAGES PAST 30 DAYS DIV - Text: Past 30 Days', async() => {
            expect(await dashboard.MESSAGES_PAST_30_DAYS_TEXT()).to.equal('Past 30 Days');
        });
    });

    context.skip('Check - Sessions Past 30 Days section', () => {
        it('SESSIONS PAST 30 DAYS DIV - Exist', async() => {
            expect(await dashboard.SESSIONS_PAST_30_DAYS_DIV_Exist()).to.equal(true);
        });
        it('SESSIONS PAST 30 DAYS DIV - Text: Sessions', async() => {
            expect(await dashboard.SESSIONS_PAST_30_DAYS_SESSIONS()).to.equal('SESSIONS');
        });
        it('SESSIONS PAST 30 DAYS DIV - Text: Number', async() => {
            expect(await dashboard.SESSIONS_PAST_30_DAYS_NUMBER()).to.equal(true);
        });
        it('SESSIONS PAST 30 DAYS DIV - Text: Past 30 Days', async() => {
            expect(await dashboard.SESSIONS_PAST_30_DAYS_TEXT()).to.equal('Past 30 Days');
        });
    });

    context('Check - Bots Count section', () => {
        it('BOTS_COUNT DIV - Exist', async() => {
            expect(await dashboard.BOTS_COUNT_DIV_Exist()).to.equal(true);
        });
        it('BOTS_COUNT_Text', async() => {
            expect(await dashboard.BOTS_COUNT_DIV_Text()).to.include('out of 10 bots used');
        });
        it('BOTS_COUNT', async() => {
            expect(await dashboard.BOTS_COUNT()).to.equal(true);
        });
    });

    context('Check - Platform Status section ', () => {
        it('PLATFORM_STATUS_UI', async() => {
            expect(await dashboard.PLATFORM_STATUS_DIV_UI()).to.equal(true);
        });
        it('PLATFORM_STATUS_Text', async() => {
            expect(await dashboard.PLATFORM_STATUS_Text()).to.equal(' Platform Status');
        });
        it('PLATFORMS_LIST', async() => {
            expect(await dashboard.PLATFORMS_LIST()).to.deep.equal([ ' Core',' Api',' Email',' WebChat',' SMS',' Facebook',' WhatsApp',' Slack' ]);
        });
        it('HAVING_TROUBLES_Text', async() => {
            expect(await dashboard.TROUBLES_TEXT()).to.equal(' Having troubles? Contact us.');
        });
        it('CONTACT_US_LINK', async() => {
            expect(await dashboard.CONTACT_US_LINK()).to.equal('https://ioxlab.atlassian.net/servicedesk/customer/portals');
        });
    });


});
//}

