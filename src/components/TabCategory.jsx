import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
const TabCategory = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Web</Tab>
                    <Tab>Graphic</Tab>
                    <Tab>Digital</Tab>
                </TabList>




                <TabPanel>
                   <JobCard></JobCard>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default TabCategory;