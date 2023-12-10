class MechanicBoardPage {
  get pageTitle() {
    return $(".page-title");
  }

  async verifyPage(title) {
    await this.pageTitle.waitForDisplayed();
    await expect(this.pageTitle).toHaveText(title);
    await expect(browser).toHaveUrl(
      `${browser.options.baseUrl}/dashboard/dms/mechanicdashboard`
    );
  }
}

export default new MechanicBoardPage();
