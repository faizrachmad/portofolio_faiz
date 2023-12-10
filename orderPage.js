class Order {
  get pageTitle() {
    return $(".page-title");
  }

  get columnbox() {
    return $('[class="react-bs-table react-bs-table-bordered"]');
  }

  async verifyPage(title) {
    await this.pageTitle.waitForDisplayed();
    await expect(this.pageTitle).toHaveText(title);
    await expect(browser).toHaveUrl(
      `${browser.options.baseUrl}/dashboard/dms/order`
    );
  }

  async checkColumn() {
    await expect(this.columnbox).toBeDisplayed();
  }
}

export default new Order();
