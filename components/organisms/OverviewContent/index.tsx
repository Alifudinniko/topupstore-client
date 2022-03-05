import Category from "./category";
import TableRow from "./TableRow";

export default function OverviewContent() {
  return (
    <section className="overview overflow-auto">
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Top Up Categories
            </p>
            <div className="main-content">
              <div className="row">
                <Category icon="ic-destop-game" nominal={1850000}>
                  {" "}
                  Game <br /> Destop{" "}
                </Category>
                <Category icon="ic-mobile-game" nominal={1850000}>
                  {" "}
                  Game <br /> Mobile{" "}
                </Category>
                <Category icon="ic-destop-game" nominal={1850000}>
                  {" "}
                  Other <br /> Categotries{" "}
                </Category>
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="text-start" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow
                    title="Mobile Legend"
                    category="Destop"
                    item={200}
                    item_type="Diamond"
                    price={2000000}
                    status="Pending"
                    image="overview-1"
                  />
                  <TableRow
                    title="Call of Duty"
                    category="Destop"
                    item={550}
                    item_type="Money"
                    price={4000000}
                    status="Success"
                    image="overview-2"
                  />
                  <TableRow
                    title="Clash of Clans"
                    category="Mobile"
                    item={100}
                    item_type="Gems"
                    price={3500000}
                    status="Failed"
                    image="overview-3"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}