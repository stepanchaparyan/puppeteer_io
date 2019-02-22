import puppeteer from 'puppeteer';
import {expect} from 'chai';
import FlowBot from '../src/pageobjects/flowBotPO';
import LoginPage from '../src/pageobjects/loginPagePO';

let browser, page, loginPage, flowBot;
let dashboardPage = 'dashboard';
const viewport = {width: 1020, height: 1080};
//const screenMaximized = {args: ['--start-maximized']};
//const showSlowMotion = {headless: false, slowMo: 300};

//for(var i = 1; i <= 10; i++){

describe('Simple Flow Bot - Important Actions', () => {
    before(async() => {
        //browser = await puppeteer.launch({headless: false, args: ['--start-maximized']});
        browser = await puppeteer.launch({ignoreHTTPSErrors: true, headless: false});
        page = await browser.newPage();
        await page.setViewport(viewport);
        flowBot = new FlowBot(page, browser);
        loginPage = new LoginPage(page);
        await loginPage.open(dashboardPage);
        await loginPage.logIn();
    });
    after(async() => {
        await browser.close();
    });


    context.only('Check - gfbfgbn', () => {
        it('test', async() => {
            expect(await flowBot.test()).to.equal(true);
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