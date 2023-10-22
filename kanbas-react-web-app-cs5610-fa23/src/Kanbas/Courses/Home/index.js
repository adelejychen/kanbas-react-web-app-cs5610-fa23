
import React from 'react';
import ModuleList from '../Modules/ModuleList';
import './index.css';
import { FaFileImport, FaRegFile, FaStream, FaBell, FaChartBar, FaRegStickyNote, FaHtml5 } from 'react-icons/fa';
import { MdAnnouncement, MdPages } from 'react-icons/md';

function Home() {
    return (
        <div className="row"  style={{ width: "1050px" }}>
            <div className="col-10">
                <ModuleList />
            </div>
            <div className="col-2">

                {/* Add your actions buttons */}
                <div className="actions-list">
                    <button className="icon-button">
                        <FaFileImport size={15} /> Import Existing Content
                    </button>
                    <button className="icon-button">
                        <FaRegFile size={15} /> Import from Commons
                    </button>
                    <button className="icon-button">
                        <FaStream size={15} /> Choose Home Page
                    </button>
                    <button className="icon-button">
                        <MdAnnouncement size={15} /> New Announcement
                    </button>
                    <button className="icon-button">
                        <FaChartBar size={15} /> New Analytics
                    </button>
                    <button className="icon-button">
                        <FaBell size={15} /> View Course Notifications
                    </button>
                    <button className="icon-button">
                        <MdPages size={15} /> View Course Stream
                    </button>
                </div>

                <h5>To Do</h5>
                <hr />
             <ul>
                    <li className="red-text">
                        <FaRegStickyNote size={20} /> Grade A1 - ENV + HTML
                    </li>
                    <li className="red-text">
                        <FaRegStickyNote size={20} /> Grade A2 - CSS + BOOTSTRAP
                    </li>
                 </ul>
            </div>
        </div>
    );
}

export default Home;
