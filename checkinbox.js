import SideMenuPage from "../pageobject/sideMenu.page";
import planningBoardPage from "../pageobject/planningBoardPage";
import { login } from "../../utils/login";

describe("Test menu planning board", () => {
  it("login when using valid credential for coordinator", async () => {
    await login("testDMSCoordinator", "Astra@123", "testDMSCoordinator", [
      "Dashboard",
      "DMS",
      "DMS Data",
    ]);
    await SideMenuPage.goToPlanningBoard();
    await planningBoardPage.verifyPage(
      "DMS Planning Board Manage Planning Board"
    );
  });

  it("Change date", async () => {
    const date = new Date();
    const tomorrow = date.getDate() + 1;
    await planningBoardPage.checkInbox(tomorrow);
  });

  it("@TCMSADMOB-188 @agrfaizr7694 as a coordinator i can Check order on inbox", async () => {
    await planningBoardPage.checkInbox();
  });

});
