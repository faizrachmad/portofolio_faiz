import SideMenuPage from "../pageobject/sideMenu.page";
import planningBoardPage from "../pageobject/orderPage";
import { login } from "../../utils/login";

describe("Test menu DMS Order", () => {
  it("login when using valid credential for coordinator", async () => {
    await login("testDMSCoordinator", "Astra@123", "testDMSCoordinator", [
      "Dashboard",
      "DMS",
      "DMS Data",
    ]);
    await SideMenuPage.orderMenu();
    await planningBoardPage.verifyPage(
      "Maintain Order"
    );
  });

  it("@TCMSADMOB-190 @agrfaizr7694 as a coordinator i can Check column that will be shown", async () => {
    await planningBoardPage.checkColumn();
  });

});
