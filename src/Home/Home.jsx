import React from 'react'
import Navbar from '../Components/Navbar'
import Accordion from 'react-bootstrap/Accordion';
import { PieChart } from '../Components/Charts/PieCharts';
import { LineChart } from '../Components/Charts/GraphChart';
import { BarChart } from '../Components/Charts/BarChart';

const data = [
    {
        title: 'Lists of RDC ',
        backgroundColor: "#D1E9FC"
    },
    {
        title: 'Lists of RAC',
        backgroundColor: "#FFF7CD"
    },
    {
        title: "Lists of PS",
        backgroundColor: "#FFE7D9"
    },
]
const Home = () => {
    return (
        <div className='w-100'>
            <Navbar />
            <div className='container'>
                <div>
                    {data.map((item, idex) => {
                        return (
                            <Accordion >
                                <Accordion.Item eventKey="0" className='mt-3'>
                                    <Accordion.Header>{item.title}</Accordion.Header>
                                    <Accordion.Body className='row'>
                                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. */}
                                        <div className='col-lg-8 col-md-8 col-sm-12'>
                                            <LineChart />
                                        </div>
                                        <div className='col-lg-4 col-md-4 col-sm-12' >
                                            <PieChart />
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12'>
                                            <BarChart />
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    })}
                </div>

            </div>

        </div >

    )
}

export default Home