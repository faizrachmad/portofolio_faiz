import SideMenuPage from "../pageobject/sideMenu.page";
import { login } from "../../utils/login";
import Order from "../pageobject/orderPage";

describe("Test - menu order", () => {
  it("should login when using valid credential for coordinator @agrrizky7676", async () => {
    await login("testDMSCoordinator", "Astra@123", "testDMSCoordinator", [
      "Dashboard",
      "DMS",
      "DMS Data",
    ]);
  });

  it("can open a order page after logged in as coordinator @agrrizky7676", async () => {
    await SideMenuPage.orderMenu();
    await Order.verifyPage("Maintain Order");
  });
});
