import Page from "../../utils/page";

class DashboardPage extends Page {
  get labelUsername() {
    return $(".userRole");
  }

  open() {
    return super.open(`dashboard/dashboard`);
  }

  async verifyPage(username) {
    await this.labelUsername.waitForDisplayed();
    await expect(this.labelUsername).toHaveText(username);
    await expect(browser).toHaveUrl(
      `${browser.options.baseUrl}/dashboard/dashboard`
    );
  }
}

export default new DashboardPage();
