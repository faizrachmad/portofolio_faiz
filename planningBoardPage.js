import Page from "../../utils/page";

class PlanningBoardPage extends Page {
  get pageTitle() {
    return $(".page-title");
  }

  get days() {
    return $$(
      "div.daterangepicker:nth-child(15)>div:nth-child(2)>div:nth-child(1)>table:nth-child(1)>tbody>tr>td"
    );
  }

  get btnChip() {
    return $(
      '[class="vis-item vis-range border-green light-blue plan vis-editable"]'
    );
  }

  get btnDelete() {
    return $('[class="vis-delete"]');
  }

  get popupDelete() {
    return $('[class="swal2-modal swal2-show"]');
  }

  get popupsuccessDelete() {
    return $('[class="swal2-buttonswrapper"]');
  }

  get btnconfirmDelete() {
    return $('[class="swal2-confirm swal2-styled"]');
  }

  get checkDashboard() {
    return $(
      '[style="box-sizing: border-box; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; position: relative; width: 75%; max-width: none; margin: 0px auto; z-index: 1500; opacity: 1; transform: translate(0px, 64px);"]'
    );
  }

  get btnchipConfirmed() {
    return $(
      '[class="vis-item vis-range border-blue purple plan vis-editable"]'
    );
  }

  get pupupeditchipConfirmed() {
    return $('[class="swal2-content"]');
  }

  get txtcustomerPhone() {
    return $('[name="customerPhone"]');
  }

  get txtsymptom() {
    return $('[name="symptom"]');
  }

  get btnsaveEditChip() {
    return $('[class="btn uploadbtn"]');
  }

  get popupsuccessEditchip() {
    return $('[class="swal2-modal swal2-show"]');
  }

  // get btndateInbox(){
  //   return $(`//button[normalize-space()=${day}]`);
  // }

  get popupInbox(){
    return $('[class="custom-tooltip"]');
  }

  open() {
    return super.open(`dashboard/dms/planningboard`);
  }

  async verifyPage(title) {
    await this.pageTitle.waitForDisplayed();
    await expect(this.pageTitle).toHaveText(title);
    await expect(browser).toHaveUrl(
      `${browser.options.baseUrl}/dashboard/dms/planningboard`
    );
  }

  async takeDate(day, month, year) {
    const days = await $(`//td[@class='available' and text()=${day}]`);
    const calender = await $("#scheduleDate");
    await browser.waitUntil(() => calender.isClickable());
    await calender.click();
    await $(".monthselect").selectByIndex(month);
    await $(".yearselect").selectByVisibleText(year);
    await days.click();
    await $(".applyBtn").click();
  }

  async checkborderColor() {
    await expect(this.btnchipConfirmed).toBeDisplayed();
    await expect(this.btnChip).toBeDisplayed();
  }

  async checkChip() {
    await this.btnChip.doubleClick();
    await this.checkDashboard.waitForDisplayed();
    await expect(this.checkDashboard).toBeDisplayed();
  }

  async editchipConfirmed() {
    await this.btnchipConfirmed.doubleClick();
    await expect(this.pupupeditchipConfirmed).toBeDisplayed();
  }

  async deleteChip() {
    await this.btnChip.click();
    await this.btnDelete.click();
    await expect(this.popupDelete).toBeDisplayed();
    await this.btnconfirmDelete.click();
    await expect(this.popupsuccessDelete).toBeDisplayed();
  }

  async editchipapp(phonenumber, symptom) {
    await this.btnChip.doubleClick();
    await this.checkDashboard.waitForDisplayed();
    await expect(this.checkDashboard).toBeDisplayed();
    await this.txtcustomerPhone.addValue(phonenumber);
    await this.txtsymptom.addValue(symptom);
    await this.btnsaveEditChip.click();
    await expect(this.popupsuccessEditchip).toBeDisplayed();
  }

  async checkInbox(valueinbox){
    const btndays = await $(`//button[normalize-space()=${valueinbox}]`);
    await btndays.click();
    // await this.btndateInbox.click();
    await expect(this.popupInbox).toBeDisplayed();
  }

  async checkRefresh() {
    await $(`[class="btn clearbtn"]`).waitForDisplayed();
  }
}

export default new PlanningBoardPage();
