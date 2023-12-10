class ServiceUnitPage {
  get pageTitle() {
    return $(".page-title");
  }

  async verifyPage(title) {
    await this.pageTitle.waitForDisplayed();
    await expect(this.pageTitle).toHaveText(title);
    await expect(browser).toHaveUrl(
      `${browser.options.baseUrl}/dashboard/dms/serviceunit`
    );
  }

  async search(nopol) {
    const searchField = $(`[placeholder="Search"]`);
    const data = $(
      `/html/body/div[1]/div/section/section/section/main/main/div/div[2]/div/div/div[2]/div[3]/div/div[2]/div[2]/table/tbody/tr/td[4]`
    );
    await searchField.setValue(nopol);
    expect(searchField).toHaveValue(nopol);
    expect(data).toHaveText(nopol);
  }

  async advancedSearch(vehicleType) {
    const searchButton = await $(".mdi-arrow-up");
    const input = await $(
      "/html/body/div[1]/div/section/section/section/main/main/div/div[2]/div/div/div[2]/div[2]/div[2]/div/div/div/form/div/div[1]/div[2]/div[2]/div/div/div/div"
    );
    const data = $(
      "/html/body/div[1]/div/section/section/section/main/main/div/div[2]/div/div/div[2]/div[3]/div/div[2]/div[2]/table/tbody/tr[1]/td[5]"
    );
    await searchButton.waitForDisplayed();
    await browser.waitUntil(() => searchButton.isClickable());
    await searchButton.click();
    await input.waitForDisplayed();
    const inputClick = await input.isClickable();
    if (inputClick) {
      await input.setValue(vehicleType);
    }
    await input.click();
    const button = await $(".searchbtn");
    await button.click();
    expect(input).toHaveValue("Mobil");
    expect(data).toHaveText("Mobil");
  }
}

export default new ServiceUnitPage();
