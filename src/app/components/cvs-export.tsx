import { CSVDownload, CSVLink } from "react-csv";

import React from "react";

const CVSExport = ({

}) => {
    const csvData = [
        ["firstname", "lastname", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"]
      ];
    
    
    return (
        <CSVLink data={csvData}>Download me</CSVLink>
    )

}

export default CVSExport;