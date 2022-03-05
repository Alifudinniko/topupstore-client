import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";
interface SideBarProps {
  activeMenu: "overview" | "transactions" | "edit-profile";
}
export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-menu-overview"
            href="/member"
            active={activeMenu === "overview"}
          />
          <MenuItem
            title="Transactions"
            icon="ic-menu-transaction"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem title="Messages" icon="ic-menu-message" />
          <MenuItem title="Card" icon="ic-menu-card" />
          <MenuItem title="Rewards" icon="ic-menu-rewards" />
          <MenuItem
            title="Setting"
            icon="ic-menu-setting"
            href="/member/edit-profile"
            active={activeMenu === "edit-profile"}
          />
          <MenuItem title="Log Out" icon="ic-menu-logout" />
        </div>
        <div className="sidebar-footer pt-73 pe-30">
          <Footer />
        </div>
      </div>
    </section>
  );
}
