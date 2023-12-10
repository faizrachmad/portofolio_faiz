class SideMenuPage {
  get sideMenu() {
    return $(".isoDashboardMenu");
  }

  get listMenu() {
    return this.sideMenu.$$(".nav-text");
  }
  // DMS Menu
  get mechanicBoard() {
    return $('//*[@id="dms$Menu"]/li[1]');
  }
  get order() {
    return $("li.ant-menu-item:nth-child(2)");
  }
  get planningBoardMenu() {
    return $("li.ant-menu-item:nth-child(3)");
  }
  // DMS Data Menu
  get mappingMechanic() {
    return $('//*[@id="dmsdata$Menu"]/li[1]');
  }
  get serviceUnit() {
    return $('//*[@id="dmsdata$Menu"]/li[2]');
  }
  get mechanic() {
    return $('//*[@id="dmsdata$Menu"]/li[3]');
  }

  async verifyPage(menu) {
    await this.sideMenu.waitForDisplayed();
    let arrMenu = [];
    await this.listMenu.map(async (element) => {
      arrMenu.push(await element.getText());
    });
    expect(arrMenu).toEqual(menu);
  }

  async goToPlanningBoard() {
    const menu = await this.listMenu[1];
    await menu.click();
    await menu.waitForDisplayed();
    await browser.waitUntil(() => this.planningBoardMenu.isClickable());
    await this.planningBoardMenu.click();
  }

  async orderMenu() {
    const menu = await this.listMenu[1];
    await menu.click();
    await menu.waitForDisplayed();
    await this.order.isClickable();
    await this.order.click();
  }

  async openMechanicBoard() {
    const menu = await this.listMenu[1];
    await menu.click();
    await menu.waitForDisplayed();
    await this.mechanicBoard.isClickable();
    await this.mechanicBoard.click();
  }
  async openMappingMechanic() {
    const menu = await this.listMenu[2];
    await menu.click();
    await menu.waitForDisplayed();
    await this.mappingMechanic.isClickable();
    await this.mappingMechanic.click();
  }
  async openServiceUnit() {
    const menu = await this.listMenu[2];
    await menu.click();
    await menu.waitForDisplayed();
    await browser.waitUntil(() => this.serviceUnit.isClickable());
    await this.serviceUnit.click();
  }
  async openMechanic() {
    const menu = await this.listMenu[2];
    await menu.click();
    await menu.waitForDisplayed();
    await this.mechanic.isClickable();
    await this.mechanic.click();
  }
}

export default new SideMenuPage();
