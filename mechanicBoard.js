import SideMenuPage from "../pageobject/sideMenu.page";
import { login } from "../../utils/login";
import mechanicBoardPage from "../pageobject/mechanicBoardPage";

describe("Test - menu mekanik board", () => {
  it("should login when using valid credential for coordinator @agrrizky7676", async () => {
    await login("testDMSCoordinator", "Astra@123", "testDMSCoordinator", [
      "Dashboard",
      "DMS",
      "DMS Data",
    ]);
  });

  it("can open a mechanic board page after logged in as coordinator @agrrizky7676", async () => {
    await SideMenuPage.openMechanicBoard();
    await mechanicBoardPage.verifyPage(
      "DMS Service Location Manage Mechanic Dashboard"
    );
  });
});
