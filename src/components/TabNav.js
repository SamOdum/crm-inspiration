import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FeaturedItem from "./FeaturedItem";

function TabNav() {
  return (
    <Tabs>
      <TabList>
        <Tab>Featured Item</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <FeaturedItem/>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
}

export default TabNav;
