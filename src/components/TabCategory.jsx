/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TabCategory = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(response.data)
        }
        getData()
    }, [setJobs])


    return (

        <Tabs>
            <div className='container px-6 py-10 mx-auto'>
                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>Web Devevloopment</Tab>
                        <Tab>Graphic Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs?.filter(j => j.category === 'Web Development').map(job => <JobCard
                                key={job._id}
                                jobs={job}></JobCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs?.filter(j => j.category === 'Graphic Design').map(job => <JobCard
                                key={job._id}
                                jobs={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs?.filter(j => j.category === 'Digital Marketing').map(job => <JobCard
                                key={job._id}
                                jobs={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
            </div>
        </Tabs>

    );
};

export default TabCategory;