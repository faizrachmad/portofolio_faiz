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
    const month = date.getMonth();
    const year = date.getFullYear().toString();
    await planningBoardPage.takeDate(tomorrow, month, year);
  });

  it("@TCMSADMOB-181 @agrfaizr7694 as a coordinator i can Edit existed chip (manual) && @TCMSADMOB-182 as a coordinator i can Edit existed chip (Aplication)", async () => {
    await planningBoardPage.editchipapp('1','X');
  });

});
