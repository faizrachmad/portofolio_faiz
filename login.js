import LoginPage from '../pageobject/login.page'
import DashboardPage from '../pageobject/dashboard.page'
import SideMenuPage from '../pageobject/sideMenu.page'

describe('Login - Positive Case', () => {
    beforeEach(async () => {
        await LoginPage.open();
       });

    it('As a AWOAdmin, I can login successfully', async () => {
        await LoginPage.setLogin('testDMSAWOAdmin', 'Astra@123');
        await DashboardPage.verifyPage('testDMSAWOAdmin');
        await SideMenuPage.verifyPage(['Dashboard', 'DMS']);
    });

    it('As a CustomerService, I can login successfully', async () => {
        await LoginPage.setLogin('testDMSCustomerService', 'Astra@123');
        await DashboardPage.verifyPage('testDMSCustomerService');
        await SideMenuPage.verifyPage(['Dashboard', 'Message']);
    });

    it('As a HO, I can login successfully', async () => {
        await LoginPage.setLogin('testDMSHO', 'Astra@123');
        await DashboardPage.verifyPage('testDMSHO');
        await SideMenuPage.verifyPage(['Dashboard', 'Promo', 'Master', 'News & Article', 'Booking Service', 'Order Request', 'DMS', 'Message', 'Daihatsu Connect', 'DMS Data']);
    });

    afterEach(async () => {
        await browser.reloadSession();
    })

})

